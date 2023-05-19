import React from "react";
import { type NextPage } from "next";
import Layout from "~/components/Layout";
import Button from "~/components/Button";
import Spacer from "~/components/Spacer";
import Credits from "~/components/Credits";

const CreditsPage: NextPage = () => {
  return (
    <Layout title="Credits - Isaiah Simon">
      <div className="flex items-center justify-between ">
        <h1 className="mb-6  sm:mb-0">Credits</h1>
        <div>
          <Button href="/" label="Home" variant="primary" />
        </div>
      </div>
      <h3 className="mt-5 ">
        Here you can find attributions and credits to all the individuals and
        websites I&apos;ve drawn design inspiration from for this website!
      </h3>
      <Spacer height="40px" />
      <Credits />
      <Spacer height="35px" />
    </Layout>
  );
};

export default CreditsPage;
