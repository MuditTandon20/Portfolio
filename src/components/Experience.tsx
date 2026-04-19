import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary"><Briefcase className="w-8 h-8" /></span>
            Experience
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative pl-8 md:pl-0"
          >
            {/* Timeline line */}
            <div className="hidden md:block absolute left-[8.5rem] top-2 bottom-0 w-px bg-border" />
            
            <div className="relative flex flex-col md:flex-row gap-8 mb-8">
              {/* Desktop Date */}
              <div className="hidden md:block w-32 pt-1 text-right text-sm text-muted-foreground font-mono">
                2024 – Present
              </div>
              
              {/* Timeline Dot */}
              <div className="absolute left-[-2.3rem] top-1.5 md:left-[8.2rem] w-3 h-3 rounded-full bg-primary ring-4 ring-background" />

              <div className="flex-1 bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                {/* Mobile Date */}
                <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono mb-2 md:hidden">
                  <Calendar className="w-4 h-4" />
                  2024 – Present
                </div>

                <h3 className="text-xl font-bold mb-1 text-foreground">Self-directed ML & Python Projects</h3>
                <p className="text-primary font-medium mb-4">Independent Developer</p>
                
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Executed end-to-end data pipelines involving data cleaning, preprocessing, and exploratory data analysis.</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Designed and trained various machine learning models utilizing scikit-learn algorithms.</span>
                  </li>
                  <li className="flex gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 flex-shrink-0" />
                    <span>Applied rigorous evaluation techniques to assess model performance and optimize hyperparameters.</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
