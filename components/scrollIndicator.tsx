"use client";

import React, { useEffect } from "react";
import { createStyles } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useWindowScroll } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  pill: {
    alignSelf: "center",
    borderRadius: "2rem",
    aspectRatio: "1/1.75",
    border: `0.15rem solid ${theme.colors.gray[8]}`,
    padding: "0.2rem",
    width: "2rem",
    cursor: "pointer",
  },
  circle: {
    borderRadius: "50%",
    aspectRatio: "1/1",
    backgroundColor: theme.colors.gray[8],
  },
}));

export default function ScrollIndicator() {
  const animation = useAnimation();
  const { classes } = useStyles();
  const [scroll, scrollTo] = useWindowScroll();

  useEffect(() => {
    animation.set({ y: 0 });
    //@ts-expect-error
    animation.start((i) => ({
      y: "100%",
      transition: {
        delay: 1,
        duration: 1,
        repeat: "Infinity",
        repeatType: "reverse",
      },
    }));
  }, []);

  return (
    <div className={classes.pill} onClick={() => scrollTo({ y: 560 })}>
      <motion.div animate={animation} className={classes.circle} />
    </div>
  );
}
