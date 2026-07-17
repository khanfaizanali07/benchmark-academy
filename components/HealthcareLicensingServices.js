'use client';
import React from "react";
import {
  FaChalkboardTeacher,
  FaFileMedical,
  FaGlobeAmericas,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";

const services = [
  {
    title: "Prometric Exam Coaching",
    icon: <FaChalkboardTeacher />,
    description:
      "Expert-led preparation for all major healthcare licensing exams.",
    points: [
      "DHA, HAAD, MOH, SCHQ, OMSB & NHRA coaching",
      "Profession-specific training programs",
      "Mock tests & practice sessions",
      "Experienced faculty with proven track records",
      "Online & offline coaching options",
    ],
  },
  {
    title: "Dataflow Verification Services",
    icon: <FaFileMedical />,
    description:
      "Complete documentation and credential verification support.",
    points: [
      "Primary source verification for GCC countries",
      "Document authentication & attestation",
      "Application processing & follow-up",
      "Expert guidance on documentation",
      "Fast-track processing available",
    ],
  },
  {
    title: "International Medical Licensing",
    icon: <FaGlobeAmericas />,
    description:
      "Your pathway to global healthcare opportunities.",
    points: [
      "USA Medical Licensing (USMLE) Coaching",
      "Canada Medical Licensing (MCCQE) Support",
      "Comprehensive guidance & preparation",
      "Success-oriented approach",
    ],
  },
];

export default function HealthcareLicensingServices() {
  return (
    <section className="relative overflow-hidden bg-white py-24 px-6 lg:px-16" id="services">

      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-[#164a09]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0f2740]/5 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto mb-20">

          <span className="inline-block bg-[#164a09]/10 text-[#164a09] font-semibold px-5 py-2 rounded-full uppercase tracking-wider text-sm">
            Our Services
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-bold text-[#0f2740] leading-tight">
            Comprehensive Healthcare Licensing Services
          </h2>

          <p className="mt-6 text-lg text-gray-600 leading-8">
            From exam preparation to documentation, we provide complete
            end-to-end support to help healthcare professionals build successful
            international careers.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-gradient-to-b from-[#0f2740] via-[#164a09] to-[#0f2740] rounded-full"></div>

          <div className="space-y-20">

            {services.map((service, index) => {

              const reverse = index % 2 === 1;

              return (
                <div
                  key={index}
                  className={`relative flex flex-col lg:flex-row items-center ${
                    reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >

                  {/* Card */}

                  <div className="lg:w-5/12">

                    <div className="group bg-white border border-gray-100 rounded-3xl shadow-lg hover:shadow-2xl transition duration-500 p-8">

                      <div className="flex items-center gap-5">

                        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0f2740] to-[#164a09] text-white flex items-center justify-center text-3xl shadow-lg group-hover:rotate-6 transition">
                          {service.icon}
                        </div>

                        <div>
                          <h3 className="text-2xl font-bold text-[#0f2740]">
                            {service.title}
                          </h3>

                          <p className="text-gray-500 mt-2">
                            {service.description}
                          </p>
                        </div>

                      </div>

                      <div className="mt-8 space-y-4">

                        {service.points.map((point, i) => (
                          <div
                            key={i}
                            className="flex items-start gap-3"
                          >
                            <FaCheckCircle className="text-[#164a09] mt-1 flex-shrink-0" />

                            <span className="text-gray-600">
                              {point}
                            </span>
                          </div>
                        ))}

                      </div>

                      {/* <button className="mt-8 inline-flex items-center gap-2 font-semibold text-[#164a09] group-hover:text-[#0f2740] transition">
                        Know More
                        <FaArrowRight className="group-hover:translate-x-2 transition" />
                      </button> */}

                    </div>

                  </div>

                  {/* Timeline Icon */}

                  <div className="hidden lg:flex w-2/12 justify-center relative">

                    <div className="w-24 h-24 rounded-full bg-white border-8 border-[#164a09] shadow-xl flex items-center justify-center text-4xl text-[#0f2740] z-10">
                      {service.icon}
                    </div>

                  </div>

                  <div className="hidden lg:block lg:w-5/12"></div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}