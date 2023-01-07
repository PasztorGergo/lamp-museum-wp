"use client";
import {
  Title,
  Blockquote,
  Group,
  createStyles,
  Image,
  Box,
  Stack,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { useAnimation, motion } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

const useStyles = createStyles((theme) => ({
  imageOne: {
    height: "auto",
    width: "80%",
  },
  section: {
    minHeight: "100vh",
    marginTop: "8rem",
    padding: "2rem",
    [theme.fn.largerThan("sm")]: {
      marginBottom: "2rem",
      padding: "0 6rem",
      marginTop: "12rem",
    },
  },
  title: {
    marginBottom: "6rem",
    [theme.fn.largerThan("sm")]: {
      marginBottom: "2rem",
    },
  },
  imageContainer: {
    position: "absolute",
    width: "100%",
    height: "auto",
  },
  quote: {
    width: "100%",
    [theme.fn.largerThan("md")]: {
      width: "50%",
    },
  },
  imgHolder: {
    margin: "10% 0 30% 0",
    width: "80%",
    position: "relative",
    height: "30vh",
    [theme.fn.largerThan("sm")]: {
      width: "40%",
      height: "100%",
    },
  },
}));

export default function About({}: Props) {
  const [ref, inView] = useInView();
  const controls = useAnimation();
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 790px)", false);
  const imgbreak = useMediaQuery("(min-width: 994px)", false);

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        translateY: 0,
        opacity: 1,
        transition: { delay: i * 0.3, duration: 0.7 },
      }));
    }
  }, [inView, controls]);

  return (
    <section className={classes.section}>
      <Title sx={{ color: theme.colors.gray[8] }} className={classes.title}>
        Hadd mutatkozzak be!
      </Title>
      <Group
        position="center"
        spacing="xl"
        direction={breakpoint ? "row" : "column"}
      >
        <Box className={classes.imgHolder}>
          <motion.div
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, translateY: "60%" }}
            custom={1}
            className={classes.imageContainer}
            style={{ zIndex: 4 }}
          >
            <Image
              src="/images/measure.jpg"
              className={classes.imageOne}
              alt="Fénykép Csíkász Leventéről"
              radius="sm"
              sx={{
                border: "4px solid white",
                borderRadius: "4px",
              }}
            />
          </motion.div>
          <motion.div
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, translateY: "60%" }}
            className={classes.imageContainer}
            custom={2}
            style={{ zIndex: 11 }}
          >
            <Image
              src="/images/lamp.jpg"
              alt="Lámpa"
              radius="sm"
              sx={{
                border: "4px solid white",
                position: "absolute",
                width: imgbreak ? "30%" : "40%",
                height: "auto",
                bottom: "-7rem",
                right: "0",
                borderRadius: "4px",
              }}
            />
          </motion.div>
          <motion.div
            animate={controls}
            ref={ref}
            initial={{ opacity: 0, translateY: "60%" }}
            className={classes.imageContainer}
            custom={3}
          >
            <Image
              src="/images/electronics.JPG"
              alt="Villany szerelés"
              radius="sm"
              sx={{
                border: "4px solid white",
                position: "absolute",
                width: imgbreak ? "60%" : "80%",
                height: "auto",
                top: "-7rem",
                left: "-3rem",
                borderRadius: "4px",
              }}
            />
          </motion.div>
        </Box>
        <Stack justify="center" align="center" className={classes.quote}>
          <Blockquote
            cite="- Csíkász Levente"
            sx={{ color: theme.colors.gray[8] }}
          >
            Célom a Magyar ipar világítástechnika, és villamos ipar megmentése,
            megmutatása az utókornak. Szeretném az összes, az országban
            legyártott, illetve a keleti blokkban forgalomba hozott összes
            közvilágítási lámpatestet összegyűjteni, és bemutatni a
            nagyközönségnek.
          </Blockquote>
          <Button
            variant="outline"
            color="orange"
            sx={{ maxWidth: "fit-content" }}
            component="a"
            href="/tortenetunk"
          >
            Történetünk
          </Button>
        </Stack>
      </Group>
    </section>
  );
}
