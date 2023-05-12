import React from "react";
import Layout from "../../components/Layout";
import SpanGradient from "~/components/SpanGradient";
import Spacer from "~/components/Spacer";

const RecruitersHomePage = () => {
  return (
    <Layout>
      <h1>
        Hi, <SpanGradient>Recruiters</SpanGradient>!
      </h1>
      <Spacer height="20px" />
      <h3>
        Here, you can find my featured projects, my work experience, download my
        resume, and contact me.
      </h3>
      <Spacer height="40px" />
      {/* Add more details and functionalities here */}
    </Layout>
  );
};

export default RecruitersHomePage;
