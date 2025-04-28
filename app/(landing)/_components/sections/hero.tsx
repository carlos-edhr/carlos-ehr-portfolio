"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../secondary/constants";
import Spline from "@splinetool/react-spline";
import AnimatedCounter from "../secondary/animated-counter";
import { useEffect, useState } from "react";
import Button from "../secondary/landing-button";

const titles = [
  "Hello, I'm Carlos, a a software developer",
  "based in Baja California Mexico ",
  " with a passion for technology & programming.",
];

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" },
    );
  });
  const [currentTitleIndex, setCurrentTitleIndex] = useState<number>(0);
  const [currentText, setCurrentText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(300); // Typing speed in ms

  // Typing and deleting logic for hero title
  useEffect(() => {
    const handleTyping = () => {
      const fullText = titles[currentTitleIndex];
      if (!isDeleting) {
        // Typing phase
        setCurrentText((prev) => fullText.substring(0, prev.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 2000); // Pause before deleting
        }
      } else {
        // Deleting phase
        setCurrentText((prev) => fullText.substring(0, prev.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
      setTypingSpeed(isDeleting ? 100 : 150);
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, currentTitleIndex, typingSpeed]);

  return (
    <section id="hero" className="bg-zinc-900 relative overflow-hidden pb-6">
      <div className="absolute top-0 left-0 z-10">
        <img src="/images/bg.png" alt="" />
      </div>

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text text-slate-200">
              <h1>
                <span>Developing </span>
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white text-white"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Business Solutions</h1>
              <h1>that Deliver Results</h1>
              {/* <div className="absolute bottom-8 left-8 z-10">
                <h1 className="text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-roboto font-extrabold tracking-wider typewriter">
                  {currentText}
                </h1>
              </div> */}
            </div>

            <p className="text-emerald-400 md:text-xl relative z-10 pointer-events-none">
              Hi, I'm Carlos, a full-stack web developer based in Baja
              California Mexico with a passion for technology & programming.
            </p>
            {/* <div className="absolute bottom-48 left-8 z-10">
              <h1 className="text-white text-xl sm:text-2xl md:text-3xl  font-roboto font-extrabold tracking-wider typewriter">
                {currentText}
              </h1>
            </div> */}

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12 rounded-full  text-slate-800 font-roboto font-bold text-lg flex items-center justify-center cursor-pointer hover:bg-emerald-950/50 bg-emerald-500 hover:text-white"
              id="cursor"
            />
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          <div className="hero-3d-layout bg-zinc-900">
            {/* <HeroExperience /> */}

            <Spline scene="https://prod.spline.design/krIgaybRyyYoSHHF/scene.splinecode" />
          </div>
        </figure>
      </div>

      <AnimatedCounter />
    </section>
  );
};

export default Hero;
