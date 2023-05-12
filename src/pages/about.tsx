import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import { profileImg } from "~/config";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <Spacer height="40px" />
      <h3>
        Hello! My name is Isaiah, and you may know me online as{" "}
        <strong>iSimonDev</strong>.
      </h3>
      <Spacer height="40px" />
      <div className="flex items-center justify-evenly  ">
        <div className="">
          <Button href="/projects" label="Projects" />
        </div>
        <Image
          src={profileImg.url}
          alt={profileImg.alt}
          width={200}
          height={200}
          className="rounded-full"
        />
        <div>
          <Button href="/blog" label="Blog" variant="secondary" />
        </div>
      </div>

      <Spacer height="30px" />

      <Spacer height="20px" />
      <p>
        I'm a software engineer with a passion for web development, a
        business-oriented mindset, and an open heart for every industry where I
        can make an impact. I leverage my skills in web development to build
        user-friendly applications.
      </p>

      <hr className="my-[48px] w-10" />

      <h3>Passion</h3>
      <p>
        What I love most about this field is the capacity of the web to
        revolutionize industries, from a simple responsive webpage to complex
        applications. The potential is unlimited, and the learning journey is an
        adventure in itself.
      </p>

      <hr className="my-[48px] w-20" />

      <h3>Background</h3>
      <p>
        My background in healthcare has inspired me to use technology to improve
        several processes, though I'm also excited about opportunities in other
        sectors as well. I'm enthusiastic about the future and eager to continue
        exploring, learning, and innovating.
      </p>

      <hr className="my-[48px] w-36" />

      <h3>Outside of work</h3>
      <p>
        I love to get involved in open-source projects. These initiatives
        provide a platform to collaborate, learn, and contribute to the wider
        tech community. They keep my skills sharp and broaden my perspective on
        how software can solve diverse problems.
      </p>
    </Layout>
  );
};

export default AboutPage;
