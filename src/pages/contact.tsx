import React from "react";
import { type NextPage } from "next";
import Button from "~/components/Button";
import Layout from "~/components/Layout";
import Spacer from "~/components/Spacer";
import SpanGradient from "~/components/SpanGradient";

const Contact: NextPage = () => {
  return (
    <Layout title="Contact - Isaiah Simon">
      <section className="min-h-1/2 flex flex-col items-center justify-center py-2">
        <h3>What&apos;s Next?</h3>
        <Spacer height="10px" />
        <h1 className="mb-4 text-center text-5xl font-bold md:text-7xl">
          Get In Touch
        </h1>
        <p className="px-4 text-center md:px-0">
          I&apos;m always looking for new opportunities, and my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <Spacer height="35px" />
        <Button
          label="Say Hello"
          href="mailto:isimon.dev@gmail.com"
          rel="noopener noreferrer"
          target="_blank"
        />
      </section>

      <Spacer height="30px" />

      <section className="flex flex-col items-center justify-center ">
        <h2 className="text-center">
          Are you a<SpanGradient> recruiter </SpanGradient>
          or a<SpanGradient> client</SpanGradient>?
        </h2>

        <Spacer height="40px" />
        {/* Buttons wrapper */}
        <div className="flex w-full  items-center justify-center lg:w-full lg:flex-row">
          <Button href="/recruiters" label="Recruiters" />
          <Spacer width="30px" height="30px" />
          <Button href="/clients" label="Clients" variant="secondary" />
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
