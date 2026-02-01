"use client";

import { motion } from "framer-motion";
import FadeSection from "./FadeSection"
import { Code, Users, Zap, Award, Cpu, Globe, Palette, Server, Database, Cloud, Terminal, Layers, Sparkles, Briefcase, Clock, Target, CheckCircle, FileText, Download } from "lucide-react";

const aboutStats = [
  { label: "Years Experience", value: "2+", icon: Award, color: "from-cyan-400 to-blue-400" },
  { label: "Projects Completed", value: "25+", icon: Briefcase, color: "from-purple-400 to-pink-400" },
  { label: "Client Satisfaction", value: "100%", icon: Users, color: "from-emerald-400 to-green-400" },
  { label: "Avg. Delivery Time", value: "2-4 Weeks", icon: Clock, color: "from-amber-400 to-orange-400" },
];

const skills = [
  { name: "Next.js", icon: <Sparkles className="w-4 h-4" />, level: 95 },
  { name: "React", icon: <Layers className="w-4 h-4" />, level: 90 },
  { name: "Node.js", icon: <Terminal className="w-4 h-4" />, level: 85 },
  { name: "Spring Boot", icon: <Server className="w-4 h-4" />, level: 80 },
  { name: "Python", icon: <Cpu className="w-4 h-4" />, level: 75 },
  { name: "TypeScript", icon: <Code className="w-4 h-4" />, level: 90 },
  { name: "Tailwind CSS", icon: <Palette className="w-4 h-4" />, level: 95 },
  { name: "PostgreSQL", icon: <Database className="w-4 h-4" />, level: 80 },
  { name: "MongoDB", icon: <Database className="w-4 h-4" />, level: 75 },
  { name: "Docker", icon: <Globe className="w-4 h-4" />, level: 70 },
  { name: "AWS", icon: <Cloud className="w-4 h-4" />, level: 65 },
  { name: "REST APIs", icon: <Zap className="w-4 h-4" />, level: 85 },
];

const services = [
  {
    title: "Web Development",
    description: "Custom websites & web applications",
    icon: <Code className="w-5 h-5" />,
    features: ["Responsive Design", "SEO Optimized", "Fast Loading"]
  },
  {
    title: "Backend Solutions",
    description: "Scalable APIs & microservices",
    icon: <Server className="w-5 h-5" />,
    features: ["REST/GraphQL APIs", "Database Design", "Cloud Integration"]
  },
  {
    title: "UI/UX Design",
    description: "Modern, user-friendly interfaces",
    icon: <Palette className="w-5 h-5" />,
    features: ["Prototyping", "Wireframing", "User Testing"]
  },
  {
    title: "Performance",
    description: "Optimization & maintenance",
    icon: <Zap className="w-5 h-5" />,
    features: ["Speed Optimization", "Bug Fixing", "Updates"]
  }
];

export default function AboutSection() {
 const handleDownloadResume = () => {
  const link = document.createElement("a")
  link.href = "/assets/Shubham_Pawar2.pdf" // ✅ correct path
  link.download = "Shubham_Pawar2.pdf"
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
}


  return (
    <FadeSection>
      <section id="about" className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background elements */}
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
          {/* Header with modern design */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
              <span className="text-cyan-400 text-sm font-medium tracking-widest">FREELANCE DEVELOPER</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            </div>
            
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Your Trusted
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Tech Partner
              </span>
            </h2>
            
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Delivering premium web solutions for businesses and startups worldwide
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start mb-24">
            {/* Left Column - Bio */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                      Shubham Pawar
                    </span>
                  </h3>
                  
                  <div className="space-y-4 text-white/70">
                    <p className="leading-relaxed">
                      I'm a <span className="text-cyan-300 font-medium">Freelance Full-Stack Developer</span> specializing in 
                      building custom web solutions that drive business growth and enhance user engagement.
                    </p>
                    
                    <p className="leading-relaxed">
                      With <span className="text-purple-300 font-medium">2+ years of freelancing experience</span>, I've helped 
                      startups and established businesses transform their ideas into functional, scalable, 
                      and profitable digital products.
                    </p>
                    
                    <p className="leading-relaxed">
                      My approach combines <span className="text-blue-300 font-medium">technical expertise</span> with 
                      <span className="text-emerald-300 font-medium"> business understanding</span> to deliver solutions 
                      that not only look great but also achieve measurable results.
                    </p>
                  </div>

                  {/* Resume Download Button in Bio */}
                  <motion.button
                    onClick={handleDownloadResume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative mt-8 inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white font-semibold rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="absolute inset-0 shimmer opacity-30"></div>
                    <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/20 to-green-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    <FileText className="w-5 h-5 relative z-10" />
                    <span className="relative z-10">Download My Resume</span>
                    <Download className="w-4 h-4 relative z-10 group-hover:translate-y-1 transition-transform" />
                  </motion.button>
                </div>
              </div>

              {/* Why Choose Me */}
              <div className="backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6">
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Target className="w-5 h-5 text-cyan-400" />
                  Why Choose My Services
                </h4>
                <div className="space-y-3">
                  {[
                    "Clear communication & regular updates",
                    "Fast turnaround times",
                    "Competitive pricing & transparent quotes",
                    "Post-launch support & maintenance",
                    "Mobile-optimized solutions",
                    "SEO-friendly development"
                  ].map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-start gap-3"
                    >
                      <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                      <span className="text-white/70 text-sm">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column - Stats & Skills */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-12"
            >
              {/* Stats Grid */}
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
                      <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-6 text-center">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-white/10 to-transparent mb-4">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                          {stat.value}
                        </div>
                        <div className="text-sm text-white/60">{stat.label}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Services Offered */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8"
              >
                <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-cyan-400" />
                  Services I Offer
                </h3>
                
                <div className="grid grid-cols-2 gap-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={service.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ y: -5 }}
                      className="backdrop-blur-sm border border-white/5 bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-all"
                    >
                      <div className="text-cyan-400 mb-2">{service.icon}</div>
                      <h4 className="text-white font-medium text-sm mb-1">{service.title}</h4>
                      <p className="text-xs text-white/60 mb-2">{service.description}</p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, idx) => (
                          <span key={idx} className="text-[10px] px-2 py-1 rounded-full bg-white/5 text-white/50">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Tech Stack Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 mb-8">
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
              <span className="text-purple-400 text-sm font-medium tracking-widest">TECH STACK</span>
              <div className="w-8 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent"></div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
              Technologies I Work With
            </h3>
            
            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.02 }}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="group relative"
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 px-6 py-3 rounded-xl hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <span className="text-cyan-400 group-hover:scale-110 transition-transform">
                        {skill.icon}
                      </span>
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Freelance CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-16 backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8 max-w-3xl mx-auto"
            >
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-left">
                  <h4 className="text-xl font-bold text-white mb-2">
                    Need a Developer for Your Project?
                  </h4>
                  <p className="text-white/60">
                    Let's discuss your requirements and create a custom solution that fits your budget and timeline.
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
              
              {/* Process */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <h5 className="text-white font-medium mb-4 text-center">My Freelance Process</h5>
                <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                  {[
                    { step: "01", title: "Consultation", desc: "Discuss your project needs" },
                    { step: "02", title: "Planning", desc: "Proposal & timeline" },
                    { step: "03", title: "Development", desc: "Regular updates & testing" },
                    { step: "04", title: "Delivery", desc: "Launch & support" }
                  ].map((step, index) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-center p-4"
                    >
                      <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 font-bold mb-2">
                        {step.step}
                      </div>
                      <h6 className="text-white text-sm font-medium">{step.title}</h6>
                      <p className="text-xs text-white/60">{step.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </FadeSection>
  );
}