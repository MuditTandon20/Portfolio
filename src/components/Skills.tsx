import { motion } from "framer-motion";
import { Code2, Wrench, Layers } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const skillsData = [
  {
    category: "Programming",
    icon: Code2,
    skills: ["Python", "C", "SQL"]
  },
  {
    category: "Tools & Software",
    icon: Wrench,
    skills: ["MATLAB Simulink", "VS Code", "Git", "PowerWorld", "AutoCAD", "Excel", "Android Studio"]
  },
  {
    category: "Technologies & Libraries",
    icon: Layers,
    skills: ["Pandas", "NumPy", "Matplotlib", "Scikit-learn", "Embedded Systems"]
  }
];

export function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Arsenal</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          {skillsData.map((group, index) => (
            <motion.div key={group.category} variants={itemVariants}>
              <Card className="h-full border-border/50 hover:border-primary/50 transition-colors bg-card hover:shadow-md">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <group.icon className="w-6 h-6" />
                  </div>
                  <CardTitle>{group.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map(skill => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
