import React, { useState, useEffect } from "react";

const profileImage = `${import.meta.env.BASE_URL}rajat-photo.jpeg`;

const profile = {
  name: "Rajat Ramesh Dungarwal",
  title: "AI/ML Engineer · Python · SQL · Cloud · Intelligent Systems",
  subtitle:
    "AI/ML engineer with 4+ years of experience building scalable machine learning systems, real-time data pipelines, NLP products, and cloud-ready applications. He combines strong software engineering fundamentals with practical AI delivery across analytics, data engineering, and intelligent product development.",
  summaryLong:
    "Rajat is a production-focused AI/ML engineer with experience across enterprise machine learning, NLP, data analytics, and cloud deployment. His profile blends model development, MLOps, data pipelines, dashboards, and application engineering, making him well suited for AI, data, and software roles where end-to-end ownership matters. He has also published work related to Thing Translator and has academic experience as both a graduate teaching assistant and research assistant.",
  location: "Arlington, Texas, USA",
  email: "rajat@myworkmails.com",
  phone: "+1 (682) 558-1036",
  github: "https://github.com/rajatd23",
  linkedin: "https://www.linkedin.com/in/rajat-dungarwal-60a004182/",
};

const stats = [
  { label: "Experience", value: "4+ Years", icon: "🚀" },
  { label: "GitHub Repos", value: "17", icon: "💻" },
  { label: "Published Work", value: "Thing Translator", icon: "📄" },
  { label: "Focus", value: "AI/ML + Data", icon: "🤖" },
];

const skills = [
  { name: "Python", category: "Languages" },
  { name: "SQL", category: "Languages" },
  { name: "TensorFlow", category: "ML/AI" },
  { name: "PyTorch", category: "ML/AI" },
  { name: "Scikit-learn", category: "ML/AI" },
  { name: "NLP", category: "ML/AI" },
  { name: "Transformers", category: "ML/AI" },
  { name: "FastAPI", category: "Backend" },
  { name: "Flask", category: "Backend" },
  { name: "Streamlit", category: "Backend" },
  { name: "PostgreSQL", category: "Data" },
  { name: "Spark", category: "Data" },
  { name: "Kafka", category: "Data" },
  { name: "AWS", category: "Cloud" },
  { name: "Azure ML", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "Power BI", category: "Analytics" },
  { name: "Tableau", category: "Analytics" },
  { name: "MLOps", category: "ML/AI" },
];

const projects = [
  {
    title: "AI Analytics Copilot",
    desc: "Natural language to SQL analytics platform for faster business insights.",
    link: "https://github.com/rajatd23/AI-Analytics-Copilot",
    tags: ["NLP", "SQL", "AI"],
  },
  {
    title: "Geospatial Contour Mapping Visualization System",
    desc: "Geospatial visualization system for contour maps using geographic and meteorological datasets.",
    link: "https://github.com/rajatd23/Geospatial-Contour-Mapping-Visualization-System",
    tags: ["Data Viz", "Python"],
  },
  {
    title: "Divvy Markov Real Data",
    desc: "Real-world Markov process simulation using Divvy Bike data for operational analytics and forecasting.",
    link: "https://github.com/rajatd23/divvy-markov-realdata",
    tags: ["ML", "Analytics"],
  },
  {
    title: "Rajat Portfolio",
    desc: "Personal developer portfolio repository.",
    link: "https://github.com/rajatd23/rajatdungarwal-portfolio",
    tags: ["React", "Web"],
  },
  {
    title: "Big Data Analytics Pipeline with Apache Spark",
    desc: "Distributed big data analytics pipeline using Apache Spark and Scala.",
    link: "https://github.com/rajatd23/Big-Data-Analytics-Pipeline-with-Apache-Spark",
    tags: ["Spark", "Big Data"],
  },
  {
    title: "House Sales Price Analysis",
    desc: "End-to-end house price analysis and regression modeling using Python.",
    link: "https://github.com/rajatd23/House-Sales-Price-Analysis",
    tags: ["ML", "Python"],
  },
  {
    title: "Movie Genre Prediction from Plot Summaries",
    desc: "NLP pipeline for classifying movie genres from plot summaries.",
    link: "https://github.com/rajatd23/Movie-Genre-Prediction-from-Plot-Summaries",
    tags: ["NLP", "ML"],
  },
  {
    title: "Diabetes Prediction",
    desc: "Machine learning workflow for predicting diabetes risk from healthcare data.",
    link: "https://github.com/rajatd23/Diabetes-Prediction",
    tags: ["ML", "Healthcare"],
  },
  {
    title: "Distributed Graph Partitioning Hadoop",
    desc: "Hadoop-based graph clustering and partitioning pipeline.",
    link: "https://github.com/rajatd23/distributed-graph-partitioning-hadoop",
    tags: ["Hadoop", "Big Data"],
  },
  {
    title: "Twitter Follower Distribution using Hadoop MapReduce",
    desc: "Two-stage MapReduce pipeline for follower count distribution analysis.",
    link: "https://github.com/rajatd23/Twitter-Follower-Distribution-using-Hadoop-MapReduce",
    tags: ["Hadoop", "MapReduce"],
  },
  {
    title: "Thing Translator",
    desc: "AI product and research project connected to Rajat's published work.",
    link: "https://github.com/rajatd23/Thing-Translator",
    tags: ["AI", "Research"],
  },
  {
    title: "Personal Finance Tracker",
    desc: "Finance tracking application with authentication, notifications, and deployment workflow.",
    link: "https://github.com/rajatd23/personal-finance-tracker-se",
    tags: ["Web", "Full-Stack"],
  },
  {
    title: "Marble Game",
    desc: "Python project implementing a marble game application.",
    link: "https://github.com/rajatd23/marble-game",
    tags: ["Python", "Game"],
  },
];

function SectionTitle({ title, subtitle }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="text-4xl font-bold text-white sm:text-5xl mb-4 bg-gradient-to-r from-cyan-300 via-sky-300 to-indigo-300 bg-clip-text text-transparent">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-3xl mx-auto text-lg text-slate-300 leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}

function Card({ children, className = "", hover = false }) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm ${
        hover ? "transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-500/20 hover:border-cyan-400/30" : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}

function ButtonLink({ href, children, primary = false }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className={
        primary
          ? "group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-8 py-4 font-bold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          : "group inline-flex items-center justify-center rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 backdrop-blur-sm"
      }
    >
      {children}
      {primary && <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>}
    </a>
  );
}

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / totalHeight) * 100;
      setProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 transition-all duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}

export default function App() {
  const [showAllProjects, setShowAllProjects] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const visibleProjects = showAllProjects ? projects : projects.slice(0, 6);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "contact"];
      const scrollY = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skillCategories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill.name);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <ScrollProgress />

      {/* Animated background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute left-[-10%] top-0 h-[500px] w-[500px] rounded-full bg-cyan-500/20 blur-[120px] animate-pulse" />
        <div className="absolute right-[-10%] top-24 h-[600px] w-[600px] rounded-full bg-indigo-500/20 blur-[120px] animate-pulse animation-delay-2000" />
        <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-sky-500/10 blur-[120px] animate-pulse animation-delay-4000" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      </div>

      {/* Header */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <a href="#home" className="group">
            <div className="text-2xl font-black text-white transition-colors">
              Rajat<span className="text-transparent bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text">.</span>dev
            </div>
            <div className="text-xs text-slate-400 font-medium tracking-wider">AI · ML · Data · Cloud</div>
          </a>

          <nav className="hidden gap-1 md:flex bg-white/5 rounded-full p-1 border border-white/10">
            {["home", "about", "skills", "projects", "contact"].map((section) => (
              <a
                key={section}
                href={`#${section}`}
                className={`px-5 py-2 text-sm font-medium rounded-full transition-all duration-300 ${
                  activeSection === section
                    ? "bg-cyan-400/20 text-cyan-300 shadow-lg shadow-cyan-500/20"
                    : "text-slate-300 hover:text-white hover:bg-white/5"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </a>
            ))}
          </nav>

          <a
            href={`${import.meta.env.BASE_URL}Rajat-Resume.pdf`}
            download
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-2.5 text-sm font-bold text-slate-950 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/50 hover:scale-105"
          >
            <span>📄</span> Resume
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section id="home" className="grid items-center gap-12 py-16 md:min-h-[calc(100vh-80px)] md:grid-cols-2 lg:py-24">
          <div className="order-2 md:order-1 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-emerald-400/10 px-4 py-2 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-300">Available for opportunities</span>
            </div>

            <div>
              <h1 className="text-5xl font-black leading-tight text-white sm:text-6xl lg:text-7xl">
                {profile.name.split(" ").slice(0, 2).join(" ")}
                <span className="block text-transparent bg-gradient-to-r from-cyan-400 via-sky-400 to-indigo-400 bg-clip-text mt-2">
                  {profile.name.split(" ").slice(2).join(" ")}
                </span>
              </h1>
              <p className="mt-6 text-xl font-medium text-cyan-300">{profile.title}</p>
              <p className="mt-4 text-lg leading-relaxed text-slate-300">{profile.subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-4">
              <ButtonLink href="#contact" primary>
                Let's Connect
              </ButtonLink>
              <ButtonLink href={profile.github}>
                View GitHub
              </ButtonLink>
            </div>

            <div className="flex flex-wrap gap-3">
              {/* <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span>📍</span>
                <span className="text-sm font-medium">{profile.location}</span>
              </div> */}
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-cyan-400/30"
              >
                <span>✉️</span>
                <span className="text-sm font-medium">{profile.email}</span>
              </a>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2.5 backdrop-blur-sm">
                <span>📞</span>
                <span className="text-sm font-medium">{profile.phone}</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4 sm:grid-cols-4">
              {stats.map((item, index) => (
                <Card
                  key={item.label}
                  className="p-5 text-center hover:scale-105 transition-transform duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <div className="text-2xl font-bold text-white mb-1">{item.value}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-400 font-semibold">
                    {item.label}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 md:order-2">
            <Card className="mx-auto max-w-sm overflow-hidden p-2 sm:max-w-md group">
              <div className="relative overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 via-transparent to-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img
                  src={profileImage}
                  alt="Rajat Dungarwal"
                  className="h-[360px] w-full object-cover object-top sm:h-[480px] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-28">
          <SectionTitle
            title="About Me"
            subtitle="Rajat focuses on building practical AI and data-driven solutions with strong engineering quality, cloud deployment readiness, and clean user-focused delivery."
          />

          {/* Featured Publication */}
          <div className="mb-10 group">
            <Card className="p-8 relative overflow-hidden border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-500">
              <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -z-10 group-hover:bg-cyan-500/10 transition-all duration-500" />
              <div className="flex items-start gap-4">
                <div className="text-4xl">📄</div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-3">Published Research</h3>
                  <p className="leading-7 text-slate-200 text-lg">
                    Rajat has published work related to{" "}
                    <span className="font-bold text-cyan-300">Thing Translator</span>. His profile highlights
                    that the paper was presented at ICSMDI 2021 and published in the Elsevier SSRN library,
                    with a companion book available on Amazon.
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Expertise Cards */}
          <div className="grid gap-6 md:grid-cols-3">
            <Card hover className="p-8 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">🤖</div>
              <h3 className="text-2xl font-bold text-white mb-3">AI/ML Engineering</h3>
              <p className="leading-7 text-slate-300">
                Experienced in machine learning, deep learning, NLP, and model-driven product development.
              </p>
            </Card>
            <Card hover className="p-8 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">☁️</div>
              <h3 className="text-2xl font-bold text-white mb-3">Cloud & MLOps</h3>
              <p className="leading-7 text-slate-300">
                Comfortable with deployment workflows using Docker, Kubernetes, AWS, and Azure-based systems.
              </p>
            </Card>
            <Card hover className="p-8 group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">📊</div>
              <h3 className="text-2xl font-bold text-white mb-3">Data Systems</h3>
              <p className="leading-7 text-slate-300">
                Skilled in SQL, analytics, pipelines, Spark, Kafka, and scalable data processing.
              </p>
            </Card>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 lg:py-28">
          <SectionTitle
            title="Technical Skills"
            subtitle="A comprehensive overview of the tools, frameworks, and technologies I work with across the AI/ML stack."
          />
          
          <div className="space-y-6">
            {Object.entries(skillCategories).map(([category, categorySkills]) => (
              <Card key={category} className="p-6 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-bold text-cyan-300 mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                  {category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => (
                    <span
                      key={skill}
                      className="group relative rounded-xl border border-white/10 bg-slate-900/80 px-5 py-2.5 text-sm font-medium text-slate-100 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10 hover:text-cyan-200 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 lg:py-28">
          <SectionTitle
            title="Featured Projects"
            subtitle="A selection of AI/ML, data engineering, and full-stack projects showcasing end-to-end development capabilities."
          />

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <Card
                key={project.title}
                hover
                className="p-6 group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">💼</div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate-400 hover:text-cyan-300 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-sm leading-relaxed text-slate-300 mb-4 line-clamp-3">
                  {project.desc}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllProjects((prev) => !prev)}
              className="group rounded-full border-2 border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-cyan-400/50 hover:scale-105 backdrop-blur-sm"
            >
              {showAllProjects ? (
                <>
                  Show Less Projects
                  <span className="ml-2 inline-block transition-transform group-hover:-translate-y-1">↑</span>
                </>
              ) : (
                <>
                  Show All {projects.length} Projects
                  <span className="ml-2 inline-block transition-transform group-hover:translate-y-1">↓</span>
                </>
              )}
            </button>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 lg:py-28 pb-32">
          <SectionTitle
            title="Get In Touch"
            subtitle="Interested in working together or discussing an opportunity? I'd love to hear from you."
          />
          
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <Card className="p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">💬</span>
                Let's Connect
              </h3>
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/50 px-6 py-5 text-slate-100 transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/30 hover:scale-[1.02]"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">✉️</span>
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-1">Email</div>
                    <div className="font-semibold">{profile.email}</div>
                  </div>
                </a>
                
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/50 px-6 py-5 text-slate-100 transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/30 hover:scale-[1.02]"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">💻</span>
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-1">GitHub</div>
                    <div className="font-semibold">@rajatd23</div>
                  </div>
                </a>
                
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 rounded-xl border border-white/10 bg-slate-900/50 px-6 py-5 text-slate-100 transition-all duration-300 hover:bg-slate-800 hover:border-cyan-400/30 hover:scale-[1.02]"
                >
                  <span className="text-2xl group-hover:scale-110 transition-transform">🔗</span>
                  <div>
                    <div className="text-sm text-slate-400 font-medium mb-1">LinkedIn</div>
                    <div className="font-semibold">Connect with me</div>
                  </div>
                </a>
              </div>
            </Card>

            {/* Contact Form */}
            <Card className="p-8">
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-4xl">📨</span>
                Send Message
              </h3>
              <form
                className="space-y-5"
                action={`mailto:${profile.email}`}
                method="post"
                encType="text/plain"
              >
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-400/50 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-400/50 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-400/20"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows="5"
                    className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-5 py-4 text-white outline-none placeholder:text-slate-500 transition-all duration-300 focus:border-cyan-400/50 focus:bg-slate-900 focus:ring-2 focus:ring-cyan-400/20 resize-none"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full rounded-xl bg-gradient-to-r from-cyan-400 to-sky-400 px-6 py-4 font-bold text-slate-950 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/50 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Send Message →
                </button>
              </form>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-slate-950/50 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="text-center sm:text-left">
              <div className="text-xl font-black text-white">
                Rajat<span className="text-transparent bg-gradient-to-r from-cyan-400 to-sky-400 bg-clip-text">.</span>dev
              </div>
              <p className="text-sm text-slate-400 mt-1">AI/ML Engineer · Building the future</p>
            </div>
            
            <div className="flex gap-4">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-400/30 hover:scale-110"
                aria-label="GitHub"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-400/30 hover:scale-110"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition-all duration-300 hover:bg-white/10 hover:text-cyan-300 hover:border-cyan-400/30 hover:scale-110"
                aria-label="Email"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-white/10 text-center text-sm text-slate-400">
            <p>© 2026 Rajat Dungarwal.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
