"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  index: number;
}

export default function TestimonialCard({
  quote,
  author,
  role,
  company,
  index,
}: TestimonialCardProps) {
  const initials = author
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="p-6">
          <div className="mb-4">
            <svg
              className="w-8 h-8 text-primary/40"
              fill="currentColor"
              viewBox="0 0 32 32"
            >
              <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm16 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
            </svg>
          </div>
          <p className="text-foreground/90 leading-relaxed mb-6 italic">
            "{quote}"
          </p>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarFallback className="bg-primary/10 text-primary">
                {initials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-semibold text-sm">{author}</p>
              <p className="text-xs text-muted-foreground">
                {role} at {company}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
