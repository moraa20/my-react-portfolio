import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center font-primary">
      <div>
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>

        <div className="absolute top-1/4 -right-32 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>

        <div className="absolute bottom-10 left-1/3 w-56 h-56 bg-pink-400 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob animation-delay-4000"></div>

        <div className="absolute top-5 left-1/5 w-5 h-5 rounded-full bg-pink-300 opacity-35 animate-shape"></div>

        <div className="absolute top-1/2 right-1/2 w-5 h-5 rounded-full bg-pink-300 opacity-35 animate-shape animation-delay-2000"></div>

        <div className="absolute bottom-20 left-5 w-5 h-5 rounded-full bg-pink-300 opacity-35 animate-shape animation-delay-4000"></div>

        <div className="absolute bottom-10 right-1/4 w-5 h-5 rounded-full bg-pink-300 opacity-35 animate-shape animation-delay-3000"></div>

        <div className="absolute top-10 right-10 w-5 h-5 rounded-full bg-pink-300 opacity-35 animate-shape animation-delay-1000"></div>
      </div>

      <div>
        <h1
          ref={h11}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          Hi,👋<br></br>My Name is<br></br>
        </h1>
        <h1
          ref={h12}
          className="text-2xl bg-clip-text bg-gradient text-transparent md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-2xl text-dark-heading dark:text-light-heading md:text-4xl xl:text-5xl xl:leading-tight font-bold"
        >
          {tagline}
        </h2>
      </div>
      <div className="mt-5 md:mt-0">
        <img ref={myimageref} className="w-1/2 md:ml-auto rounded-full border-4 border-white shadow-lg" src={img} alt="Sylviah.M" />
      </div>
    </main>
  );
}

export default Home;
