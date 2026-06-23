import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowRight, MapPin } from 'lucide-react';

export default function Hero() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["25deg", "-25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-25deg", "25deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden px-6 lg:px-16">
      {/* Background Particles/Glow */}
      <div className="absolute top-[-200px] right-[-100px] w-[500px] h-[500px] bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-[-100px] left-[-100px] w-[600px] h-[600px] bg-orange-900/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
        
        {/* Labels & Headlines */}
        <div className="md:col-span-7 flex flex-col items-center md:items-start gap-6 text-center md:text-left order-2 md:order-1">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></span>
            <span className="text-[10px] uppercase tracking-[0.2em] font-semibold text-gray-400">Digital Marketing Executive</span>
          </motion.div>

          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[0.9]"
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-gray-100 to-gray-500 mb-2 md:mb-4">SAMIR</span>
            <span className="text-3xl md:text-4xl block mt-4 font-bold bg-gradient-to-r from-purple-500 via-fuchsia-500 to-orange-500 text-transparent bg-clip-text leading-tight">
              Creating Digital Experiences That Drive Growth
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-400 text-lg leading-relaxed max-w-xl mx-auto md:mx-0"
          >
            Digital Marketing Executive specializing in Performance Marketing, Prompt Engineering, Website Design, and AI-powered digital solutions.
          </motion.p>

          {/* Buttons & Location */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center gap-4 mt-4"
          >
            <a
              href="#contact"
              className="group px-8 py-3.5 rounded-xl bg-white text-black font-bold flex items-center gap-2 hover:bg-gray-200 transition-colors"
            >
              Let's Talk
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#projects"
              className="px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 text-white font-bold hover:bg-white/10 transition-colors"
            >
              View Projects
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center gap-2 text-sm text-gray-500 mt-4 mx-auto md:mx-0"
          >
            <MapPin size={16} />
            <span>New Delhi, India</span>
          </motion.div>
        </div>

        {/* Avatar */}
        <div className="md:col-span-5 flex justify-center relative order-1 md:order-2 perspective-[1000px]">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[300px] h-[300px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[550px]"
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <div 
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/30 via-pink-500/30 to-orange-500/30 blur-2xl"
              style={{ transform: "translateZ(-50px)" }}
            ></div>
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative z-10 w-full h-full rounded-full border border-white/20 p-4 bg-white/5 backdrop-blur-sm overflow-hidden"
              style={{ transform: "translateZ(50px)", transformStyle: "preserve-3d" }}
            >
              <div 
                className="w-full h-full rounded-full bg-neutral-800 flex items-center justify-center overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
                style={{ transform: "translateZ(20px)" }}
              >
                <img 
                  src="https://i.ibb.co/7JKPRPnf/A-high-quality-professional-3-D-animated-202606230345.jpg" 
                  alt="Samir" 
                  className="w-full h-full object-cover object-[center_15%] scale-[1.02] drop-shadow-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Samir&background=random&size=256`;
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
