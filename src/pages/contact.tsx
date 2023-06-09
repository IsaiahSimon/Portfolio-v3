import React from "react";
import { type NextPage } from "next";
import Button from "~/components/Button";
import Layout from "~/components/Layout";
import Spacer from "~/components/Spacer";

const Contact: NextPage = () => {
  return (
    <Layout title="Contact - Isaiah Simon">
      <div className="flex min-h-[80vh] flex-col justify-center">
        <section className="min-h-1/2 flex flex-col items-center justify-center ">
          <h3>What&apos;s Next?</h3>
          <Spacer height="10px" />
          <h1 className="mb-4 text-center text-5xl font-bold md:text-7xl">
            Get In Touch
          </h1>
          <p className="px-4 text-center md:px-0">
            I&apos;m always looking for new opportunities, and my inbox is
            always open. Whether you have a question or just want to say hi,
            I&apos;ll try my best to get back to you!
          </p>
          <Spacer height="35px" />
          <Button
            label="Say Hello"
            href="mailto:isimon.dev@gmail.com"
            rel="noopener noreferrer"
            target="_blank"
          />
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
