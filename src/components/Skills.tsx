import { motion } from 'motion/react';
import { 
  MonitorSmartphone, 
  Search, 
  Layout, 
  Palette, 
  Video, 
  TerminalSquare, 
  ShoppingCart 
} from 'lucide-react';

const skills = [
  {
    name: 'Meta Advertising',
    icon: MonitorSmartphone,
    color: 'from-blue-500 to-indigo-500',
    delay: 0.1
  },
  {
    name: 'Google Advertising',
    icon: Search,
    color: 'from-green-500 to-emerald-500',
    delay: 0.2
  },
  {
    name: 'Website Design & Development',
    icon: Layout,
    color: 'from-purple-500 to-fuchsia-500',
    delay: 0.3
  },
  {
    name: 'Graphic Design',
    icon: Palette,
    color: 'from-pink-500 to-rose-500',
    delay: 0.4
  },
  {
    name: 'AI Video Production',
    icon: Video,
    color: 'from-amber-500 to-orange-500',
    delay: 0.5
  },
  {
    name: 'Prompt Engineering',
    icon: TerminalSquare,
    color: 'from-cyan-500 to-blue-500',
    delay: 0.6
  },
  {
    name: 'Shopify Store Management',
    icon: ShoppingCart,
    color: 'from-emerald-500 to-teal-500',
    delay: 0.7
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10 px-6 bg-[#111111]/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:text-left text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-chrome">Skills & Expertise</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent md:mx-0 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: skill.delay }}
                className="group relative h-full"
              >
                <div className={`absolute -inset-0.5 bg-gradient-to-br ${skill.color} rounded-2xl blur opacity-0 group-hover:opacity-30 transition duration-500`}></div>
                <div className="relative h-full glass-card p-8 flex flex-col items-start gap-6 hover:-translate-y-2 transition-all duration-300">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${skill.color} bg-opacity-10 shadow-inner inline-flex border border-white/5`}>
                    <Icon className="text-white drop-shadow-md" size={32} />
                  </div>
                  <h3 className="text-xl font-medium text-gray-100 leading-snug group-hover:text-white transition-colors">
                    {skill.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
