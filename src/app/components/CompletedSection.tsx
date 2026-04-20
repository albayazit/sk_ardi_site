import { ProjectCard } from "./ProjectCard";
import { motion } from "motion/react";
import house1 from "../../assets/house-1.jpg";
import house2 from "../../assets/house-2.jpg";
import house3 from "../../assets/house-3.jpg";
import house4 from "../../assets/house-4.jpg";
import house5 from "../../assets/house-5.jpg";
import house6 from "../../assets/house-6.jpg";

const completedProjects = [
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "90 м²",
    bedrooms: 3,
    features: ["Гардеробная", "Котельная"],
    image: house1,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "100 м²",
    bedrooms: 3,
    features: ["Гардеробная", "Котельная"],
    image: house2,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "90 м²",
    bedrooms: 3,
    features: ["Гардеробная", "Котельная"],
    image: house3,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Удмуртия",
    area: "138 м²",
    bedrooms: 3,
    features: ["Гардеробная", "Котельная"],
    image: house4,
    status: "sold" as const,
  },
  {
    title: "Двухэтажный дом",
    location: "Татарстан",
    area: "160 м²",
    bedrooms: 4,
    features: ["2 санузла"],
    image: house5,
    status: "sold" as const,
  },
  {
    title: "Одноэтажный дом",
    location: "Татарстан",
    area: "130 м²",
    bedrooms: 3,
    features: ["Гардеробная", "Котельная"],
    image: house6,
    status: "sold" as const,
  },
];

export function CompletedSection() {
  return (
    <section id="completed" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4">
            Реализованные проекты
          </h2>
          <p className="text-base md:text-xl text-gray-600 max-w-2xl">
            Портфолио построенных домов
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {completedProjects.map((project, index) => (
            <ProjectCard key={index} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
