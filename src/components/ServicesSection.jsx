import { motion } from "framer-motion"
import { Code2, Palette, SearchCheck, MonitorSmartphone, Database, Zap, Sparkles, Cpu, Globe, Cloud, Layers, Server, Briefcase, CheckCircle } from "lucide-react"

const ServicesSection = () => {
  const services = [
    {
      service: "Frontend Development",
      description: "Building modern, responsive UI using React, Next.js, and TailwindCSS with smooth animations and optimal performance.",
      icon: Code2,
      color: "from-blue-500 to-cyan-500",
      gradient: "bg-gradient-to-br from-blue-500/20 via-cyan-500/10 to-transparent",
      tech: ["React", "Next.js", "TypeScript", "Tailwind"]
    },
    {
      service: "UI/UX Design",
      description: "Creating intuitive interfaces with focus on usability, accessibility, and seamless user experience across all devices.",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
      gradient: "bg-gradient-to-br from-purple-500/20 via-pink-500/10 to-transparent",
      tech: ["Figma", "Adobe XD", "Prototyping", "User Research"]
    },
    {
      service: "Backend Development",
      description: "Building secure, scalable systems with Node.js or Java Spring Boot, including REST APIs and database architecture.",
      icon: Database,
      color: "from-emerald-500 to-green-500",
      gradient: "bg-gradient-to-br from-emerald-500/20 via-green-500/10 to-transparent",
      tech: ["Node.js", "Spring Boot", "PostgreSQL", "MongoDB"]
    },
    {
      service: "Full-Stack Solutions",
      description: "End-to-end development of web applications with modern architecture patterns and best practices.",
      icon: Layers,
      color: "from-cyan-500 to-blue-500",
      gradient: "bg-gradient-to-br from-cyan-500/20 via-blue-500/10 to-transparent",
      tech: ["Microservices", "REST APIs", "Authentication", "Deployment"]
    },
    {
      service: "Performance Optimization",
      description: "Optimizing website speed, core web vitals, and overall performance for better user experience and SEO rankings.",
      icon: Zap,
      color: "from-amber-500 to-orange-500",
      gradient: "bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent",
      tech: ["Core Web Vitals", "Lighthouse", "Caching", "CDN"]
    },
    {
      service: "Cloud & DevOps",
      description: "Deploying and maintaining applications on cloud platforms with CI/CD pipelines and infrastructure as code.",
      icon: Cloud,
      color: "from-indigo-500 to-purple-500",
      gradient: "bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent",
      tech: ["AWS", "Docker", "CI/CD", "Monitoring"]
    },
  ]

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(100, 200, 255, 0.1) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
            <span className="text-blue-400 text-sm font-medium tracking-widest">WHAT I OFFER</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Expert
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              Services
            </span>
          </h2>
          
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            End-to-end digital solutions tailored to your business needs, delivered with cutting-edge technology
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((item, idx) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.service}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${item.color} rounded-3xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                
                <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 group-hover:bg-white/10 group-hover:border-white/20 overflow-hidden">
                  <div className={`absolute inset-0 ${item.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 mb-8">
                    <div className="relative">
                      <div className={`absolute -inset-4 bg-gradient-to-br ${item.color} rounded-full blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-10 h-10 text-white" />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 flex-1">
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                      {item.service}
                    </h3>
                    
                    <p className="text-white/70 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tech.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: techIndex * 0.05 + idx * 0.1 }}
                          className="px-3 py-1.5 backdrop-blur-sm border border-white/5 bg-white/5 text-white/70 rounded-lg text-xs font-medium"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  <div className="relative z-10 mt-8 pt-6 border-t border-white/10">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/50 group-hover:text-white/70 transition-colors">
                        Learn More
                      </span>
                      <motion.div
                        animate={{ x: [0, 5, 0] }}
                        transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
                        className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Sparkles className="w-5 h-5" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            )
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20"
        >
          <div className="relative backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="md:col-span-2">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                    My Development Process
                  </span>
                </h3>
                <p className="text-white/60">
                  Following agile methodologies, I ensure every project is delivered with precision, 
                  maintaining clear communication and transparency throughout the development lifecycle.
                </p>
              </div>
              
              <div className="flex items-center justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-xl shadow-2xl"
                >
                  <span>Start a Project</span>
                  <Sparkles className="w-5 h-5 group-hover/btn:rotate-12 transition-transform" />
                  <div className="absolute inset-0 shimmer opacity-20"></div>
                </motion.a>
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
              {[
                { step: "01", title: "Discovery", desc: "Requirement analysis" },
                { step: "02", title: "Planning", desc: "Architecture design" },
                { step: "03", title: "Development", desc: "Agile implementation" },
                { step: "04", title: "Delivery", desc: "Testing & deployment" }
              ].map((process, index) => (
                <motion.div
                  key={process.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="p-6 backdrop-blur-sm border border-white/5 bg-white/5 rounded-xl hover:bg-white/10 transition-all"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
                    {process.step}
                  </div>
                  <h4 className="text-white font-medium mb-1">{process.title}</h4>
                  <p className="text-sm text-white/50">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-12">
            Why Choose My Services?
          </h3>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Fast Delivery",
                desc: "Efficient development process without compromising quality"
              },
              {
                icon: <Cpu className="w-6 h-6" />,
                title: "Modern Tech",
                desc: "Using latest technologies and best practices"
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Scalable Solutions",
                desc: "Built to grow with your business needs"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 backdrop-blur-xl border border-white/10 bg-white/5 rounded-2xl"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 mb-4">
                  {item.icon}
                </div>
                <h4 className="text-white font-medium mb-2">{item.title}</h4>
                <p className="text-sm text-white/60">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesSection