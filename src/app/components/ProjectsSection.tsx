import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";
import house1 from "../../assets/house-1.jpg";
import house2 from "../../assets/house-2.jpg";
import house3 from "../../assets/house-3.jpg";
import house4 from "../../assets/house-4.jpg";
import house5 from "../../assets/house-5.jpg";
import house6 from "../../assets/house-6.jpg";

const availableProjects = [
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "120 м²",
    bedrooms: 3,
    image: house1,
    status: "sold" as const,
  },
  {
    title: "Двухэтажный дом",
    location: "Татарстан",
    area: "220 м²",
    bedrooms: 4,
    image: house2,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "130 м²",
    bedrooms: 3,
    image: house3,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "115 м²",
    bedrooms: 3,
    image: house4,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "125 м²",
    bedrooms: 3,
    image: house5,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "110 м²",
    bedrooms: 3,
    image: house6,
    status: "sold" as const,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            Наши работы
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl">
            Реализованные проекты строительной компании Арди
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {availableProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
