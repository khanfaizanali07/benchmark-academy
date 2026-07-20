'use client';
import Image from "next/image";
import React from "react";
import {
  FaUserMd,
  FaStethoscope,
  FaTooth,
  FaHeartbeat,
  FaCheckCircle,
} from "react-icons/fa";

const TrainingPrograms = () => {
 const trainingPrograms = [
  {
    title: "Medical Professionals",
    icon: <FaUserMd className="text-4xl text-[#164a09]" />,
    image: "/doctor.png",
    alt: "Medical Professionals",
    items: [
      "General Practitioners - Comprehensive licensing preparation",
      "Specialists - Advanced medical licensing support",
      "Medical Graduates - Career transition guidance",
    ],
  },
  {
    title: "Nursing Professionals",
    image: "/nurse.png",
    alt: "Nursing Professionals",
    icon: <FaHeartbeat className="text-4xl text-[#164a09]" />,
    items: [
      "Registered Nurses - DHA, HAAD, MOH preparation",
      "Specialized Nurses - Advanced practice licensing",
      "Nursing Graduates - International career preparation",
    ],
  },
  {
    title: "Dental Professionals",
    image: "/dentist.png",
    alt: "Dental Professionals",
    icon: <FaTooth className="text-4xl text-[#164a09]" />,
    items: [
      "General Dentists - Comprehensive dental licensing preparation",
      "Dental Specialists - Advanced dental practice licensing",
      "Dental Hygienists - Allied dental professional support",
    ],
  },
  {
    title: "Pharmacist",
    image: "/pharmacist.png",
    alt: "Pharmacist Professionals",
    icon: <FaTooth className="text-4xl text-[#164a09]" />,
    items: [
      "Pharmacist graduate & Pharm-D international career preparation",
      "Pharmacist - exams preparation for All Gulf countries (GCC), Australia, UK, USA",
    ],
  },
  {
    title: "Allied Health Professionals",
    image: "/allied.png",
    alt: "Allied Health Professionals",
    icon: <FaStethoscope className="text-4xl text-[#164a09]" />,
    items: [
      "physiotherapist - Licensing exam preparation and career support",
      "Lab Technicians - Medical laboratory licensing guidance",
      "Radiographers - Imaging technology licensing preparation",
      "Operation Theater Technicians - Surgical technology licensing",
    ],
  },
];

  return (
<section className="bg-gray-50 py-4 px-6 lg:px-16" id="trainingPrograms">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-[#164a09]/10 text-[#164a09] px-5 py-2 rounded-full font-semibold text-sm uppercase tracking-wider">
            Healthcare Training
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#0f2740] leading-tight">
            Specialized Training Programs for Every Healthcare Professional
          </h2>

          <p className="mt-6 text-gray-600 text-lg leading-8">
            Our specialized training programs are meticulously crafted to
            address the unique requirements of healthcare professionals,
            ensuring they are fully prepared for international licensing and
            career advancement.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {trainingPrograms.map((program, index) => (
           <div className="p-8">
  <div className="w-full h-48 rounded-xl overflow-hidden mb-6">
    <Image
      src={program.image}
      alt={program.title}
      width={500}
      height={300}
      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
    />
  </div>

  <h3 className="text-2xl font-bold text-[#0f2740] mb-6">
    {program.title}
  </h3>

  <ul className="space-y-4">
    {program.items.map((item, i) => (
      <li
        key={i}
        className="flex items-start gap-3 text-gray-600"
      >
        <FaCheckCircle className="text-[#164a09] mt-1 flex-shrink-0" />
        <span>{item}</span>
      </li>
    ))}
  </ul>
</div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 rounded-3xl overflow-hidden bg-gradient-to-r from-[#0f2740] to-[#164a09] p-12 text-center text-white shadow-xl">
          <h3 className="text-3xl font-bold">
            Advance Your Healthcare Career Today
          </h3>

          <p className="mt-4 max-w-3xl mx-auto text-white/90 text-lg">
            Whether you're a doctor, nurse, dentist, pharmacist, or allied
            health professional, our expert-led training programs help you
            achieve internationally recognized licensing and unlock new career
            opportunities.
          </p>

          {/* <button className="mt-8 bg-white text-[#0f2740] hover:bg-gray-100 px-8 py-3 rounded-full font-bold transition">
            Explore All Programs
          </button> */}
        </div>
      </div>
    </section>
  );
};

export default TrainingPrograms;