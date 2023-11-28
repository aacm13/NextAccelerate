'use client'
import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

const Grow = ({
  children,
  width = "fit-content",
  css,
  delay = 0.25,
  position = "relative",
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);
  return (
    <div
      ref={ref}
      className={css}
      style={{ position: position, width, overflow: "hidden" }}
    >
      <motion.div
        variants={{
          hidden: { scale: 0 },
          visible: { scale: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.5, delay: delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Grow;