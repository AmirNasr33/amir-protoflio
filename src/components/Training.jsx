import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { motion } from "framer-motion";

const trainingData = [
  {
    title: 'IT Internship',
    company: 'PMS Company',
    location: 'Cairo, Egypt',
    period: '2022 - 2023',
    description: [
      'Gained hands-on experience in network troubleshooting, hardware maintenance, and software installation.',
      'Assisted in configuring and maintaining servers, routers, and databases.',
      'Participated in team projects focused on cybersecurity, IT infrastructure upgrades, and system optimization.',
      'Documented technical issues and resolutions to enhance support efficiency.',
      'Developed a foundational understanding of Active Directory and other enterprise tools.'
    ]
  }
];

export const Training = () => {
  return (
    <motion.section
      id="training"
      className="py-20 bg-secondary/20"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Training <span className="text-primary">Experience</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My professional training and internship experiences that have shaped my technical skills.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {trainingData.map((training, idx) => (
            <div
              key={idx}
              className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-8 mb-8 shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Briefcase className="w-5 h-5 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">{training.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-foreground/70">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{training.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{training.period}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                {training.description.map((item, itemIdx) => (
                  <div key={itemIdx} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-foreground/80 leading-relaxed">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">1</div>
            <div className="text-foreground/70 font-medium">Internship Experience</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <div className="text-foreground/70 font-medium">Years of Training</div>
          </div>
          <div className="text-center p-6 bg-card/30 rounded-lg border border-border/30">
            <div className="text-3xl font-bold text-primary mb-2">5+</div>
            <div className="text-foreground/70 font-medium">Key Skills Developed</div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
