"use client";

import React, { useEffect, useRef } from "react";
/**
 * We import gsap and optionally the CSSPlugin for transformations.
 * (GSAP automatically registers the CSSPlugin internally, but
 * demonstrating explicit plugin usage if you'd like.)
 */
import { gsap, CSSPlugin } from "gsap";
import { Button } from "@/components/ui/button";
import TitleHeader from "./title-header";
// If you'd like more advanced 3D effects, you can also import other GSAP plugins
// import { MotionPathPlugin } from "gsap/MotionPathPlugin";

// Register plugins so GSAP is aware of them
gsap.registerPlugin(CSSPlugin /*, MotionPathPlugin */);

interface BentoBoxProps {
  // Paths to the three videos (top-left, center, bottom-right)
  videoTopLeft: string;
  videoCenter: string;
  videoBottomRight: string;
}

export const BentoBox: React.FC<BentoBoxProps> = ({
  videoTopLeft,
  videoCenter,
  videoBottomRight,
}) => {
  // Refs for each “box” to apply 3D tilt on hover
  const boxRefs = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const boxes = boxRefs.current;
    if (!boxes.length) return;

    boxes.forEach((box) => {
      // -----------------------------------------------------
      // 1) CONTINUOUS FLOATING EFFECT
      //    Slight up/down bob and gentle rotation
      // -----------------------------------------------------
      gsap.to(box, {
        y: -5,
        rotate: 0.5, // minor z-axis rotation in degrees
        repeat: -1, // infinite loop
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });

      // -----------------------------------------------------
      // 2) 3D TILT ON HOVER
      // -----------------------------------------------------
      const hoverTl = gsap.timeline({ paused: true });
      hoverTl.to(box, {
        rotateX: 3,
        rotateY: 3,
        scale: 1.03,
        transformPerspective: 800,
        duration: 0.3,
        ease: "power1.out",
      });

      const handleMouseEnter = () => hoverTl.play();
      const handleMouseLeave = () => hoverTl.reverse();

      box.addEventListener("mouseenter", handleMouseEnter);
      box.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup
      return () => {
        box.removeEventListener("mouseenter", handleMouseEnter);
        box.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
  }, []);

  // A helper to bind refs to each box easily
  const bindBoxRef = (el: HTMLDivElement | null) => {
    if (el && !boxRefs.current.includes(el)) {
      boxRefs.current.push(el);
    }
  };

  return (
    <section className="w-full mx-auto max-w-7xl px-4 py-3 md:py-6 text-white">
      {/* Heading / Subheading */}
      <div className="text-center mb-10 md:mb-16">
        <TitleHeader
          title=" Services and skills."
          sub="🖥 My Professional Skillset"
        />

        {/* <p className="text-base md:text-lg text-gray-300 mt-4 max-w-2xl mx-auto">
          It's not only about learning new skills; it's also about making the
          most out of them. Be part of a supportive community, have access to
          project files and thrilling editing contests.
        </p> */}
      </div>

      {/* GRID / BENTO Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* ----------------------- ROW 1 ----------------------- */}
        {/* Top-left VIDEO box */}
        <div
          ref={bindBoxRef}
          className="
            rounded-lg
            bg-[#101521]
            flex
            flex-col
            justify-center
            p-6
            aspect-square
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">Web Design</h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Architecting immersive digital experiences through Figma-driven
            wireframes enhanced with dynamic interactions (GSAP, Framer Motion)
            and 3D spatial rendering (Spline, React Three Fiber). Craft
            pixel-perfect UIs with atomic design principles, optimized for
            zero-layout-shift transitions and 60fps animations.
          </p>
        </div>

        {/* Video instead of text */}
        {/* <video
            src={videoTopLeft}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          /> */}

        {/* Middle-wide "Community" box (video BG or just a static BG).
            The screenshot shows a "community" block with circle avatars,
            but we're using a video BG as requested.
        */}
        <div
          ref={bindBoxRef}
          className="
            rounded-lg
            bg-[#0B0D13]
            flex
            flex-col
            justify-center
            p-6
            aspect-square
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">Web Development</h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Full-stack implementation of performant Next.js applications with
            TypeScript core, React Server Components, and edge-ready
            architecture. Production-grade deployments via Vercel with
            integrated CI/CD, DNS configuration, and security headers. Includes
            real-world integrations: Stripe payments, replit emails, Auth.js
            authentication, Relational Databases, Supabase
            Storage/Authentication/Databases and Livekit/GetStream video
            streaming and conferences.
          </p>
        </div>

        {/* <div
          ref={bindBoxRef}
          className="
            relative
            col-span-1
            bg-[#0B0D13]
            rounded-lg
            overflow-hidden
            flex
            flex-col
            items-center
            justify-center
            p-6
            aspect-[2/1]
          "
        >
          <video
            src={videoCenter}
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          />
          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-semibold">Community</h3>
            <p className="text-sm md:text-base text-gray-300 mt-2 max-w-sm mx-auto">
              An international community to learn, share and connect. Let&apos;s
              inspire each other!
            </p>
          </div>
        </div> */}

        {/* Top-right box (Live Tutorials) */}
        <div
          ref={bindBoxRef}
          className="
            rounded-lg
            bg-[#101521]
            flex
            flex-col
            justify-center
            p-6
            aspect-square
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Software Engineering
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Building maintainable systems with layered architecture (DDD, CQRS)
            using Next.js App Router. Implements JWT authentication via Auth.js,
            RBAC policies, and Prisma-type safety. All solutions include
            SonarQube static analysis, Jest/React Testing Library coverage, and
            Snyk vulnerability scans.
          </p>
        </div>

        {/* ----------------------- ROW 2 ----------------------- */}
        {/* RAW+ Project Files */}
        <div
          ref={bindBoxRef}
          className="
            rounded-lg
            bg-[#0B0D13]
            flex
            flex-col
            justify-center
            p-6
            aspect-square
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Database Development
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Designing ACID-compliant data layers with PostgreSQL clusters
            (Supabase/RDS) and Prisma ORM migrations. Specialized in row-level
            security policies, full-text search optimization, and Redis caching
            strategies. Includes database-as-code workflows with schema
            versioning and PgHero monitoring dashboards.
          </p>
        </div>

        {/* Editing Contests */}
        <div
          ref={bindBoxRef}
          className="
            rounded-lg
            bg-[#1D1F2A]
            flex
            flex-col
            justify-center
            p-6
            aspect-square
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">Data Analysis</h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Developing actionable insights through Python-driven ETL pipelines
            (Pandas, Polars) with automated reporting (Plotly Dash). Build
            executive dashboards with Next.js-administered metrics (TanStack
            Table, Recharts). Expertise in SQL query optimization for OLAP
            workloads and predictive trend analysis.
          </p>
        </div>
        <div
          ref={bindBoxRef}
          className="
            rounded-lg
            bg-[#1D1F2A]
            flex
            flex-col
            justify-center
            p-6
            aspect-square
          "
        >
          <h3 className="text-xl md:text-2xl font-semibold">
            Machine Learning
          </h3>
          <p className="text-sm md:text-base text-gray-300 mt-2">
            Implementing production-grade ML pipelines with TensorFlow/Keras
            (Python). Specialized in embedding models into Next.js APIs via
            FastAPI - recommendation engines, computer vision prototypes, and
            NLP chatbots. Includes monitoring integration (MLflow) and
            GPU-accelerated inference on Vercel Edge.
          </p>
        </div>

        {/* Bottom-right VIDEO box */}
        {/* <div
          ref={bindBoxRef}
          className="
            bg-black
            rounded-lg
            overflow-hidden
            aspect-square
          "
        >
          <video
            src={videoBottomRight}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
     
          
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <h3
              className="
                text-2xl 
                md:text-3xl 
                font-bold 
                text-white/70 
                drop-shadow 
              "
            >
              LET HIM
              <br />
              COOK
            </h3>
          </div>
        
        </div> 
        */}
      </div>
    </section>
  );
};
