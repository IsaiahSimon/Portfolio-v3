import React from "react";
import Layout from "../../components/Layout";
import Button from "~/components/Button";

const ClientsContactPage = () => {
  return (
    <Layout>
      <h1>Contact Me</h1>
      <p>This page will contain a contact form.</p>
      {/* Add more details and functionalities here */}
      <Button label="Get in touch" href="mailto:isimon.dev@gmail.com" />
    </Layout>
  );
};

export default ClientsContactPage;
