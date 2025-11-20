"use client";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 flex items-center justify-center">
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl mb-8"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f7f3e3",
            fontWeight: 700,
            textShadow: "0 0 30px rgba(168, 118, 62, 0.3)",
          }}
        >
          Entrance
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-xl mb-12"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            color: "#ecf0f1",
            lineHeight: "1.8",
          }}
        >
          Let's start together!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8"
        >
          {[
            {
              Icon: Mail,
              href: "mailto:tamaki.akita.jp@gmail.com",
              label: "Email",
            },
            { Icon: Github, href: "https://github.com/tmk-a", label: "GitHub" },
            {
              Icon: Linkedin,
              href: "www.linkedin.com/in/tamaki-akita",
              label: "LinkedIn",
            },
          ].map(({ Icon, href, label }, i) => (
            <motion.a
              key={label}
              href={href}
              className="relative"
              aria-label={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.2,
                rotate: [0, -10, 10, -10, 0],
                transition: { duration: 0.5 },
              }}
            >
              <motion.div
                className="absolute inset-0 rounded-full"
                initial={{ scale: 0, opacity: 0 }}
                whileHover={{
                  scale: 2,
                  opacity: [0, 0.5, 0],
                  transition: { duration: 0.6 },
                }}
                style={{
                  background:
                    "radial-gradient(circle, rgba(168, 118, 62, 0.5) 0%, transparent 70%)",
                }}
              />
              <Icon size={40} color="#a8763e" className="relative z-10" />
            </motion.a>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          viewport={{ once: true }}
          className="text-sm mt-16"
          style={{
            fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
            color: "#a8763e",
            opacity: 0.7,
          }}
        >
          © 2025 Tamaki Akita. All rights reserved.
        </motion.p>
      </div>
    </section>
  );
};

export default ContactSection;
