"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
// import { FiExternalLink, Github } from "react-icons/fi";
import { Link2Icon, Github } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "Astrophotography International Congress",
    description:
      "Video Conference and S  treaming platform for technical and scientific workshops",
    image: "/images/project1.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Stripe API",
      "Livekit API",
      "Getstream API",
      "PostgreSQL",
      "Supabase",
    ],
    liveUrl: "https://www.congresodeastrofotografia.com/",
    githubUrl: "#",
    // metrics: "Handled 5k+ concurrent users with <100ms latency",
  },
  {
    title: "Institute of Photography E-Learning",
    description:
      "Platform featuring student tracking, payments, and video conferences",
    image: "/images/project2.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "Stripe API",
      "Livekit API",
      "Getstream API",
      "PostgreSQL",
      "Supabase",
    ],
    liveUrl: "https://www.ifntijuana.com/",
    githubUrl: "#",
    // metrics: "Increased student engagement by 40%",
  },
  {
    title: "Photographer Portfolio Platform",
    description:
      "Professional showcase with online payments and content management",
    image: "/images/project3.png",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Supabase",
    ],
    liveUrl: "https://www.caneckleyva.com/",
    githubUrl: "#",
    // metrics: "Reduced load times by 60%",
  },
];

const AppShowcase = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(() => {
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
    );

    projectRefs.current.forEach((card, index) => {
      if (!card) return;

      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        },
      );
    });
  }, []);

  return (
    <section
      id="work"
      ref={sectionRef}
      className="py-20 px-4 lg:px-8 bg-zinc-900/50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          Featured Projects
        </h2>

        <div className="space-y-24">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
              className="grid lg:grid-cols-2 gap-8 group rounded-2xl p-6 hover:bg-zinc-800/30 transition-all"
            >
              <div className="relative overflow-hidden rounded-xl border-2 border-zinc-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-3xl font-bold text-white mb-4">
                  {project.title}
                </h3>

                <p className="text-lg text-zinc-300 mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-zinc-700/50 rounded-full text-sm text-emerald-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* {project.metrics && (
                  <p className="text-sm text-emerald-400/80 mb-6">
                    ▲ {project.metrics}
                  </p>
                )} */}

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
                  >
                    <Link2Icon className="text-lg" />
                    Live Demo
                  </a>

                  {/* {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-3 border border-zinc-600 text-white rounded-lg hover:bg-zinc-700/50 transition-colors"
                    >
                      <Github className="text-lg" />
                      View Code
                    </a>
                  )} */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
