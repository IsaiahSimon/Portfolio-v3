import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { profileImg } from "~/config";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <h2 className="sm:3xl text-2xl">
        Hello, I'm Isaiah, known online as <strong>iSimonDev</strong>.
      </h2>
      <div className="flex">
        <Image
          src={profileImg.url}
          alt={profileImg.alt}
          width={100}
          height={100}
          className="rounded-full"
        />
        <div>
          <p>Stats 1</p>
          <p>Stats 2</p>
          <p>Stats 3</p>
        </div>
      </div>

      <p>
        I leverage my skills in web development to build user-friendly
        applications. My background in healthcare has inspired me to use
        technology to improve processes, though I'm also excited about
        opportunities in other sectors.
      </p>

      <p>
        What I love most about this field is the capacity of the web to
        revolutionize industries, from a simple responsive webpage to complex
        applications. The potential is unlimited, and the learning journey is an
        adventure in itself.
      </p>

      <hr className="my-[48px]" />

      <h3>Outside of work</h3>

      <p>
        Beyond my professional path, I'm actively involved in open-source
        projects. These initiatives provide a platform to collaborate, learn,
        and contribute to the wider tech community. They keep my skills sharp
        and broaden my perspective on how software can solve diverse problems.
      </p>

      <hr className="my-[48px]" />

      <h3>In essence...</h3>

      <p>
        In essence, I'm a software engineer with a passion for web development,
        a business-oriented mindset, and an open heart for every industry where
        I can make an impact. I'm enthusiastic about the future and eager to
        continue exploring, learning, and innovating.
      </p>
    </Layout>
  );
};

export default AboutPage;
