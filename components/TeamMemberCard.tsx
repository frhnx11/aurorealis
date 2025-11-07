"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TeamMemberCardProps {
  name: string;
  role: string;
  bio: string;
  index: number;
}

export default function TeamMemberCard({
  name,
  role,
  bio,
  index,
}: TeamMemberCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300">
        <CardContent className="p-6 text-center">
          <div className="mb-4 flex justify-center">
            <Avatar className="w-20 h-20">
              <AvatarFallback className="bg-primary/10 text-primary text-xl">
                {initials}
              </AvatarFallback>
            </Avatar>
          </div>
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-primary mb-3">{role}</p>
          <p className="text-sm text-muted-foreground leading-relaxed">{bio}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
}
