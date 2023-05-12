import { NextPage } from "next";
import Layout from "~/components/Layout";
import TestimonialCard from "~/components/Testimonial";
import { testimonials } from "../../config";

const TestimonialsPage: NextPage = () => {
  return (
    <Layout title="Testimonials - Isaiah Simon">
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1>Testimonials</h1>
        <p className="mt-5 text-xl text-slate-300">
          Here's what my clients have to say about my work.
        </p>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Map over your testimonials and render a TestimonialCard for each one */}
        {testimonials.map((testimonial) => (
          <TestimonialCard
            key={testimonial.id}
            clientName={testimonial.clientName}
            testimonial={testimonial.testimonial}
          />
        ))}
      </section>
    </Layout>
  );
};

export default TestimonialsPage;
