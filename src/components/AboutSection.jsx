import { Code, Building, Award } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <motion.section
      id="about"
      className="py-24 px-4 relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo Section */}
          <div className="flex justify-center lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 shadow-2xl">
                {/* Placeholder for photo - replace src with your actual photo */}
                <img
                  src="me/mira.jpg"
                  alt="Your Name"
                  className="w-full h-full object-cover"
                />
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/60 rounded-full"></div>
              </div>
              {/* Background decoration */}
              <div className="absolute -z-10 top-4 left-4 w-80 h-80 rounded-2xl bg-gradient-to-br from-primary/10 to-transparent"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-6 lg:order-1">
            <h3 className="text-2xl font-semibold">
              Recent Graduate & Junior IT/Backend Developer
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              I am graduated from Computer Science and Information Technology with a strong interest in IT infrastructure and backend development. My technical skills include network troubleshooting, system administration, and backend programming using technologies such as Node.js, Express, and databases like MySQL and MongoDB. I have gained practical experience through hands-on training at PMS Company and by working on backend solutions for various projects.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              My experience includes an IT internship at PMS Company, participation in the Digital Egypt Pioneers Initiative, and intensive training at the Information Technology Institute (ITI) in Egypt, where I specialized in IT support and backend development. I am eager to leverage my skills in a dynamic environment to deliver robust and efficient IT and backend solutions.
            </p>


          </div>
        </div>

        {/* Skills/Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Web Development</h4>
                <p className="text-muted-foreground">
                  Creating responsive websites with React, HTML, CSS, JavaScript, and Bootstrap + Node.js + MongoDB.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Building className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">Information Technology</h4>
                <p className="text-muted-foreground">
                  IT graduate with expertise in network administration, system configuration, and enterprise software solutions.
                </p>
              </div>
            </div>
          </div>

          <div className="gradient-border p-6 card-hover">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-primary/10">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div className="text-left">
                <h4 className="font-semibold text-lg">IT Training at PMS Company</h4>
                <p className="text-muted-foreground">
                  Completed hands-on IT training at PMS Company, focusing on network troubleshooting, hardware maintenance, system administration, and real-world IT support tasks.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};
