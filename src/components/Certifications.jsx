import React from 'react';
import { motion } from "framer-motion";

const certificates = [
  {
    title: 'CCNA Routing & Switching',
    image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752114622/Screenshot_10-7-2025_5301__sj6v8g.jpg',
    description: 'Cisco Certified Network Associate'
  },
  {
    title: 'IT Essential',
    image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752114796/Screenshot_10-7-2025_53255__ejcsvz.jpg',
    description: 'IT Essentials: PC Hardware and Software'
  },
  {
    title: 'CCNAv7: Introduction to Networks',
    image: 'https://res.cloudinary.com/dkxroa9u5/image/upload/v1752115174/Screenshot_10-7-2025_53918__y567lg.jpg',
    description: 'CCNA: Introduction to Networks'
  },
];

export const Certifications = () => {
  return (
    <motion.section
      id="certifications"
      className="py-20 bg-secondary/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Certifications</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            Here are some of the certifications I have earned. Click on an image to view it larger.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {certificates.map((cert, idx) => (
            <div
              key={cert.title}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-2 flex flex-col items-center"
            >
              <a 
                href={cert.image} 
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-56 object-contain rounded-lg mb-4 border border-border/50 hover:border-primary/50 transition-all duration-200"
                />
              </a>
              <h3 className="text-lg font-bold text-foreground mb-2 text-center">{cert.title}</h3>
              {cert.description && (
                <p className="text-muted-foreground text-sm text-center">{cert.description}</p>
              )}
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <div className="text-foreground/70 font-medium">
              Certifications Earned
            </div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">Cisco</div>
            <div className="text-foreground/70 font-medium">
              Network Certifications
            </div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-foreground/70 font-medium">
              Success Rate
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}; 