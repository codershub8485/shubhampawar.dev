import { motion } from "framer-motion"
import { ArrowDown, Sparkles, Code2, Zap, Star, Rocket, ChevronRight, Cpu, Globe, Palette, Layers } from "lucide-react"

const HomeSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      } 
    },
  }

  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 4 + 3,
    delay: Math.random() * 2,
    color: i % 3 === 0 ? "#3b82f6" : i % 3 === 1 ? "#8b5cf6" : "#06b6d4"
  }))

  const techStack = [
    { icon: <Code2 className="w-5 h-5" />, label: "Full-Stack" },
    { icon: <Cpu className="w-5 h-5" />, label: "AI/ML" },
    { icon: <Globe className="w-5 h-5" />, label: "Scalable" },
    { icon: <Palette className="w-5 h-5" />, label: "UI/UX" },
    { icon: <Layers className="w-5 h-5" />, label: "GenAI" }
  ]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[128px]"></div>
          <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-500/10 rounded-full blur-[96px]"></div>
        </div>
        
        <div 
          className="absolute inset-0 opacity-10" 
          style={{
            backgroundImage: `linear-gradient(to right, #8882 1px, transparent 1px),
                            linear-gradient(to bottom, #8882 1px, transparent 1px)`,
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>
      
      <div className="absolute inset-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              backgroundColor: particle.color,
              boxShadow: `0 0 20px ${particle.color}40`
            }}
            animate={{
              y: [0, -100],
              x: [0, Math.random() * 20 - 10],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "linear"
            }}
          />
        ))}
      </div>
      
      <motion.div
        className="absolute top-1/4 left-5 lg:left-10 text-blue-400/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-blue-400/10 rounded-full blur-xl"
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <Code2 size={48} />
        </div>
      </motion.div>
      
      <motion.div
        className="absolute bottom-1/3 right-5 lg:right-10 text-purple-400/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
      >
        <div className="relative">
          <motion.div
            className="absolute -inset-4 bg-purple-400/10 rounded-full blur-xl"
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <Sparkles size={44} />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 flex flex-col items-center max-w-6xl mx-auto w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="mb-8 lg:mb-12"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 shadow-2xl hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative">
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sparkles className="w-5 h-5 text-cyan-400" />
              </motion.div>
              <div className="absolute -inset-1 bg-cyan-400/20 rounded-full blur-sm"></div>
            </div>
            <span className="text-sm font-medium text-white/80">Open for opportunities</span>
            <div className="relative">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="absolute -inset-2 bg-emerald-400/30 rounded-full blur-sm animate-ping"></div>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 lg:mb-8 text-center leading-tight"
          variants={itemVariants}
        >
          <div className="relative inline-block">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
              Hi, I'm{" "}
            </span>
            <motion.span
              className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 inline-block"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              Shubham Pawar
            </motion.span>
            <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"></div>
          </div>
        </motion.h1>

        <motion.div
          className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto text-center mb-8 lg:mb-12 leading-relaxed"
          variants={itemVariants}
        >
          <p className="mb-6">
            Crafting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-semibold">
              digital experiences
            </span>{" "}
            at the intersection of design & technology
          </p>
          
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-8"
            variants={itemVariants}
          >
            {techStack.map((tech, index) => (
              <motion.div
                key={index}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300 group"
                whileHover={{ y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                <span className="text-cyan-400 group-hover:scale-110 transition-transform">
                  {tech.icon}
                </span>
                <span className="text-sm font-medium text-white/70">{tech.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 lg:gap-6 items-center"
          variants={itemVariants}
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="relative z-10 flex items-center gap-3">
              <span className="text-lg">View Projects</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ repeat: Infinity, repeatType: "reverse", duration: 1.5 }}
              >
                <ChevronRight className="w-5 h-5" />
              </motion.div>
            </div>
            <div className="absolute inset-0 shimmer opacity-30"></div>
          </motion.a>
          
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group inline-flex items-center gap-4 px-8 lg:px-10 py-4 lg:py-5 rounded-2xl backdrop-blur-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-300 font-semibold"
          >
            <span className="text-white/90">Let's Connect</span>
            <motion.div
              animate={{ x: [0, 4, 0] }}
              transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
              className="text-cyan-400"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.div>
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.a>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-8 mt-12 lg:mt-16 w-full max-w-3xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          transition={{ delayChildren: 0.5 }}
        >
          {[
            { value: "50+", label: "Projects" },
            { value: "2+", label: "Years Experience" },
            { value: "100%", label: "Client Satisfaction" },
            { value: "∞", label: "Passion" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center p-6 rounded-2xl backdrop-blur-xl border border-white/5 bg-white/5 hover:bg-white/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ y: -4 }}
            >
              <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-sm text-white/60 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="absolute bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.div
            className="flex flex-col items-center gap-2 text-white/50 hover:text-white/80 transition-colors cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, repeatType: "reverse", duration: 2 }}
          >
            <span className="text-sm font-medium">Scroll</span>
            <ArrowDown className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  )
}

export default HomeSection