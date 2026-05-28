export default function PortfolioWebsite() {
  const skills = [
    "UiPath",
    "Claude AI Workflow Integration",
    "AWS Bedrock Prompt Engineering",
    "AWS Lambda",
    "AWS API Gateway",
    "AWS Cloudwatch",
    "AWS S3 & DynamoDB",
    "AWS IAM Policies & Permissions",
    "Power Platform",
    "Power Automate",
    "Blue Prism",
    "Process Automation",
    "Business Analysis",
    "Excel Automation",
    "API Integration",
    "Workflow Optimization",
  ];
  const certifications = [
    {
      name: "UiPath Certified Professional",
      link: "https://credentials.uipath.com/ef56ecef-a4dc-46b4-878a-b5011dd0c835",
    },
    {
      name: "Blue Prism Developer Certification",
      link: "https://www.credly.com/badges/0d17de6c-5549-4eb6-a93d-7d6fd0d61cd2",
    },
    {
      name: "Microsoft Power Platform Fundamentals",
      link: "https://learn.microsoft.com/en-us/users/shairaleenbalahadia-0336/credentials/5bdde825f9cd7030?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      name: "Microsoft Power Automate RPA Developer",
      link: "https://learn.microsoft.com/en-us/users/shairaleenbalahadia-0336/credentials/4b1d0646a6683fcb?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
    {
      name: "Microsoft Power BI Data Analyst Certified",
      link: "https://learn.microsoft.com/en-us/users/shairaleenbalahadia-0336/credentials/71045d993687201f?ref=https%3A%2F%2Fwww.linkedin.com%2F",
    },
  ];
  const projects = [
    {
      title: "Enterprise RPA & AWS Automation Delivery",
      description:
        "Delivered scalable end-to-end RPA and AWS automation solutions for a U.S. insurance organization, leading the full automation lifecycle from requirements gathering and solution design to production deployment and hypercare support. Successfully launched 8 production automations, developed AWS Lambda API integrations with UiPath Orchestrator, and drove process stability, operational efficiency, and continuous optimization.",
    },
    {
      title: "Finance Reporting and HR Onboarding Workflow",
      description:
        "Managed end-to-end UiPath automation development and production support for Finance and HR systems in Australia, supporting 12 live business-critical processes including payroll, employee status validation, and leave management. Specialized in root cause analysis, bot enhancements, incident resolution, and UiPath Orchestrator management for attended and unattended automations, ensuring high process stability, performance monitoring, and operational efficiency at scale.",
    },
    {
      title: "Tax Filling Automation",
      description:
        "Designed and developed end-to-end automation solutions for an internal client in the Philippines, leading the full delivery lifecycle from requirements gathering and SDD/PDD documentation to development, UAT, and solution presentation. Successfully automated employee training and CE credit record processing, improving data accuracy and operational efficiency.",
    },
    {
      title: "Procurement Process Automation & API Integration",
      description:
        "Developed end-to-end RPA solutions for a Procurement team in Malaysia, leading the full automation lifecycle from requirements gathering and SDD/PDD documentation to development, UAT, client demos, and stabilization. Built API-driven automations that extracted and transformed procurement data for SMART web application processing and automated transaction posting to the myProcure database for real-time monitoring and operational efficiency.",
    },
        {
      title: "HR Automation & API Monitoring Solutions",
      description:
        "Developed RPA solutions for an HR Management System supporting a U.S. utility client, automating recurring business reports and intelligent email notification workflows. Built automated API health-check monitoring processes that captured system results, masked sensitive and PII data, and delivered real-time status notifications to improve operational visibility, compliance, and system reliability.",
    },
        {
      title: "Telecom Automation",
      description:
        "Provided production support and enhancement for Blue Prism automations supporting a UK-based telecommunications provider, ensuring stability and continuous optimization of live business-critical processes. Automated post-paid account validation and request processing workflows, performed root cause analysis for automation issues, and supported end-to-end testing and deployment activities from UAT to Production.",
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-violet-950 to-slate-900 text-white">
      
      {/* HERO */}
      <section className="px-6 md:px-16 py-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="uppercase tracking-[0.3em] text-violet-400 text-sm mb-4">
              Intelligent Automation Engineer | RPA & AI Specialist
            </p>
            <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Hi, I'm <span className="text-violet-400">Shai</span>
            </h1>
            <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
              Certified UiPath, Blue Prism, and Power Platform Developer with
              experience building scalable automation, API integrations,
              and enterprise AI workflows.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/CV_Shaira Leen Balahadia.pdf"
                download
                className="bg-violet-600 text-white font-semibold px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition-transform"
              >
                Download Resume
              </a>
              <a
                href="/CV_Shaira Leen Balahadia.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-slate-600 px-6 py-3 rounded-2xl hover:bg-slate-800 transition"
              >
                View Resume
              </a>
            </div>
          </div>
          <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700 rounded-[2rem] p-8 shadow-2xl">
            <p className="text-slate-400">Experience</p>
            <h3 className="text-3xl font-bold mb-4">8+ Years</h3>
            <p className="text-slate-400">Specialization</p>
            <p className="text-slate-200 mb-4">
              RPA | UiPath | Blue Prism | Power Platform | AWS | APIs
            </p>
            <p className="text-slate-400">Industries</p>
            <p className="text-slate-200">
              Finance, HR, Insurance, Telecom, Utilities, Transportation
            </p>
          </div>
        </div>
      </section>
      {/* ABOUT */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8">About Me</h2>
          <div className="bg-slate-900/60 border border-slate-700 rounded-3xl p-8 text-slate-300 text-lg leading-relaxed">
            Automation engineer specializing in UiPath, Blue Prism,
            Power Platform, AWS serverless, APIs, and AI-driven workflows
            for enterprise digital transformation.
          </div>
        </div>
      </section>
      {/* SKILLS */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Skills</h2>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <span
                key={skill}
                className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-2xl hover:border-violet-400 hover:text-violet-300 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>
      {/* CERTIFICATIONS (FIXED) */}
      <section className="px-6 md:px-16 py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          
          <h2 className="text-4xl font-bold mb-10 text-center">
            Certifications
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <a
                key={cert.name}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 border border-slate-700 rounded-3xl p-6 shadow-lg hover:-translate-y-1 hover:border-violet-400 transition text-center flex flex-col justify-center items-center"
              >
                <h3 className="font-semibold text-lg text-slate-200 hover:text-violet-300">
                  {cert.name}
                </h3>
                <p className="text-sm text-slate-400 mt-2">
                  Click to view certificate
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
      {/* EXPERIENCE */}
      <section className="px-6 md:px-16 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Work Experience</h2>
          <div className="space-y-6">
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">
                Senior Intelligent Automation Consultant
              </h3>
              <p className="text-violet-400">2025 - Present</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">
                Intelligent Automation Consultant
              </h3>
              <p className="text-violet-400">2022 - 2025</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">
                RPA Developer & AI Workflow Engineer
              </h3>
              <p className="text-violet-400">2021 - 2022</p>
            </div>
            <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">
              <h3 className="text-xl font-semibold">
                Associate Software Engineer
              </h3>
              <p className="text-violet-400">2018 - 2021</p>
            </div>
          </div>
        </div>
      </section>
      {/* PROJECTS */}
      <section className="px-6 md:px-16 py-16 bg-slate-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-10">Projects</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-slate-800 border border-slate-700 rounded-3xl p-6 hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold mb-4">
                  {project.title}
                </h3>
                <p className="text-slate-300">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* CONTACT */}
<section className="px-6 md:px-16 py-20">
  <div className="max-w-5xl mx-auto bg-slate-900 border border-slate-700 rounded-3xl p-8">

    <div className="text-center mb-12">
      <h2 className="text-4xl md:text-4xl font-bold mb-6">
        Let's Work Together
      </h2>

      <p className="text-slate-300 text-lg leading-relaxed max-w-1xl mx-auto">
        Open for freelance projects, automation consulting, and process improvement opportunities.
      </p>
    </div>

    {/* CONTACT LINKS */}
    <div className="grid md:grid-cols-3 gap-6 mb-10">

      {/* EMAIL */}
      <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 text-center">
        <p className="text-slate-400 text-sm mb-2">Email</p>

        <a
          href="mailto:balahadiashai@gmail.com"
          className="text-lg font-semibold hover:text-violet-400 transition break-all"
        >
          balahadiashai@gmail.com
        </a>
      </div>

      {/* LINKEDIN */}
      <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 text-center">
        <p className="text-slate-400 text-sm mb-2">LinkedIn</p>

        <a
          href="https://www.linkedin.com/in/shaira-leen-balahadia-a30a59202/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-violet-400 transition break-all"
        >
          linkedin.com/in/shaira-leen-balahadia
        </a>
      </div>

      {/* UPWORK */}
      <div className="bg-slate-800/70 border border-slate-700 rounded-2xl p-6 text-center">
        <p className="text-slate-400 text-sm mb-2">Upwork</p>

        <a
          href="https://www.upwork.com/freelancers/~01c6a55e6c5ec7bf28"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg font-semibold hover:text-violet-400 transition break-all"
        >
          View Upwork Profile
        </a>
      </div>

    </div>

    {/* BUTTONS */}
    <div className="flex flex-wrap justify-center gap-4">

      <a
        href="mailto:balahadiashai@gmail.com"
        className="bg-violet-600 text-white font-semibold px-8 py-4 rounded-2xl shadow-lg hover:scale-105 hover:bg-violet-500 transition-transform"
      >
        Contact Me
      </a>

      <a
        href="/CV_Shaira Leen Balahadia.pdf"
        download
        className="border border-slate-600 px-8 py-4 rounded-2xl hover:bg-slate-800 transition"
      >
        Download Resume
      </a>

    </div>
  </div>
</section>
    </div>
  );
}