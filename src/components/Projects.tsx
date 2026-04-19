import { motion } from "framer-motion";
import { FolderGit2, Github, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "House Price Prediction",
    description: "Built a machine learning model to predict house prices based on various features. Implemented comprehensive data preprocessing and compared multiple regression models.",
    tags: ["Python", "Scikit-learn", "Pandas", "Regression"],
    metrics: "RMSE & R² Evaluation"
  },
  {
    title: "Student Performance Analysis",
    description: "Conducted exploratory data analysis to uncover factors affecting student performance. Created detailed visualizations and correlation matrices.",
    tags: ["Python", "Pandas", "Matplotlib", "EDA"],
    metrics: "Data Visualization"
  },
  {
    title: "Spam Email Detection",
    description: "Developed an NLP pipeline to classify emails as spam or ham. Applied text preprocessing, feature extraction, and trained probabilistic classifiers.",
    tags: ["Python", "TF-IDF", "Naive Bayes", "Logistic Regression"],
    metrics: "Classification Accuracy"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary"><FolderGit2 className="w-8 h-8" /></span>
            Featured Projects
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300 border-border/50 hover:border-primary/50 hover:shadow-lg">
                <CardHeader>
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    {/* Placeholder action buttons */}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" className="h-8 w-8 text-muted-foreground hover:text-primary">
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-primary/80 font-medium text-xs mt-1 uppercase tracking-wider">
                    Key Metric: {project.metrics}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2 pt-4 border-t w-full">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-muted-foreground bg-muted px-2 py-1 rounded-md">
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
