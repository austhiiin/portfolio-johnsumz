const Skills = () => {
  const skillsData = [
    {
      category: 'Web Development',
      items: ['HTML', 'CSS', 'Bootstrap', 'PHP', 'JavaScript', 'Responsive Design']
    },
    {
      category: 'Mobile Development',
      items: ['Flutter', 'Dart', 'Cross-platform Apps', 'Mobile UI/UX']
    },
    {
      category: 'Database & Backend',
      items: ['PostgreSQL', 'Supabase', 'MySQL', 'XAMPP', 'Database Design', 'SQL']
    },
    {
      category: 'Tools & Technologies',
      items: ['Git', 'VS Code', 'Canva', 'AI-Assisted Development', 'Prompt Engineering', 'Code Debugging']
    },
    {
      category: 'Data & Analytics',
      items: ['Data Analytics', 'Data Science Fundamentals', 'Data Visualization', 'Problem Analysis']
    },
    {
      category: 'Soft Skills',
      items: ['Multitasking', 'Working Under Pressure', 'Goal Oriented', 'Communication', 'Presentation', 'Time Management']
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full">
        <h2 className="text-5xl font-bold mb-16 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((skillGroup, index) => (
            <div
              key={skillGroup.category}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-cyan-400">{skillGroup.category}</h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-slate-800 rounded-lg text-sm text-slate-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-600/20 hover:border-cyan-500/50 border border-transparent transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Key Strengths Section */}
        <div className="mt-12 bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-800">
          <h3 className="text-2xl font-bold mb-6 text-center text-cyan-400">Key Strengths</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Full-Stack Development</h4>
              <p className="text-slate-400 text-sm">Proficient in both frontend and backend technologies</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">Mobile-First Approach</h4>
              <p className="text-slate-400 text-sm">Creating responsive cross-platform applications</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-slate-200 mb-2">AI-Enhanced Workflow</h4>
              <p className="text-slate-400 text-sm">Leveraging AI tools for efficient development</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;