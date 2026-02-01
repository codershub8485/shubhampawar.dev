import { motion } from "framer-motion"
import { ExternalLink, Github, Play, Eye, Sparkles, Code2, Globe, Server, Zap, ArrowUpRight, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

const ProjectsSection = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hoveredProject, setHoveredProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState("all")

  const projects = [
    {
      title: "MAMCO",
      description: "A modern e-commerce platform with portfolio management for CA professionals. Features service showcase, client management, and seamless digital experience.",
      image: "/assets/mittal_website.webm",
      href: "https://www.mamco-ca.com/",
      tech: ["Next.js", "React", "Node.js", "MongoDB"],
      status: "live",
      category: "Full-Stack",
      accentColor: "from-cyan-500 to-blue-500"
    },
    {
      title: "Voice BroadCast",
      description: "Scalable voice broadcasting platform with VPS management, automated campaign scheduling, real-time reports, and robust backend infrastructure.",
      image: "/assets/bonvoice.webm",
      href: "https://bonvoice.austere.biz",
      tech: ["Node.js", "Express", "PostgreSQL", "AWS"],
      status: "live",
      category: "Backend",
      accentColor: "from-purple-500 to-pink-500"
    },
  ]

  const categories = ["all", "Full-Stack", "Backend", "Frontend", "AI/ML"]

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500)

    return () => clearTimeout(timer)
  }, [])

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory)

  if (isLoading) {
    return (
      <section id="projects" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="h-12 bg-white/10 rounded-lg w-64 mx-auto mb-6 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded w-96 mx-auto animate-pulse"></div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {[1, 2].map((i) => (
              <div key={i} className="h-96 bg-white/5 rounded-2xl animate-pulse"></div>
            ))}
          </div>
        </div>
      </section>
    )
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
            <span className="text-cyan-400 text-sm font-medium tracking-widest">MY WORK</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Featured
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Projects
            </span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            Showcasing my latest work where innovation meets execution
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
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </motion.button>
          ))}
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              onMouseEnter={() => setHoveredProject(project.title)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group relative"
            >
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${project.accentColor} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
              
              <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl overflow-hidden h-full flex flex-col">
                <div className="p-8 pb-0">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm font-medium mb-3">
                        <Globe className="w-3 h-3" />
                        {project.category}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                    </div>
                    
                    <motion.div
                      className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-gradient-to-r from-emerald-500/20 to-green-500/20 text-emerald-300 text-xs font-medium border border-emerald-500/30"
                      animate={{ 
                        scale: hoveredProject === project.title ? 1.1 : 1
                      }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="relative">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                        <div className="absolute -inset-1 bg-emerald-400/30 rounded-full blur-sm animate-ping"></div>
                      </div>
                      {project.status}
                    </motion.div>
                  </div>
                </div>

                <div className="relative overflow-hidden bg-gradient-to-br from-white/5 to-transparent mx-8 rounded-xl">
                  {project.image?.endsWith(".webm") || project.image?.endsWith(".mp4") ? (
                    <div className="relative">
                      <video
                        src={project.image}
                        controls
                        autoPlay
                        muted
                        loop
                        className="w-full h-64 object-cover rounded-xl"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <motion.div
                          animate={{ scale: [1, 1.2, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 p-4 rounded-full shadow-2xl"
                        >
                          <Play className="w-8 h-8 text-white" fill="white" />
                        </motion.div>
                      </div>
                    </div>
                  ) : (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover rounded-xl"
                    />
                  )}
                  
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ opacity: 0 }}
                  >
                    <div className="absolute bottom-6 left-6 right-6">
                      <motion.a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold shadow-2xl hover:shadow-cyan-500/30 transition-shadow"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Globe className="w-5 h-5" />
                        Visit Live Site
                        <ArrowUpRight className="w-5 h-5" />
                      </motion.a>
                    </div>
                  </motion.div>
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <p className="text-white/70 leading-relaxed mb-8 flex-1">
                    {project.description}
                  </p>

                  <div className="mb-8">
                    <div className="flex items-center gap-2 text-white/50 text-sm mb-4">
                      <Code2 className="w-4 h-4" />
                      Technologies Used
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 }}
                          whileHover={{ y: -3 }}
                          className="px-4 py-2 backdrop-blur-xl border border-white/10 bg-white/5 text-white/80 rounded-lg text-sm font-medium hover:bg-white/10 transition-all"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-white/10">
                    <motion.a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/view inline-flex items-center gap-2 text-cyan-300 font-medium hover:text-cyan-400 transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      View Case Study
                      <ChevronRight className="w-4 h-4 group-hover/view:translate-x-1 transition-transform" />
                    </motion.a>
                    
                    <motion.a
                      href={project.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-300 rounded-xl font-medium hover:from-cyan-500/20 hover:to-blue-500/20 transition-all"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Globe className="w-4 h-4" />
                      Live Demo
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "25+", label: "Projects Delivered" },
              { value: "15+", label: "Technologies" },
              { value: "2+", label: "Years Experience" }
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
                    Ready to Start Your Project?
                  </h4>
                  <p className="text-white/60">
                    Let's collaborate and build something amazing together.
                  </p>
                </div>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/cta inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-2xl"
                >
                  <span>Discuss Your Idea</span>
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