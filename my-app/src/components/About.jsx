const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          About Me
        </h2>

        <div className="bg-slate-900/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300">
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            I'm John Austhin Frial Sabater, a passionate Information Technology
            student from Nagcarlan, Laguna. Currently pursuing my Bachelor of
            Science in Information Technology at Pamantasan ng Lungsod ng San
            Pablo, I'm dedicated to developing my skills in web and mobile
            application development.
          </p>
          <p className="text-lg text-slate-300 mb-6 leading-relaxed">
            My journey in technology has been driven by curiosity and a desire
            to create solutions that make a difference. With hands-on experience
            in web development using HTML, CSS, Bootstrap, and PHP, as well as
            mobile app development with Flutter and Dart, I'm constantly
            expanding my knowledge and exploring new technologies.
          </p>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            I've completed certifications in Data Analytics and Introduction to
            Data Science from CISCO Networking Academy, and I'm proficient in
            AI-assisted development through prompt engineering and code
            generation. I believe in writing clean, maintainable code and
            creating applications that deliver exceptional user experiences.
          </p>

          {/* Education Section */}
          <div className="mt-8 pt-8 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">Education</h3>
            <div className="space-y-6">
              <div className="border-l-2 border-cyan-500 pl-6">
                <h4 className="text-xl font-semibold text-slate-200">
                  Bachelor of Science in Information Technology
                </h4>
                <p className="text-cyan-400 mb-2">
                  Pamantasan ng Lungsod ng San Pablo
                </p>
                <p className="text-slate-400 text-sm">
                  San Pablo City, Laguna • 2022 - Present
                </p>
              </div>

              <div className="border-l-2 border-slate-600 pl-6">
                <h4 className="text-xl font-semibold text-slate-200">
                  Senior High School - ABM
                </h4>
                <p className="text-slate-300 mb-2">
                  Plaridel Integrated National High School
                </p>
                <p className="text-slate-400 text-sm">
                  Nagcarlan, Laguna • 2020 - 2022
                </p>
              </div>

              <div className="border-l-2 border-slate-600 pl-6">
                <h4 className="text-xl font-semibold text-slate-200">
                  Junior High School
                </h4>
                <p className="text-slate-300 mb-2">Rizal Standard Academy</p>
                <p className="text-slate-400 text-sm">
                  Nagcarlan, Laguna • 2016 - 2020
                </p>
              </div>
            </div>
          </div>

          {/*Capstone Project*/}
          <div className="mt-8 pt-8 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Capstone Project
            </h3>
            <div className="border-l-2 border-cyan-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-200">
                IntimaCare: A Patient Management System with Data Analytics and
                Pin Map for San Pablo Social Hygiene Clinic
              </h4>
              <p className="text-cyan-400 mb-2">Project Manager</p>
              <p className="text-slate-400 text-sm">
                Pamantasan ng Lungsod ng San Pablo
              </p>
            </div>
          </div>
          

          {/* Work Experience */}
          <div className="mt-8 pt-8 border-t border-slate-700">
            <h3 className="text-2xl font-bold text-cyan-400 mb-6">
              Experience
            </h3>
            <div className="border-l-2 border-cyan-500 pl-6">
              <h4 className="text-xl font-semibold text-slate-200">
                Special Program for Employment of Students
              </h4>
              <p className="text-cyan-400 mb-2">
                Municipal Government of Nagcarlan
              </p>
              <p className="text-slate-400 text-sm">
                Nagcarlan, Laguna • 2021 - 2022
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
