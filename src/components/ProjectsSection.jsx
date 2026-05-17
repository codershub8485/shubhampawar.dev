import { motion } from "framer-motion"
import {
  Github, Play, Sparkles, Code2, Globe, ArrowUpRight, ChevronRight,
  Brain, ShieldCheck, Mic, Building2, Calendar, Container, Workflow, Cpu
} from "lucide-react"
import { useState } from "react"

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      title: "Kaiju — AI Coding Pipeline",
      subtitle: "LLM Agent Orchestrator",
      description:
        "Production AI coding pipeline orchestrating LLM agents through a 3-stage workflow (Draft → Lint Refine → Test Refine) to autonomously implement Python libraries from AST-stubbed code, achieving 80%+ pass rates on benchmark repositories.",
      highlights: [
        "Multi-LLM on AWS Bedrock (Claude Opus 4.6, Kimi K2.5, GLM-5, Minimax M2.5) + OpenAI GPT-5 via LiteLLM",
        "RAG layer scraping spec PDFs via Playwright + MCP-style context injection of source, lint & pytest traces",
        "AST-based Python stubber preserving imports, decorators, import-time calls",
        "Parallelized Docker Buildx (OCI tarball + native load) with ThreadPoolExecutor, arm64/amd64 auto-detect"
      ],
      period: "Mar 2026 — Present",
      role: "AI Engineer · Lead",
      tech: ["Python", "FastAPI", "AWS Bedrock", "LLM", "RAG", "MCP", "Docker Buildx", "Playwright", "pytest"],
      status: "production",
      category: "AI/ML",
      icon: Brain,
      accentColor: "from-purple-500 via-pink-500 to-rose-500",
      glow: "bg-purple-500/20",
      metrics: [
        { label: "Pass rate", value: "80%+" },
        { label: "Models", value: "5+" },
        { label: "Stages", value: "3" }
      ]
    },
    {
      title: "Enterprise SaaS Audit Management",
      subtitle: "Multi-tenant Audit Platform",
      description:
        "Scalable enterprise SaaS supporting multiple audit types with complex, role-driven workflows. Real-time dashboards with SLA timers, audit status tracking, and offline sync indicators — hardened with XSS prevention, CSRF-safe interactions, and secure token handling.",
      highlights: [
        "Role-based UI rendering for 7 user roles with strict access control",
        "Secure authentication flows and session-safe routing",
        "Real-time SLA timers + audit status tracking dashboards",
        "Web security: XSS, CSRF, secure token handling"
      ],
      period: "Aug 2025 — Feb 2026",
      role: "Frontend Developer",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind", "Web Security", "JWT", "RBAC"],
      status: "live",
      category: "Frontend",
      icon: ShieldCheck,
      accentColor: "from-cyan-500 via-blue-500 to-indigo-500",
      glow: "bg-cyan-500/20",
      metrics: [
        { label: "User roles", value: "7" },
        { label: "Audit types", value: "Multi" },
        { label: "Security", value: "Hardened" }
      ]
    },
    {
      title: "Voice Broadcast Management",
      subtitle: "AI-powered Campaign Platform",
      description:
        "Voice Broadcast Management System enabling users to configure and launch voice campaigns through a single streamlined workflow. Integrated AI-powered TTS and intelligent detection models to automate execution and improve delivery accuracy.",
      highlights: [
        "AI-powered Text-to-Speech + intelligent detection models",
        "Live campaign monitoring with analytics dashboards",
        "Scalable Python FastAPI backend with secure API communication",
        "High-performance Next.js frontend"
      ],
      period: "Jul 2024 — Jul 2025",
      role: "Full Stack Developer",
      tech: ["FastAPI", "Next.js", "AI/TTS", "PostgreSQL", "Detection Models"],
      status: "live",
      category: "Full-Stack",
      href: "https://bonvoice.austere.biz",
      image: "/assets/bonvoice.webm",
      icon: Mic,
      accentColor: "from-emerald-500 via-green-500 to-teal-500",
      glow: "bg-emerald-500/20",
      metrics: [
        { label: "Backend", value: "FastAPI" },
        { label: "AI", value: "TTS" },
        { label: "Frontend", value: "Next.js" }
      ]
    },
    {
      title: "FDMS — Haryana Government",
      subtitle: "Fund Disbursement Management",
      description:
        "Fund Disbursement Management System for the Haryana Government to digitally manage fund transfers across multiple administrative levels. Secure REST APIs with Spring Security + JWT role-based authorization across Admin, Officers, and Employees.",
      highlights: [
        "Secure REST APIs in Java Spring Boot for fund allocation & approval workflows",
        "Spring Security + JWT role-based authorization (Admin / Officers / Employees)",
        "ACID-compliant transactions with optimized DB queries",
        "Robust validations and exception handling for transaction integrity"
      ],
      period: "Jan 2024 — Jun 2024",
      role: "Backend Developer",
      tech: ["Java", "Spring Boot", "Spring Security", "JWT", "MySQL", "REST APIs"],
      status: "delivered",
      category: "Backend",
      icon: Building2,
      accentColor: "from-amber-500 via-orange-500 to-red-500",
      glow: "bg-amber-500/20",
      metrics: [
        { label: "Sector", value: "Gov" },
        { label: "Roles", value: "3" },
        { label: "Compliance", value: "ACID" }
      ]
    }
  ]

  const categories = ["all", "AI/ML", "Full-Stack", "Frontend", "Backend"]

  const filteredProjects = activeCategory === "all"
    ? projects
    : projects.filter(project => project.category === activeCategory)

  const statusStyles = {
    production: "from-purple-500/20 to-pink-500/20 text-purple-300 border-purple-500/30",
    live: "from-emerald-500/20 to-green-500/20 text-emerald-300 border-emerald-500/30",
    delivered: "from-amber-500/20 to-orange-500/20 text-amber-300 border-amber-500/30",
  }

  return (
    <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>

        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                              linear-gradient(to bottom, #8882 1px, transparent 1px)`,
              backgroundSize: '80px 80px',
            }}
          ></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <span className="text-cyan-400 text-sm font-medium tracking-widest">FEATURED WORK</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Projects That
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Ship in Production
            </span>
          </h2>

          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From multi-LLM agent orchestrators to government-grade SaaS — built end-to-end and deployed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-2xl"
                  : "backdrop-blur-xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white"
              }`}
            >
              {category === "all" ? "All Projects" : category}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => {
            const Icon = project.icon
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProject(project.title)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.accentColor} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>

                <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl overflow-hidden h-full flex flex-col">
                  {/* Visual header */}
                  <div className="relative h-52 overflow-hidden">
                    {project.image ? (
                      <>
                        <video
                          src={project.image}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <motion.div
                            animate={{ scale: [1, 1.15, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                            className={`bg-gradient-to-r ${project.accentColor} p-4 rounded-full shadow-2xl`}
                          >
                            <Play className="w-8 h-8 text-white" fill="white" />
                          </motion.div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.accentColor} opacity-90`}></div>
                        <div className="absolute inset-0" style={{
                          backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
                                          linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)`,
                          backgroundSize: '32px 32px',
                        }}></div>
                        <div className={`absolute -top-10 -right-10 w-40 h-40 ${project.glow} rounded-full blur-3xl`}></div>
                        <div className={`absolute -bottom-10 -left-10 w-40 h-40 ${project.glow} rounded-full blur-3xl`}></div>
                        <div className="relative h-full flex items-center justify-center">
                          <motion.div
                            animate={{
                              y: [0, -8, 0],
                              rotate: [0, 5, 0]
                            }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative"
                          >
                            <div className="absolute -inset-6 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="relative w-24 h-24 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center shadow-2xl">
                              <Icon className="w-12 h-12 text-white" />
                            </div>
                          </motion.div>
                        </div>
                      </>
                    )}

                    {/* Top badges */}
                    <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                      <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r ${statusStyles[project.status]} text-xs font-medium border backdrop-blur-md`}>
                        <div className="relative">
                          <div className="w-1.5 h-1.5 bg-current rounded-full"></div>
                          <div className="absolute -inset-1 bg-current/30 rounded-full blur-sm animate-ping"></div>
                        </div>
                        {project.status}
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/40 border border-white/20 backdrop-blur-md text-xs font-medium text-white">
                        <Calendar className="w-3 h-3" />
                        {project.period}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7 flex-1 flex flex-col">
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[10px] uppercase tracking-widest text-cyan-400 font-medium">{project.category}</span>
                        <span className="text-white/30">·</span>
                        <span className="text-[10px] text-white/50">{project.role}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white leading-tight">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/50 mt-1">{project.subtitle}</p>
                    </div>

                    <p className="text-white/70 leading-relaxed mb-5 text-sm">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    {project.metrics && (
                      <div className="grid grid-cols-3 gap-2 mb-5">
                        {project.metrics.map((m) => (
                          <div key={m.label} className="text-center p-2.5 rounded-lg bg-white/5 border border-white/10">
                            <div className={`text-sm font-bold bg-gradient-to-r ${project.accentColor} bg-clip-text text-transparent`}>
                              {m.value}
                            </div>
                            <div className="text-[10px] text-white/50 mt-0.5">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Highlights */}
                    <div className="mb-5 space-y-1.5">
                      {project.highlights.slice(0, 3).map((h, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-white/60">
                          <ChevronRight className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{h}</span>
                        </div>
                      ))}
                    </div>

                    {/* Tech */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 text-white/40 text-xs mb-2">
                        <Code2 className="w-3 h-3" />
                        Stack
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 backdrop-blur-xl border border-white/10 bg-white/5 text-white/70 rounded-lg text-[11px] font-medium hover:bg-white/10 transition-all"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Footer actions */}
                    <div className="flex items-center justify-between pt-5 border-t border-white/10 mt-auto">
                      <div className="flex items-center gap-2 text-xs text-white/40">
                        <Workflow className="w-3.5 h-3.5" />
                        {project.role}
                      </div>
                      {project.href ? (
                        <motion.a
                          href={project.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r ${project.accentColor} text-white rounded-lg text-sm font-medium shadow-lg`}
                        >
                          <Globe className="w-4 h-4" />
                          Live Demo
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </motion.a>
                      ) : (
                        <span className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/5 border border-white/10 text-white/70 rounded-lg text-sm font-medium">
                          <Cpu className="w-4 h-4" />
                          Private Repo
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { value: "4", label: "Featured Projects" },
              { value: "10+", label: "LLMs Integrated" },
              { value: "20+", label: "Technologies" },
              { value: "2+", label: "Years Shipping" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl hover:bg-white/10 transition-all"
              >
                <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative group"
            whileHover={{ scale: 1.02 }}
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8 max-w-3xl mx-auto">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-left">
                  <h4 className="text-2xl font-bold text-white mb-3">
                    Got an AI or platform idea?
                  </h4>
                  <p className="text-white/60">
                    Let's design the architecture and ship the first cut together.
                  </p>
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/cta inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-2xl"
                >
                  <span>Start the Conversation</span>
                  <Sparkles className="w-5 h-5 group-hover/cta:rotate-12 transition-transform" />
                  <div className="absolute inset-0 shimmer opacity-20"></div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection
