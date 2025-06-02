import React, { useState } from "react";
import { ChevronDownIcon, ChevronUpIcon } from "@heroicons/react/24/outline";
import { Reflection as ReflectionType } from "../../types";

interface ReflectionProps {
  reflection: ReflectionType;
}

const Reflection: React.FC<ReflectionProps> = ({ reflection }) => {
  const [openSection, setOpenSection] = useState<string | null>("stageReflection");

  const sections = [
    { key: "stageReflection", data: reflection.stageReflection, icon: "🎯" },
    { key: "personalGrowth", data: reflection.personalGrowth, icon: "📈" },
    { key: "futureVision", data: reflection.futureVision, icon: "🚀" },
    { key: "workplaceReflection", data: reflection.workplaceReflection, icon: "🏢" }
  ];

  const toggleSection = (sectionKey: string) => {
    setOpenSection(openSection === sectionKey ? null : sectionKey);
  };

  return (
    <div className="space-y-4">
      {sections.map((section) => (
        <div
          key={section.key}
          className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg"
        >
          {/* Header */}
          <button
            onClick={() => toggleSection(section.key)}
            className="w-full px-6 py-4 text-left bg-gradient-to-r from-primary-50 to-accent-50 hover:from-primary-100 hover:to-accent-100 transition-all duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-semibold text-gray-900">
                  {section.data.title}
                </h3>
              </div>
              {openSection === section.key ? (
                <ChevronUpIcon className="w-5 h-5 text-gray-500" />
              ) : (
                <ChevronDownIcon className="w-5 h-5 text-gray-500" />
              )}
            </div>
          </button>

          {/* Content */}
          {openSection === section.key && (
            <div className="px-6 py-4 bg-white">
              <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                {section.data.content.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4 last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Reflection; 