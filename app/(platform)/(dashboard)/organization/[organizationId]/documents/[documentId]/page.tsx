"use client";
import { db } from "@/lib/db";
import { DocumentNavbar } from "./_components/document-navbar";
import { Document } from "@prisma/client";
import { Toolbar } from "./_components/toolbar";
// import { useQuery } from "@tanstack/react-query";
import { fetcher } from "@/lib/fetcher";
import { useMutation, useQuery } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";
import { api } from "@/convex/_generated/api";
import { Cover } from "./_components/cover";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";
import { useMemo } from "react";

interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
    organizationId: string;
  };
}

const DocumentIdPage = ({ params }: DocumentIdPageProps) => {
  const Editor = useMemo(
    () => dynamic(() => import("./_components/editor"), { ssr: false }),
    [],
  );
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId,
    orgId: params.organizationId,
  });

  const update = useMutation(api.documents.update);

  const onChange = (content: string) => {
    update({
      id: params.documentId,
      content,
    });
  };

  if (document === undefined) {
    return (
      <div>
        <Cover.Skeleton />
        <div className="dark:bg-[#020D1A] md:max-w-3xl lg:max-w-4xl mx-auto mt-10">
          <div className="space-y-4 pl-8 pt-4">
            <Skeleton className="h-14 w-[50%]" />
            <Skeleton className="h-1 w-[80%]" />
            <Skeleton className="h-1 w-[40%]" />
            <Skeleton className="h-1 w-[60%]" />
          </div>
        </div>
      </div>
    );
  }

  if (document === null) {
    return <div>Not found</div>;
  }
  return (
    <div className="pb-40 dark:bg-[#020D1A] dark:text-dark-6">
      <Cover url={document.coverImage} />
      {/* md:max-w-3xl lg:max-w-4xl */}
      <div className=" w-full ml-10">
        <Toolbar initialData={document} />

        <Editor onChange={onChange} initialContent={document.content} />
      </div>
      {/* 
      <p>Document Id page</p>
      <p>Document id {params.documentId}</p>
      <p>Document OrgId {paraams.organizationId}</p> */}
      {/* <p className="text-bold">Document OrgId data: {documentData?.title}</p> */}
    </div>
  );
};

export default DocumentIdPage;
