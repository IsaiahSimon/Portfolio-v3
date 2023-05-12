import React from "react";
import Layout from "../../components/Layout";
import SpanGradient from "~/components/SpanGradient";
import Spacer from "~/components/Spacer";

const ClientsHomePage = () => {
  return (
    <Layout title="Clients - Isaiah Simon">
      <h1>
        Hello, <SpanGradient>Clients</SpanGradient>!
      </h1>
      <Spacer height="20px" />
      <h3 className="mt-5 italic text-yellow-300">
        (Please excuse the appearance. This page is still a work-in-progress)
      </h3>
      <h3>
        Here, you can find my past client projects, my process overview,
        testimonials, pricing packages, and contact me.
      </h3>
      <Spacer height="40px" />
      {/* Add more details and functionalities here */}
    </Layout>
  );
};

export default ClientsHomePage;
