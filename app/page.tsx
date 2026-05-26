export default function PortfolioWebsite() {
  const skills = [
    "UiPath",
    "Power Platform",
    "Power Automate",
    "Blue Prism",
    "Process Automation",
    "Business Analysis",
    "SQL",
    "Excel Automation",
    "API Integration",
    "Workflow Optimization",
  ];

  const certifications = [
    "UiPath Certified Professional",
    "Blue Prism Developer Certification",
    "Microsoft Power Platform Fundamentals",
  ];

  const projects = [
    {
      title: "Invoice Processing Automation",
      description:
        "Automated invoice extraction and validation using UiPath, reducing manual effort by 80%.",
    },
    {
      title: "HR Onboarding Workflow",
      description:
        "Built Power Automate workflows for employee onboarding approvals and notifications.",
    },
    {
      title: "Finance Reporting Bot",
      description:
        "Created an RPA solution for generating daily finance reports with automated email delivery.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
      {/* Hero Section */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-cyan-400 text-sm mb-4">
              Automation Developer & Business Analyst
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I'm <span className="text-cyan-400">Shai</span>
            </h1>

            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              Certified UiPath, Blue Prism, and Power Platform Developer with
              experience building scalable automation solutions across finance,
              HR services, telecommunications, insurance, and utilities.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-400 text-slate-900 font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform">
                Download Resume
              </button>

              <button className="border border-slate-600 px-6 py-3 rounded-2xl hover:bg-slate-800 transition">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-[2rem] p-8 shadow-2xl w-full max-w-md">
              <div className="space-y-6">
                <div>
                  <p className="text-slate-400 text-sm">Experience</p>
                  <h3 className="text-3xl font-bold">8+ Years</h3>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Specialization</p>
                  <h3 className="text-xl font-semibold">
                    RPA • Power Platform • Automation
                  </h3>
                </div>

                <div>
                  <p className="text-slate-400 text-sm">Industries</p>
                  <p className="text-slate-200 leading-relaxed">
                    Utilities, Finance, HR Services, Insurance,
                    Telecommunications
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Me */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 text-slate-300 leading-relaxed text-lg shadow-xl">
            I specialize in designing and developing automation solutions that
            streamline business operations and improve efficiency. My expertise
            includes RPA development using UiPath and Blue Prism, workflow
            automation using Microsoft Power Platform, and process analysis for
            enterprise clients.
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>

          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-2xl text-slate-200 hover:border-cyan-400 hover:text-cyan-300 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="px-6 md:px-16 py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Certifications</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div
                key={cert}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-lg hover:-translate-y-1 transition-transform"
              >
                <h3 className="font-semibold text-lg">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Work Experience</h2>

          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h3 className="text-2xl font-semibold">
                  Senior RPA Developer
                </h3>
                <span className="text-cyan-400">2022 - Present</span>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Developed enterprise-grade automation solutions using UiPath and
                Power Platform to optimize finance and HR processes.
              </p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-3xl p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h3 className="text-2xl font-semibold">
                  Automation Business Analyst
                </h3>
                <span className="text-cyan-400">2018 - 2022</span>
              </div>

              <p className="text-slate-300 leading-relaxed">
                Worked closely with stakeholders to identify automation
                opportunities and deliver scalable process improvements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-6 md:px-16 py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-xl hover:-translate-y-1 transition-transform"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Portfolio</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl overflow-hidden border border-slate-700 bg-slate-800 shadow-lg"
              >
                <div className="h-56 bg-gradient-to-br from-cyan-500/40 to-slate-700 flex items-center justify-center text-slate-300 text-lg">
                  Screenshot / Demo Preview
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Automation Demo {item}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    Add screenshots, workflow demos, process diagrams, or client
                    project previews here.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-4xl mx-auto text-center bg-slate-900 border border-slate-700 rounded-[2rem] p-12 shadow-2xl">
          <h2 className="text-4xl font-bold mb-6">Let's Work Together</h2>

          <p className="text-slate-300 text-lg mb-10 leading-relaxed">
            Open for freelance projects, automation consulting, and process
            improvement opportunities.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10 text-left">
            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Email</p>
              <p className="font-medium">yourname@email.com</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">LinkedIn</p>
              <p className="font-medium">linkedin.com/in/yourname</p>
            </div>

            <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
              <p className="text-slate-400 text-sm mb-2">Upwork</p>
              <p className="font-medium">upwork.com/freelancers/yourname</p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <button className="bg-cyan-400 text-slate-900 px-6 py-3 rounded-2xl font-semibold hover:scale-105 transition-transform">
              Contact Me
            </button>

            <button className="border border-slate-600 px-6 py-3 rounded-2xl hover:bg-slate-800 transition">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
