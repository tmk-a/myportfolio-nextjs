"use client";
import { motion } from "framer-motion";
import { SkillItem } from "@/constants/data";

interface SkillsSectionProps {
  skills: SkillItem[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 flex items-center relative overflow-hidden">
      {/* Background with stronger texture */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(43, 33, 24, 0.95) 0%, rgba(43, 33, 24, 0.98) 100%)",
        }}
      >
        {/* Grid pattern - more visible */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(168, 118, 62, 0.15) 49px, rgba(168, 118, 62, 0.15) 50px),
              repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(168, 118, 62, 0.15) 49px, rgba(168, 118, 62, 0.15) 50px)
            `,
          }}
        />
        {/* Vignette effect */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(circle at center, transparent 0%, rgba(0, 0, 0, 0.4) 100%)",
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl mb-8 text-center font-bold"
          style={{
            textShadow: "0 0 30px rgba(168, 118, 62, 0.3)",
          }}
        >
          魔法の道具
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-xl text-center mb-16"
        >
          使いこなせる呪文と道具たち
        </motion.p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0, rotateY: -180 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 200,
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative flex flex-col items-center justify-center p-8 cursor-pointer group"
              style={{
                background: "rgba(247, 243, 227, 0.05)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
                border: "1px solid rgba(168, 118, 62, 0.2)",
                borderRadius: "16px",
                boxShadow:
                  "0 8px 32px 0 rgba(0, 0, 0, 0.37), inset 0 1px 1px rgba(247, 243, 227, 0.1)",
              }}
            >
              {/* Pin at the top (like specimen) */}
              <div
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-2 h-2 rounded-full bg-linear-to-b from-gray-400 to-gray-600"
                style={{
                  boxShadow:
                    "0 2px 4px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.3)",
                }}
              >
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-linear-to-b from-gray-400 to-transparent"></div>
              </div>

              {/* Spotlight effect on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  background:
                    "radial-gradient(circle at 50% 30%, rgba(255, 240, 200, 0.3) 0%, transparent 60%)",
                  mixBlendMode: "overlay",
                }}
              />

              {/* Light beam from top on hover */}
              <motion.div
                className="absolute top-0 left-1/2 transform -translate-x-1/2 pointer-events-none h-full w-4/5 blur-2xl"
                initial={{ opacity: 0, scaleY: 0 }}
                whileHover={{ opacity: 1, scaleY: 1 }}
                transition={{ duration: 0.4 }}
                style={{
                  background:
                    "linear-gradient(to bottom, rgba(255, 240, 180, 0.4) 0%, rgba(255, 240, 180, 0.1) 50%, transparent 100%)",
                  transformOrigin: "top",
                }}
              />

              {/* Enhanced border glow on hover */}
              <motion.div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                style={{
                  border: "1px solid rgba(168, 118, 62, 0.6)",
                  boxShadow:
                    "0 0 20px rgba(168, 118, 62, 0.4), inset 0 0 20px rgba(168, 118, 62, 0.1)",
                }}
              />

              <motion.div
                className="text-6xl mb-4 relative z-10"
                whileHover={{ scale: 1.15, y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <skill.icon {...skill.iconProps} />
              </motion.div>

              {/* Label plate */}
              <div
                className="relative z-10 px-4 py-2 rounded-md"
                style={{
                  background: "rgba(43, 33, 24, 0.6)",
                  border: "1px solid rgba(168, 118, 62, 0.3)",
                }}
              >
                <p className="text-base transition-colors duration-300 group-hover:text-amber-200">
                  {skill.name}
                </p>
              </div>

              {/* Scientific notation lines (specimen detail) */}
              <div className="absolute bottom-2 left-2 right-2 h-px bg-linear-to-r from-transparent via-amber-800 to-transparent opacity-30"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
