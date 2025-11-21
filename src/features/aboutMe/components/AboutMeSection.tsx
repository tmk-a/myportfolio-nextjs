"use client";
import { motion } from "framer-motion";

const AboutMeSection = () => {
  return (
    <section className="min-h-screen py-20 px-4 md:px-8 leather-texture">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-5xl md:text-6xl mb-16 text-center"
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            color: "#f7f3e3",
            fontWeight: 700,
            textShadow: "0 0 30px rgba(168, 118, 62, 0.3)",
          }}
        >
          Archive
        </motion.h2>

        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-50px" }}
            className="paper-texture p-8 rounded-lg"
            style={{
              background: "rgba(43, 33, 24, 0.5)",
              border: "1px solid rgba(168, 118, 62, 0.2)",
            }}
          >
            <h3
              className="text-3xl mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                color: "#a8763e",
              }}
            >
              About Me
            </h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-xl leading-relaxed"
              style={{
                fontFamily: "'Cormorant Garamond', 'Times New Roman', serif",
                color: "#ecf0f1",
                lineHeight: "1.8",
              }}
            >
              Having grown up surrounded by ancient stories, I believe in the
              power of design and words. My mission is to weave a story into
              each project and create a memorable experience for people. I
              strive to create designs that will stand the test of time,
              striving for a harmony between beauty and practicality.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMeSection;
