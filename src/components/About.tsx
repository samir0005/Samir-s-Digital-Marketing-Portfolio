import { motion } from 'motion/react';
import { GraduationCap, Award, Compass, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 relative z-10 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-left text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-chrome">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent md:mx-0 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="prose prose-lg prose-invert max-w-none text-gray-300">
              <p className="text-2xl font-light text-white mb-6">
                Hi, I'm <span className="text-gradient-accent font-medium">Samir.</span>
              </p>
              <p className="mb-6 leading-relaxed">
                I have a strong interest in the ever-evolving world of digital marketing and enjoy learning about new tools, strategies, and technologies.
              </p>
              <p className="mb-8 leading-relaxed">
                I believe in maintaining professionalism, staying curious, and continuously improving my knowledge to adapt to industry changes. I blend creativity with data-driven decision-making to build impactful experiences that connect with audiences and fuel business growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="glass-card p-6 border-l-4 border-l-purple-500 border-t-0 border-r-0 border-b-0 rounded-l-none">
                  <Compass className="text-purple-400 mb-3" size={28} />
                  <h4 className="font-semibold text-white mb-1">Constant Learner</h4>
                  <p className="text-sm text-gray-400">Always adapting to new tech.</p>
                </div>
                <div className="glass-card p-6 border-l-4 border-l-orange-500 border-t-0 border-r-0 border-b-0 rounded-l-none">
                  <TrendingUp className="text-orange-400 mb-3" size={28} />
                  <h4 className="font-semibold text-white mb-1">Growth Driven</h4>
                  <p className="text-sm text-gray-400">Focused on performance metrics.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Education Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-accent rounded-[2rem] blur-xl opacity-20"></div>
            <div className="relative glass-card p-8 md:p-12 overflow-hidden group hover:border-white/20 transition-colors">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-bl-full -z-10 group-hover:scale-110 transition-transform duration-500"></div>
              
              <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-white/5 border border-white/10 relative">
                <GraduationCap size={32} className="text-purple-400" />
              </div>

              <div className="flex items-center gap-2 text-orange-400 font-medium tracking-wide text-sm mb-3 uppercase">
                <Award size={16} />
                <span>Certification</span>
              </div>

              <h3 className="text-2xl font-semibold text-white mb-2 leading-tight">
                Advanced Digital Marketing
              </h3>
              
              <p className="text-xl text-gray-300 font-light mb-8">
                Delhi Institute of Digital Marketing (DIDM)
              </p>

              <div className="h-px w-full bg-white/10 mb-6"></div>

              <p className="text-sm text-gray-400 leading-relaxed">
                Completed an intensive training program covering comprehensive digital marketing strategies, campaign management, and modern digital ecosystems.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
