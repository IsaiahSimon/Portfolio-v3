import { type NextPage } from "next";
import Link from "next/link";
import Image from "next/image";
import Layout from "~/components/Layout";
import IconGitHub from "~/components/icons/github";
import IconTwitter from "~/components/icons/twitter";
import IconLinkedIn from "~/components/icons/linkedin";
import { profileImg, socialMedia } from "../config";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Isaiah Simon">
        <section className="flex min-h-screen flex-col items-start justify-start sm:justify-center">
          <h3 className="">Hi, my name is</h3>
          <Spacer height="20px" />
          <h1 className="">Isaiah Simon.</h1>
          <Spacer height="10px" />
          <h2 className=" ">I build things for the web.</h2>
          <Spacer height="40px" />
          <p>
            Hey, I&apos;m Isaiah. I&apos;m a Software engineer fusing
            healthcare, business & technology.
          </p>
          <p>
            I am passionate about web development and driven to innovate &
            improve user experiences.
          </p>
          <Spacer height="40px" />
          <Button href="/about" label="Explore" />
        </section>

        <section className="flex min-h-screen flex-col items-start justify-start sm:justify-center">
          <h2>Are you a recruiter or a prospective client?</h2>
          <Spacer height="40px" />
          <div className="flex w-[200px] flex-col items-center justify-center self-center lg:w-full lg:flex-row lg:justify-start">
            <Button href="/recruiters" label="Recruiters" />
            <Spacer width="30px" height="30px" />
            <Button href="/clients" label="Clients" variant="secondary" />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Home;
