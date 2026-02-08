import { Award, Calendar, ExternalLink, X } from "lucide-react";
import { useState } from "react";

import dataAnalyticsImg from "../assets/photos/data-analytics-essentials.jpg";
import introDataImg from "../assets/photos/intro-data-science.jpg";
import walangiImg from "../assets/photos/walangiwanan.jfif";
import top2Img from "../assets/photos/top2.jfif";
import rank1Img from "../assets/photos/rank1.jfif";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Data Analytics Essentials",
      issuer: "CISCO Networking Academy",
      date: "January 2, 2026",
      description:
        "Comprehensive course covering fundamentals of data analytics, including data collection, processing, visualization, and interpretation techniques.",
      icon: "📊",
      category: "Data Analytics",
      skills: [
        "Data Visualization",
        "Analytics Tools",
        "Data Interpretation",
        "Statistical Analysis",
      ],
      credential: "#",
      color: "from-blue-500 to-cyan-500",
      image: dataAnalyticsImg,
    },
    {
      id: 2,
      title: "Introduction to Data Science",
      issuer: "CISCO Networking Academy",
      date: "December 14, 2025",
      description:
        "Foundation course in data science principles, covering data exploration, machine learning basics, and practical applications in real-world scenarios.",
      icon: "🔬",
      category: "Data Science",
      skills: ["Data Science Fundamentals", "Data Cleaning", "Data Gathering"],
      credential: "#",
      color: "from-purple-500 to-blue-500",
      image: introDataImg,
    },
    {
      id: 3,
      title: "Walang Iwanan sa Digital Bayanihan",
      issuer: "Pamantasan ng Lungsod ng San Pablo",
      date: "June 13-14, 2025",
      description:
        "Digital literacy and community empowerment program focusing on technology accessibility and digital inclusion initiatives.",
      icon: "🤝",
      category: "Community & Digital Inclusion",
      skills: [
        "Digital Literacy",
        "Community Engagement",
        "Technology Education",
        "Development Methodologies",
      ],
      credential: "#",
      color: "from-green-500 to-teal-500",
      image: walangiImg,
    },
    {
      id: 4,
      title: "Exemplary Academic Performance - Top 2 Recognition",
      issuer: "Pamantasan ng Lungsod ng San Pablo",
      date: "2024",
      description:
        "Achieved Top 2 recognition for outstanding academic performance in the Bachelor of Science in Information Technology program.",
      icon: "🏆",
      category: "Academic Excellence",
      skills: [],
      credential: "#",
      color: "from-amber-500 to-orange-500",
      image: top2Img,
    },
    {
      id: 5,
      title: "Exemplary Academic Performance - Rank 1",
      issuer: "Pamantasan ng Lungsod ng San Pablo",
      date: "2025",
      description:
        "Achieved Rank 1 recognition for exemplary academic performance in the Bachelor of Science in Information Technology program, demonstrating consistent excellence across all subjects.",
      icon: "🎓",
      category: "Academic Excellence",
      skills: [],
      credential: "#",
      color: "from-pink-500 to-rose-500",
      image: rank1Img,
    },
  ];

  const achievements = [
    {
      id: 1,
      title: "Work Experience",
      organization: "Municipal Government of Nagcarlan",
      role: "Special Program for Employment of Students",
      period: "2021 - 2022",
      description:
        "Gained practical experience in public service and administrative tasks through government internship program.",
      icon: "🏛️",
    },
  ];

  return (
    <>
      <section id="certifications" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Certifications & Achievements
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Professional certifications and achievements that demonstrate my
            commitment to continuous learning and skill development in
            technology and data science.
          </p>

          {/* Certifications Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {certifications.map((cert, index) => (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Certificate Image */}
                <div className="relative h-48 overflow-hidden bg-slate-800">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60"></div>
                  <div className="absolute top-4 right-4 bg-slate-900/80 backdrop-blur-sm rounded-full p-2">
                    <Award className="text-cyan-400" size={20} />
                  </div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-full text-xs font-medium text-cyan-400">
                      {cert.category}
                    </span>
                  </div>
                </div>

                {/* Certificate Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  <p className="text-cyan-400 font-medium mb-2 text-sm">
                    {cert.issuer}
                  </p>

                  <div className="flex items-center gap-2 text-slate-500 text-sm mb-4">
                    <Calendar size={14} />
                    <span>{cert.date}</span>
                  </div>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {cert.description}
                  </p>

                  {/* Skills Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-300"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-400">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* View Certificate Button */}
                  <button className="w-full mt-2 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2">
                    <ExternalLink size={16} />
                    <span>View Certificate</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                {certifications.length}+
              </div>
              <p className="text-slate-400">Certifications Earned</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                2+
              </div>
              <p className="text-slate-400">Years of Study</p>
            </div>

            <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 text-center">
              <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                100%
              </div>
              <p className="text-slate-400">Commitment to Learning</p>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative bg-slate-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden border border-slate-700 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 bg-slate-800/80 backdrop-blur-sm rounded-full p-2 hover:bg-slate-700 transition-colors"
            >
              <X className="text-slate-300" size={24} />
            </button>

            {/* Modal Content */}
            <div className="overflow-y-auto max-h-[90vh]">
              {/* Certificate Image */}
              <div className="relative">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="w-full h-auto"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-6">
                  <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-full text-xs font-medium text-cyan-400">
                    {selectedCert.category}
                  </span>
                </div>
              </div>

              {/* Certificate Details */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-3">
                  {selectedCert.title}
                </h3>

                <p className="text-cyan-400 font-medium mb-3 text-lg">
                  {selectedCert.issuer}
                </p>

                <div className="flex items-center gap-2 text-slate-400 mb-6">
                  <Calendar size={18} />
                  <span>{selectedCert.date}</span>
                </div>

                <p className="text-slate-300 text-base mb-6 leading-relaxed">
                  {selectedCert.description}
                </p>

                {/* Skills */}
                <div className="mb-6">
                  <h4 className="text-slate-200 font-semibold mb-3">
                    Skills & Competencies
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedCert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Credential Link */}
                {selectedCert.credential !== "#" && (
                  <a
                    href={selectedCert.credential}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                  >
                    <ExternalLink size={18} />
                    <span>View Credential</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out backwards;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Certifications;
