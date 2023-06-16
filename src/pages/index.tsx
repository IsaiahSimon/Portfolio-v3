import { type NextPage } from "next";
import Layout from "~/components/Layout";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";
import SpanGradient from "~/components/SpanGradient";

const Home: NextPage = () => {
  return (
    <>
      <Layout title="Isaiah Simon">
        <div className="flex min-h-[80vh] flex-col justify-center">
          <section className="flex h-full flex-col items-start justify-start sm:justify-center ">
            <h3 className="">Hi, my name is</h3>
            <Spacer height="20px" />
            <h1 className="md:text-7xl lg:text-8xl">Isaiah Simon.</h1>
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

          <Spacer height="40px" />

          {/* <section className="flex flex-col items-center justify-center border border-red-400 lg:items-start">
          <h2 className="text-center">
            Are you a<SpanGradient> recruiter </SpanGradient>
            or a<SpanGradient> client</SpanGradient>?
          </h2>

          <Spacer height="40px" />

          <div className="flex w-full  items-center justify-center lg:w-full lg:flex-row lg:justify-start">
            <Button href="/recruiters" label="Recruiters" />
            <Spacer width="30px" height="30px" />
            <Button href="/clients" label="Clients" variant="secondary" />
          </div>
        </section> */}
        </div>
      </Layout>
    </>
  );
};

export default Home;
