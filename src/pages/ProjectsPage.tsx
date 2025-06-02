import React from "react";
import { Portfolio } from "../types";
import ProjectsList from "../components/Projects/ProjectsList";
import useFetch from "../hooks/useFetch";

const ProjectsPage: React.FC = () => {
  const { data: portfolio } = useFetch<Portfolio>("/portfolio");

  if (!portfolio) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-8 pb-16">
      {/* Header Section */}
      <section className="py-10 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="section-container text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Mijn Projecten
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Een overzicht van projecten waaraan ik heb gewerkt, van game development 
            tot web design en blockchain technologie.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mt-8"></div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-10 bg-white">
        <div className="section-container">
          <ProjectsList projects={portfolio.projects} />
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
