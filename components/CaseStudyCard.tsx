"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface CaseStudyCardProps {
  title: string;
  client: string;
  tags: string[];
  problem: string;
  solution: string;
  results: string;
  index: number;
}

export default function CaseStudyCard({
  title,
  client,
  tags,
  problem,
  solution,
  results,
  index,
}: CaseStudyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
    >
      <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 group">
        <CardContent className="p-8">
          <div className="mb-4 flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-semibold mb-1 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{client}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-6">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {solution}
              </p>
            </div>

            <div>
              <h4 className="text-sm font-semibold text-primary mb-2">Results</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {results}
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
