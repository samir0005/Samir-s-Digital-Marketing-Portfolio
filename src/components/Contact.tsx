import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const contactMethods = [
    {
      id: 'email',
      icon: Mail,
      label: 'Email',
      value: 'mesamirhindu@gmail.com',
      action: () => handleCopy('mesamirhindu@gmail.com', 'email')
    },
    {
      id: 'phone',
      icon: Phone,
      label: 'Phone',
      value: '+91 9911489209',
      action: () => handleCopy('+91 9911489209', 'phone')
    },
    {
      id: 'location',
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      action: null // Location is not strictly copied, but can be
    }
  ];

  return (
    <section id="contact" className="py-24 relative z-10 px-6 bg-[#0a0a0a]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            <span className="text-chrome">Get In Touch</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto pb-4">
            Interested in working together or discussing a project? Feel free to reach out. I'm always open to discussing new opportunities and collaborations.
          </p>
          <div className="w-20 h-1 bg-gradient-accent mx-auto rounded-full mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactMethods.map((method, i) => {
            const Icon = method.icon;
            const isCopied = copiedField === method.id;
            
            return (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card p-8 flex flex-col items-center text-center relative group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none"></div>
                
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 text-white group-hover:text-purple-400 transition-colors duration-300">
                  <Icon size={28} />
                </div>
                
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-2">
                  {method.label}
                </h3>
                
                <p className="text-lg font-medium text-gray-200 mb-6 truncate max-w-full">
                  {method.value}
                </p>

                {method.action && (
                  <button
                    onClick={method.action}
                    className="mt-auto flex items-center justify-center gap-2 px-6 py-2.5 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all text-sm font-medium text-gray-300 absolute bottom-6 w-[calc(100%-4rem)] translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    {isCopied ? (
                      <>
                        <Check size={16} className="text-green-400" />
                        <span className="text-green-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={16} />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                )}
                
                {/* Spacer to maintain card height for absolute button on hover */}
                {method.action && <div className="h-10"></div>}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
