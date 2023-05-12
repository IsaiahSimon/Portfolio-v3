import { type NextPage } from "next";
import Layout from "~/components/Layout";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Isaiah Simon">
        <section className="flex h-full flex-col items-start justify-start sm:justify-center lg:min-h-screen">
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

        <Spacer height="30px" />

        <section className="flex flex-col items-start justify-start">
          <h2>Are you a recruiter or a prospective client?</h2>
          <Spacer height="40px" />
          <div className="flex w-full  items-center justify-between lg:w-full lg:flex-row lg:justify-start">
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
