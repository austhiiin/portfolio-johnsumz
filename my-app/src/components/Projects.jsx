import { ExternalLink, Github, Globe, Calendar, Code2 } from "lucide-react";
import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Prime Biznest Management Corp",
      subtitle: "Business Services Website",
      description:
        "A professional company website for Prime Biznest Management Corp, a business solutions firm offering accounting, payroll, bookkeeping, and tax services in San Pablo City, Laguna. Designed for trust and clarity to attract local business clients.",
      longDescription:
        "A fully responsive corporate website built to establish Prime Biznest Management Corp's online presence. Features include a services overview, contact forms, and a clean professional layout tailored to the accounting and business services industry.",
      category: "Web Development",
      tech: ["React", "Vite", "CSS", "Responsive Design"],
      liveUrl: "https://www.primebiznest.com",
      githubUrl: null,
      color: "from-cyan-500 to-blue-500",
      icon: "💼",
      status: "Live",
      year: "2025",
      image: null,
      gradient: "from-cyan-500/20 via-blue-500/10 to-slate-900",
    },
    {
      id: 2,
      title: "Flavian Realty",
      subtitle: "Real Estate Platform",
      description:
        "A modern real estate web application deployed on Azure Static Web Apps, providing property listings and realty services for Flavian Realty. Built with a focus on clean UI and fast performance.",
      longDescription:
        "A real estate platform designed to showcase property listings and connect potential buyers with the Flavian Realty team. Hosted on Microsoft Azure for reliable performance and global availability. Features an intuitive property browsing experience with a polished, modern interface.",
      category: "Web Development",
      tech: ["React", "Vite", "Azure Static Web Apps", "CSS"],
      liveUrl: "https://agreeable-bush-04ef60600.6.azurestaticapps.net",
      githubUrl: null,
      color: "from-purple-500 to-blue-500",
      icon: "🏡",
      status: "Live",
      year: "2025",
      image: null,
      gradient: "from-purple-500/20 via-blue-500/10 to-slate-900",
    },
  ];

  const stats = [
    { label: "Projects Completed", value: `${projects.length}+` },
    { label: "Technologies Used", value: "5+" },
    { label: "Deployed & Live", value: `${projects.filter((p) => p.status === "Live").length}` },
  ];

  return (
    <>
      <section id="projects" className="min-h-screen px-6 py-20">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <h2 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-center text-slate-400 mb-16 max-w-2xl mx-auto">
            Real-world projects I've designed and developed — from corporate
            websites to deployed web applications, each built with attention to
            performance and user experience.
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(project)}
                className="group bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 animate-fadeInUp cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Visual Banner */}
                <div
                  className={`relative h-48 overflow-hidden bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  {/* Animated grid background */}
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage:
                        "linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)",
                      backgroundSize: "32px 32px",
                    }}
                  />

                  {/* Glowing orb */}
                  <div
                    className={`absolute w-32 h-32 rounded-full bg-gradient-to-br ${project.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <span className="relative text-6xl z-10 group-hover:scale-110 transition-transform duration-300">
                    {project.icon}
                  </span>

                  {/* Status badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-xs font-medium text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                      {project.status}
                    </span>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-full text-xs font-medium text-cyan-400">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom fade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-70" />

                  {/* Year */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-1 text-slate-400 text-xs">
                    <Calendar size={12} />
                    <span>{project.year}</span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1 text-slate-200 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3 text-sm">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Tech Stack Tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-300 flex items-center gap-1"
                      >
                        <Code2 size={10} className="text-cyan-500" />
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-2 py-1 bg-slate-800 rounded-md text-xs text-slate-400">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className="flex-1 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/50 rounded-lg text-cyan-400 hover:from-cyan-500/30 hover:to-blue-500/30 transition-all duration-300 text-sm font-medium flex items-center justify-center gap-2">
                      <ExternalLink size={14} />
                      View Details
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        <Globe size={14} />
                        Live
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300 text-sm flex items-center gap-2"
                      >
                        <Github size={14} />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 text-center"
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <p className="text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden border border-slate-700 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 bg-slate-800/80 backdrop-blur-sm rounded-full p-2 hover:bg-slate-700 transition-colors text-slate-300 text-lg leading-none"
            >
              ✕
            </button>

            <div className="overflow-y-auto max-h-[90vh]">
              {/* Modal Banner */}
              <div
                className={`relative h-48 bg-gradient-to-br ${selectedProject.gradient} flex items-center justify-center overflow-hidden`}
              >
                <div className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(34,211,238,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.4) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />
                <div
                  className={`absolute w-48 h-48 rounded-full bg-gradient-to-br ${selectedProject.color} opacity-25 blur-3xl`}
                />
                <span className="relative text-7xl z-10">{selectedProject.icon}</span>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent p-6">
                  <div className="flex gap-2">
                    <span className="px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-cyan-500/50 rounded-full text-xs font-medium text-cyan-400">
                      {selectedProject.category}
                    </span>
                    <span className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/50 rounded-full text-xs font-medium text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
                      {selectedProject.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Modal Details */}
              <div className="p-8">
                <h3 className="text-3xl font-bold text-slate-200 mb-1">
                  {selectedProject.title}
                </h3>
                <p className="text-cyan-400 font-medium mb-2 text-lg">
                  {selectedProject.subtitle}
                </p>
                <div className="flex items-center gap-2 text-slate-500 text-sm mb-6">
                  <Calendar size={14} />
                  <span>{selectedProject.year}</span>
                </div>

                <p className="text-slate-300 text-base mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-slate-200 font-semibold mb-3">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-2 bg-slate-800 rounded-lg text-sm text-slate-300 border border-slate-700 flex items-center gap-1"
                      >
                        <Code2 size={12} className="text-cyan-500" />
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3 flex-wrap">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-medium text-white hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                      <Globe size={18} />
                      Visit Live Site
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 rounded-lg font-medium text-slate-300 hover:border-cyan-500/50 hover:text-cyan-400 transition-all duration-300"
                    >
                      <Github size={18} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.2s ease-out; }
        .animate-scaleIn { animation: scaleIn 0.3s ease-out; }
        .animate-fadeInUp { animation: fadeInUp 0.6s ease-out backwards; }
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

export default Projects;