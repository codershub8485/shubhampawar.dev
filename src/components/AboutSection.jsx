"use client";

import { motion } from "framer-motion";
import FadeSection from "./FadeSection"
import {
  Code, Users, Zap, Award, Cpu, Globe, Server, Database, Cloud, Terminal,
  Layers, Sparkles, Briefcase, Target, CheckCircle, FileText, Download,
  Brain, Bot, Workflow, GraduationCap, MapPin, Calendar, ShieldCheck, Container, GitBranch
} from "lucide-react";

const aboutStats = [
  { label: "Years Engineering", value: "2+", icon: Award, color: "from-cyan-400 to-blue-400" },
  { label: "Production Projects", value: "10+", icon: Briefcase, color: "from-purple-400 to-pink-400" },
  { label: "LLMs Orchestrated", value: "10+", icon: Brain, color: "from-emerald-400 to-green-400" },
  { label: "Sprint Success Rate", value: "100%", icon: Target, color: "from-amber-400 to-orange-400" },
];

const skillGroups = [
  {
    title: "AI / GenAI",
    icon: <Brain className="w-5 h-5" />,
    color: "from-purple-500 to-pink-500",
    items: ["LLM", "RAG", "MCP", "AI Agents", "Prompt Engineering", "Prompt Caching", "Vector Embeddings", "LiteLLM", "LangChain", "Claude / GPT / Kimi / GLM", "TTS", "AI Detection"]
  },
  {
    title: "Backend & APIs",
    icon: <Server className="w-5 h-5" />,
    color: "from-emerald-500 to-green-500",
    items: ["Python", "FastAPI", "Java", "Spring Boot", "Node.js", "Express", "Laravel", "REST", "Microservices", "JWT", "OAuth 2.0", "RBAC"]
  },
  {
    title: "Frontend",
    icon: <Layers className="w-5 h-5" />,
    color: "from-cyan-500 to-blue-500",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS", "HTML5", "AJAX", "Real-Time Dashboards"]
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-5 h-5" />,
    color: "from-amber-500 to-orange-500",
    items: ["AWS Bedrock", "EC2", "S3", "Lambda", "IAM", "Docker", "Docker Buildx", "Docker Compose", "GCP", "CI/CD", "Linux"]
  },
  {
    title: "Data & Security",
    icon: <Database className="w-5 h-5" />,
    color: "from-blue-500 to-indigo-500",
    items: ["MySQL", "PostgreSQL", "Vector DB", "ACID Transactions", "Indexing", "XSS / CSRF", "Secure Token Handling"]
  },
  {
    title: "Tools & Methods",
    icon: <Terminal className="w-5 h-5" />,
    color: "from-rose-500 to-red-500",
    items: ["Git", "GitHub", "GitLab", "Playwright", "pytest", "Postman", "AST", "Agile / Scrum", "TDD", "System Design"]
  }
];

const experience = [
  {
    company: "Ethara AI",
    role: "Full Stack Engineer",
    period: "Mar 2026 — Present",
    location: "Gurugram, India",
    color: "from-cyan-500 to-purple-500",
    icon: Brain,
    highlights: [
      "Pioneering production AI/LLM platforms and agentic coding pipelines for automated software engineering at scale.",
      "Architecting multi-model LLM integrations on AWS Bedrock (Claude Opus 4.6, Kimi K2, GLM-5, Minimax) and OpenAI GPT via LiteLLM with prompt caching and cost analytics.",
      "Shipping FastAPI microservices and Next.js dashboards for AI Agent orchestration, evaluation, and observability.",
      "Implementing RAG workflows and MCP integrations to inject specs, source code, and unit-test context into LLM agents."
    ],
    tags: ["FastAPI", "Next.js", "AWS Bedrock", "LLM", "RAG", "MCP", "Docker"]
  },
  {
    company: "Austere Systems Limited",
    role: "Software Developer  ·  Intern → Trainee → Developer",
    period: "Jan 2024 — Feb 2026",
    location: "Pune, Maharashtra",
    color: "from-blue-500 to-emerald-500",
    icon: Briefcase,
    highlights: [
      "Released ERP, FDMS, Audit Management SaaS, and Voice Broadcast platforms across government and enterprise clients.",
      "Designed scalable REST APIs with Java Spring Boot + Python FastAPI; secured workflows with JWT + Spring Security RBAC across multi-level hierarchies.",
      "Built React.js / Next.js frontends with real-time dashboards, SLA indicators, and AI Text-to-Speech voice campaign automation.",
      "Optimized SQL & indexing for 40%+ performance gains; led a team of 12+ developers to 100% sprint success on AWS / GCP."
    ],
    tags: ["Spring Boot", "FastAPI", "React.js", "Next.js", "AWS", "GCP", "Team Lead"]
  }
];

const whyChoose = [
  { icon: <ShieldCheck className="w-4 h-4" />, text: "Production-grade AI/LLM systems, not demos" },
  { icon: <Workflow className="w-4 h-4" />, text: "End-to-end ownership: design → ship → observe" },
  { icon: <Container className="w-4 h-4" />, text: "Cloud-native: Docker, AWS Bedrock, CI/CD" },
  { icon: <GitBranch className="w-4 h-4" />, text: "Clear Git workflow + regular async updates" },
  { icon: <Zap className="w-4 h-4" />, text: "Performance-first: 40%+ optimisation track record" },
  { icon: <Users className="w-4 h-4" />, text: "Comfortable leading teams of 12+ engineers" }
];

export default function AboutSection() {
  const handleDownloadResume = () => {
    const link = document.createElement("a")
    link.href = "/assets/Shubham_Pawar_Resume.pdf"
    link.download = "Shubham_Pawar_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <FadeSection>
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
                backgroundSize: '40px 40px',
              }}
            ></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-widest">ABOUT ME</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>

            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Full-Stack Engineer
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Building AI-Native Systems
              </span>
            </h2>

            <p className="text-lg text-white/60 max-w-3xl mx-auto">
              2+ years shipping production Generative AI, LLM, RAG and MCP systems alongside enterprise SaaS for government and AI-native products.
            </p>
          </motion.div>

          {/* Bio + Stats */}
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start mb-20">
            {/* Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-3 space-y-6"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-1">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                          Shubham Pawar
                        </span>
                      </h3>
                      <p className="text-white/50 text-sm flex items-center gap-2">
                        <MapPin className="w-3.5 h-3.5" /> Akurdi, Pune, Maharashtra 411033
                      </p>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-medium">
                      <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
                      Open to opportunities
                    </span>
                  </div>

                  <div className="space-y-4 text-white/70 leading-relaxed">
                    <p>
                      Results-driven <span className="text-cyan-300 font-medium">Full Stack Engineer</span> and <span className="text-purple-300 font-medium">AI Engineer</span> with 2+ years building production <span className="text-pink-300 font-medium">Generative AI</span>, <span className="text-pink-300 font-medium">LLM</span>, <span className="text-pink-300 font-medium">RAG</span>, and <span className="text-pink-300 font-medium">MCP (Model Context Protocol)</span> systems alongside enterprise SaaS.
                    </p>
                    <p>
                      Hands-on with <span className="text-blue-300 font-medium">AI Agent orchestration</span>, prompt engineering, vector embeddings, and multi-model integration (<span className="text-emerald-300">Claude, GPT, Kimi, GLM</span>) via <span className="text-amber-300 font-medium">AWS Bedrock</span> and OpenAI.
                    </p>
                    <p>
                      Proficient in Python (FastAPI), Java (Spring Boot), React.js, Next.js, Docker, and AWS (Bedrock, EC2, S3, Lambda). Proven delivery of REST APIs, JWT/RBAC security, CI/CD and microservices for government, enterprise and AI-native products.
                    </p>
                  </div>

                  <motion.button
                    onClick={handleDownloadResume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group/btn relative mt-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer opacity-30"></div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                    <FileText className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Download Resume</span>
                    <Download className="w-4 h-4 relative z-10 group-hover/btn:translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Why work with me */}
              <div className="backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-5 h-5 text-cyan-400" />
                  Why Work With Me
                </h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {whyChoose.map((item, index) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <span className="text-cyan-400 mt-0.5 flex-shrink-0">{item.icon}</span>
                      <span className="text-white/70 text-sm">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Stats + Education */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {aboutStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="relative group"
                    >
                      <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                      <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-5 text-center">
                        <div className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-gradient-to-br from-white/10 to-transparent mb-3">
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                          {stat.value}
                        </div>
                        <div className="text-xs text-white/60">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative group"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6">
                  <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-cyan-400" />
                    Education
                  </h4>
                  <div>
                    <p className="text-white font-medium">Bachelor of Engineering, Computer Science</p>
                    <p className="text-white/60 text-sm mt-1">Savitribai Phule Pune University</p>
                    <div className="flex flex-wrap items-center gap-3 mt-3 text-xs">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                        CGPA 8.81
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-white/50">
                        <Calendar className="w-3 h-3" /> Aug 2019 — Aug 2023
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-white/50">
                        <MapPin className="w-3 h-3" /> Pune
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Leadership */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6"
              >
                <h4 className="text-lg font-bold text-white mb-3 flex items-center gap-3">
                  <Users className="w-5 h-5 text-purple-400" />
                  Leadership
                </h4>
                <p className="text-white/80 text-sm font-medium">Team Lead — Product Development</p>
                <p className="text-white/50 text-xs mt-1">Austere Systems Limited · 2024 — 2026</p>
                <p className="text-white/60 text-sm mt-3">
                  Led a team of <span className="text-purple-300 font-medium">12–15 engineers</span> to deliver a scalable ERP product with high quality standards and on-time delivery.
                </p>
              </motion.div>
            </motion.div>
          </div>

          {/* Experience Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
                <span className="text-purple-400 text-sm font-medium tracking-widest">WORK EXPERIENCE</span>
                <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-white">
                Where I've{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  Shipped
                </span>
              </h3>
            </div>

            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-purple-500/50 to-transparent md:-translate-x-1/2"></div>

              <div className="space-y-10">
                {experience.map((exp, index) => {
                  const Icon = exp.icon
                  const isLeft = index % 2 === 0
                  return (
                    <motion.div
                      key={exp.company}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.15 }}
                      className={`relative md:grid md:grid-cols-2 md:gap-12 ${isLeft ? "" : "md:[&>div:first-child]:order-2"}`}
                    >
                      {/* Dot */}
                      <div className="absolute left-4 md:left-1/2 top-6 -translate-x-1/2 z-10">
                        <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${exp.color} ring-4 ring-black`}></div>
                        <div className={`absolute -inset-2 bg-gradient-to-br ${exp.color} rounded-full blur-md opacity-50`}></div>
                      </div>

                      <div className={`pl-12 md:pl-0 ${isLeft ? "md:pr-8 md:text-right" : "md:pl-8"}`}>
                        <div className={`inline-flex items-center gap-2 text-xs text-white/50 mb-2`}>
                          <Calendar className="w-3.5 h-3.5" /> {exp.period}
                          <span className="hidden sm:inline">·</span>
                          <MapPin className="w-3.5 h-3.5 hidden sm:inline" />
                          <span className="hidden sm:inline">{exp.location}</span>
                        </div>
                      </div>

                      <div className={`pl-12 md:pl-0 ${isLeft ? "md:pl-8" : "md:pr-8"}`}>
                        <motion.div
                          whileHover={{ y: -4 }}
                          className="relative group"
                        >
                          <div className={`absolute -inset-0.5 bg-gradient-to-br ${exp.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                          <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6">
                            <div className="flex items-center gap-3 mb-4">
                              <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${exp.color} flex items-center justify-center shadow-lg`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h4 className="text-lg font-bold text-white">{exp.company}</h4>
                                <p className="text-sm text-white/60">{exp.role}</p>
                              </div>
                            </div>

                            <ul className="space-y-2 mb-4">
                              {exp.highlights.map((h, i) => (
                                <li key={i} className="flex items-start gap-2 text-sm text-white/70">
                                  <CheckCircle className="w-3.5 h-3.5 text-cyan-400 mt-1 flex-shrink-0" />
                                  <span>{h}</span>
                                </li>
                              ))}
                            </ul>

                            <div className="flex flex-wrap gap-1.5">
                              {exp.tags.map((t) => (
                                <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </motion.div>

          {/* Tech Stack Grouped */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-widest">TECH STACK</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold text-white mb-12">
              Tools of the{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Trade
              </span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillGroups.map((group, index) => (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  whileHover={{ y: -5 }}
                  className="group relative text-left"
                >
                  <div className={`absolute -inset-0.5 bg-gradient-to-br ${group.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.color} flex items-center justify-center text-white shadow-lg`}>
                        {group.icon}
                      </div>
                      <h4 className="text-lg font-bold text-white">{group.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-white/10 transition-colors"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-16 backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8 max-w-4xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Have an AI or full-stack idea?
                  </h4>
                  <p className="text-white/60">
                    From RAG pipelines and AI agents to production SaaS — let's scope it together.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold shadow-2xl"
                  >
                    <span>Get a Free Quote</span>
                    <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                    <div className="absolute inset-0 shimmer opacity-20"></div>
                  </motion.a>
                  <motion.button
                    onClick={handleDownloadResume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative inline-flex items-center gap-3 px-6 py-3 backdrop-blur-xl border border-white/10 bg-white/5 text-white rounded-xl hover:bg-white/10 transition-all"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Download Resume</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </FadeSection>
  );
}
