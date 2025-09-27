import { motion } from "framer-motion";

const Hero = () => {
  // Motion variants for text content animation
  const textVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Motion variants for buttons with delay for stagger effect
  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (delay = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay, duration: 0.6, ease: "easeOut" },
    }),
  };

  // Image animation variant
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  return (
    <section className="pb-9 bg-[#0B3C5D] flex justify-center items-center min-h-screen">
      <div className="flex justify-between items-center w-full max-w-7xl px-6">
        {/* Left Content */}
        <motion.div
          className="max-w-lg flex flex-col justify-between space-y-6 "
          initial="hidden"
          animate="visible"
          variants={textVariants}
        >
          <div className="flex justify-center lg:justify-start space-x-2 items-center">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className="h-5 w-5 text-yellow-400 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.173c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.04 9.393c-.783-.57-.38-1.81.588-1.81h4.172a1 1 0 00.95-.69l1.287-3.966z" />
              </svg>
            ))}
            <span className="text-gray-300 font-medium">
              Trusted by 10,000+ students
            </span>
          </div>

          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
          >
            Master IELTS with{" "}
            <span className="text-yellow-400 block">Confidence</span>
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Join thousands of achievers who boosted their IELTS scores with our
            advanced AI tools, expert coaching, and customized study plans. Your
            success story starts here.
          </motion.p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <motion.button
              className="bg-[var(--primary-text)] text-[#0B3C5D] px-8 py-4 rounded-lg hover:bg-yellow-100 transition transform hover:scale-105 font-semibold flex items-center justify-center space-x-2 shadow-lg"
              initial="hidden"
              animate="visible"
              custom={0.3}
              variants={buttonVariants}
            >
              <span>Start Your Journey</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </motion.button>
            <motion.button
              className="border-2 border-[var(--primary-text)] text-yellow-400 px-8 py-4 rounded-lg hover:bg-yellow-100 hover:text-[#0B3C5D] transition font-semibold"
              initial="hidden"
              animate="visible"
              custom={0.6}
              variants={buttonVariants}
            >
              Watch Demo
            </motion.button>
          </div>
        </motion.div>

        {/* Right Content - Hero Image */}
        <motion.div
          className="max-w-2xl w-full  rounded-b-3xl" // larger max width
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <img
            src="hero2.png"
            alt="IELTS study and success"
            className="rounded-b-3xl w-full h-100 object-cover" // full width, height 24rem (96)
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
