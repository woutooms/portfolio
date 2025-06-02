import React from "react";
import Contact from "../components/Contact/Contact";

const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-8 pb-16">
      {/* Header Section */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Neem gerust contact met me op voor vragen of samenwerkingen.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="section-container">
          <Contact />
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
