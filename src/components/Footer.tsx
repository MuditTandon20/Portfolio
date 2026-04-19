import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background py-12">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h3 className="font-bold text-xl tracking-tight mb-1">Mudit Tandon</h3>
          <p className="text-sm text-muted-foreground">Building intelligent systems & electric mobility innovation.</p>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="rounded-full hover:text-primary hover:bg-primary/10" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:text-primary hover:bg-primary/10" asChild>
            <a href="#" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-5 h-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" className="rounded-full hover:text-primary hover:bg-primary/10" asChild>
            <a href="mailto:mudittandon202005@gmail.com" aria-label="Email">
              <Mail className="w-5 h-5" />
            </a>
          </Button>
        </div>
      </div>
      
      <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center gap-4">
        <p>Copyright © {currentYear} Mudit Tandon. All rights reserved.</p>
        <p>Designed with precision.</p>
      </div>
    </footer>
  );
}
