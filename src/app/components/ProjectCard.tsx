import { motion } from "motion/react";
import { MapPin, Ruler, Bed, Shirt, Flame, Bath } from "lucide-react";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  location: string;
  area: string;
  bedrooms: number;
  features?: string[];
  price?: string;
  image: string;
  status: "available" | "sold";
  index: number;
}

export function ProjectCard({ title, location, area, bedrooms, features, price, image, status, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group cursor-pointer"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-4">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.6 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg md:text-2xl font-bold text-gray-900">{title}</h3>
          {price && status === "available" && (
            <div className="text-right">
              <div className="text-2xl font-bold text-gray-900">{price}</div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={16} />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-6 text-gray-600">
          <div className="flex items-center gap-2">
            <Ruler size={16} />
            <span>{area}</span>
          </div>
          <div className="flex items-center gap-2">
            <Bed size={16} />
            <span>{bedrooms} спальни</span>
          </div>
        </div>

        {features && features.length > 0 && (
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            {features.map((f) => {
              const icon = f === "Гардеробная" ? <Shirt size={16} /> : f === "Котельная" ? <Flame size={16} /> : f.includes("санузл") ? <Bath size={16} /> : null;
              return (
                <div key={f} className="flex items-center gap-2">
                  {icon}
                  <span>{f}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </motion.div>
  );
}
