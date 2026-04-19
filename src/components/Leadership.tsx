import { motion } from "framer-motion";
import { Users, BatteryCharging, Flag, Activity } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const activities = [
  {
    title: "GS Motorsports EV Team",
    role: "Core Team Member",
    icon: BatteryCharging,
    description: "Contributed to the engineering and development of the college's electric vehicle. Specifically focused on wiring harness design, Battery Management System (BMS) integration, and motor controller setup."
  },
  {
    title: "EV Fast Charging Project",
    role: "Team Leader",
    icon: ZapIcon,
    description: "Led a research initiative analyzing power losses and thermal challenges in electric vehicle fast charging infrastructures using MATLAB Simulink simulations."
  },
  {
    title: "Football Team Member",
    role: "Athlete",
    icon: Flag,
    description: "Represented the college in multiple inter-college football tournaments, developing strong teamwork, discipline, and communication skills under pressure."
  }
];

function ZapIcon(props: React.ComponentProps<"svg">) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

export function Leadership() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center gap-3">
            <span className="text-primary"><Users className="w-8 h-8" /></span>
            Leadership & Activities
          </h2>
          <div className="w-20 h-1.5 bg-primary rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <motion.div
              key={activity.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border/50 hover:border-primary/30 transition-colors bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <activity.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{activity.title}</h3>
                  <p className="text-sm font-medium text-primary mb-4">{activity.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {activity.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
