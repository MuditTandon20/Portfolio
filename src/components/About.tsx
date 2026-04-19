import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary"><BookOpen className="w-8 h-8" /></span>
            About Me
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I am an Electrical Engineering student with a deep fascination for the intersection of hardware and intelligence. My journey spans from understanding core power electronics to building machine learning models that can make sense of complex data.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe the future lies in intelligent hardware — electric vehicles optimized by smart algorithms, and energy systems driven by data. I'm actively building my skills to contribute to this exciting frontier.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Education</h3>
                  <p className="text-foreground">B.E. in Electrical Engineering</p>
                  <p className="text-muted-foreground text-sm">SGSITS, Indore (2023–2027)</p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-primary/20">
              <CardContent className="p-6 flex gap-4">
                <div className="mt-1">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Zap className="w-5 h-5" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Key Focus Areas</h3>
                  <p className="text-muted-foreground">
                    <span className="text-foreground font-medium">Machine Learning</span>, Power Electronics, <span className="text-foreground font-medium">Electric Vehicles</span>, Embedded Systems, and Data Analysis.
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
