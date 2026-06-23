import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'Meta Advertising',
    subtitle: 'Lead Generation & Campaign Management',
    description: 'Created and managed Meta advertising campaigns focused on audience targeting, lead generation, campaign optimization, and improving marketing performance.',
    technologies: ['Meta Ads Manager', 'Facebook Ads', 'Instagram Ads'],
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2948&auto=format&fit=crop',
    highlight: true,
  },
  {
    title: 'Google Advertising',
    subtitle: 'Search & Display Campaigns',
    description: 'Managed Google advertising campaigns focused on traffic generation, lead acquisition, and conversion optimization.',
    technologies: ['Google Ads', 'Search Ads', 'Display Ads'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop',
    highlight: false,
  },
  {
    title: 'Graphic Design',
    subtitle: 'Creative Marketing Assets',
    description: 'Designed marketing creatives, social media graphics, and promotional materials for digital campaigns.',
    technologies: ['Canva', 'nano banana', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2942&auto=format&fit=crop',
    highlight: false,
  },
  {
    title: 'Website Design',
    subtitle: 'Modern Responsive Websites',
    description: 'Designed and developed responsive websites and landing pages focused on user experience and conversion optimization.',
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS'],
    image: 'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=2555&auto=format&fit=crop',
    highlight: false,
  },
  {
    title: 'Shopify Store Management',
    subtitle: 'E-Commerce Store Setup & Management',
    description: 'Managed Shopify stores including product setup, store customization, and customer-focused improvements.',
    technologies: ['Shopify', 'E-Commerce'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2787&auto=format&fit=crop',
    highlight: false,
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 relative z-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 sticky top-24 md:static z-20 bg-[#0C0C0C]/80 backdrop-blur-xl md:bg-transparent py-4 md:py-0 md:backdrop-blur-none"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            <span className="text-chrome">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-accent rounded-full"></div>
        </motion.div>

        <div className="w-full relative mt-10 md:mt-0">
          {projects.map((project, index) => (
            <div
              key={index}
              className="sticky transition-all duration-300"
              style={{
                top: `calc(10rem + ${index * 2.5}rem)`,
                marginBottom: index === projects.length - 1 ? '0' : '40vh',
                zIndex: index + 10,
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ margin: "-100px", once: true }}
                transition={{ duration: 0.5 }}
                className="w-full glass-card p-6 md:p-10 lg:p-14 shadow-2xl relative overflow-hidden group border-white/10 border-t border-l bg-[#161616]"
                style={{
                  boxShadow: '0 -20px 40px -20px rgba(0,0,0,0.8)',
                }}
              >
                {/* Decorative Background gradient for highlighted item */}
                {project.highlight && (
                  <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-accent opacity-20 blur-3xl rounded-full pointer-events-none"></div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 relative z-10">
                  {/* Left Column */}
                  <div className="col-span-1 md:col-span-8 flex flex-col justify-center">
                    {project.highlight && (
                      <div className="inline-block px-4 py-1.5 rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-400 text-xs font-bold tracking-wider uppercase mb-6 self-start">
                        Featured Project
                      </div>
                    )}
                    
                    <h3 className="text-3xl md:text-5xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-accent transition-all duration-500">
                      {project.title}
                    </h3>
                    <h4 className="text-xl md:text-2xl text-gray-400 font-light mb-6">
                      {project.subtitle}
                    </h4>
                    
                    <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 md:mb-0">
                      {project.technologies.map(tech => (
                        <span key={tech} className="px-4 py-2 border border-white/10 rounded-full text-sm text-gray-300 bg-white/5 backdrop-blur-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (Image block) */}
                  <div className="col-span-1 md:col-span-4 flex items-center justify-center border-t md:border-t-0 md:border-l border-white/10 pt-6 md:pt-0 md:pl-10">
                    <div className="w-full h-48 md:h-full min-h-[200px] rounded-xl overflow-hidden border border-white/10 relative group">
                      <div className="absolute inset-0 bg-gradient-accent opacity-20 group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
