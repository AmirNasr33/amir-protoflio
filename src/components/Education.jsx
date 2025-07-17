import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export const Education = () => {
  const educationData = [
    {
      title: "Bachelor's Degree in Computer Science and Information Technology",
      institution: "Egyptian E-Learning University",
      dates: "09/2021 – 06/2025",
      location: "Cairo, Egypt",
      major: "Information Technology",
      grade: "Very Good (B+ Equivalent)",
      relevantCourses: "Web Development, Database Management, Network Security, Software Engineering, Data Structures and Algorithms",
      finalProject: "Developed an e-commerce back-end system using Node.js and MongoDB, with a focus on performance optimization and secure payment integration and AI model from models lab."
    },
  ];

  return (
    <motion.section
      id="education"
      className="py-20 bg-background"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            My <span className="text-primary">Education</span>
          </h2>
          <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
            My educational journey and academic achievements
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative bg-card/50 backdrop-blur-sm border border-border/50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-primary to-primary/30 rounded-l-2xl"></div>

              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <GraduationCap className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {edu.title}
                    </h3>
                  </div>

                  <div className="flex items-center space-x-2 mb-4">
                    <MapPin className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-medium text-foreground/90">
                      {edu.institution}
                    </h4>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex items-center space-x-2 text-foreground/70">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">
                        {edu.dates}
                      </span>
                    </div>
                    
                    <div className="text-foreground/70">
                      <p className="mb-2"><strong>Major:</strong> {edu.major}</p>
                      <p className="mb-2"><strong>Grade:</strong> {edu.grade}</p>
                      <p className="mb-2"><strong>Relevant Courses:</strong> {edu.relevantCourses}</p>
                      <p><strong>Final Year Project:</strong> {edu.finalProject}</p>
                    </div>
                  </div>
                </div>

                {/* Grade badge */}
                <div className="lg:ml-6">
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold border transition-colors duration-200g-transparent text-green-500order-green-300">
                    <GraduationCap className="w-4 h-4 mr-2" />
                    {edu.grade}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};
