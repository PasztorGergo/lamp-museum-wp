"use client";

import React from "react";
import {
  createStyles,
  Group,
  Paper,
  Stack,
  Text,
  Title,
  Divider,
  Image,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import ScrollIndicator from "./scrollIndicator";

const useStyles = createStyles((theme) => ({
  header: {
    height: "90vh",
    marginTop: "2rem",
    background: `${theme.colors.orange[0]}6f`,
    width: "100%",
    position: "relative",
    display: "grid",
    backgroundImage: "url('/images/lampSaving-removebg-preview.png')",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPositionX: "30%",
    backgroundBlendMode: "screen",
    backgroundPositionY: "100%",
    [theme.fn.largerThan("sm")]: {
      backgroundSize: "contain, cover",
      backgroundPositionY: 0,
      marginTop: "6rem",
      backgroundPositionX: "100%",
    },
  },
  stack: {
    height: "100%",
    [theme.fn.largerThan("sm")]: {
      width: "40%",
    },
  },
  group: {
    height: "100%",
  },
  imageContainer: {
    height: "100%",
  },
  performance: {
    position: "absolute",
    top: "90%",
    width: "100%",
    margin: "auto",
    zIndex: 10,
    placeSelf: "center",
    border: "none",
    borderRadius: "0",
    [theme.fn.largerThan("md")]: {
      width: "60%",
      border: "1px solid #e9ecef",
      borderRadius: "4px",
    },
  },
  text: {
    color: theme.colors.gray[8],
    textAlign: "center",
  },
}));

export default function Hero() {
  const { classes } = useStyles();
  const breakPoint = useMediaQuery("(min-width: 790px)", false);

  return (
    <header className={classes.header}>
      <Group px={breakPoint ? "6em" : "xl"} className={classes.group}>
        <Stack className={classes.stack} justify="center">
          <Title className={classes.text} order={1}>
            A múlt fényeinek nyomában
          </Title>
          <Text
            className={classes.text}
            size="lg"
            color="gray"
            sx={{ marginBottom: "8rem" }}
          >
            Megmentjük megőrizzük, és megmutatjuk az utókornak a történelem
            fényforrásait amelyeket ránk hagytak őseink.
          </Text>
          <Stack justify="center" sx={{ textAlign: "center" }}>
            <Text className={classes.text}>Tudjon meg többet</Text>
            <ScrollIndicator />
          </Stack>
        </Stack>
      </Group>
      <Paper p="md" withBorder className={classes.performance}>
        <Group position="center" grow>
          <Stack justify="center" align="center">
            <Title className={classes.text} order={5}>
              Gyűjteményünk
            </Title>
            <Text className={classes.text}>
              +10000 ipari és lakossági fényforrás
            </Text>
            {breakPoint && (
              <>
                <Text className={classes.text}>
                  +700 közvilágítási-, ipari lámpatest
                </Text>
                <Text className={classes.text}>+600 retro utcaképi elem</Text>
              </>
            )}
          </Stack>
          <Divider sx={{ height: "100%" }} orientation="vertical" />
          <Stack justify="center" align="center">
            <Title className={classes.text} order={5}>
              Városok
            </Title>
            <Text className={classes.text}>+50 helyszín</Text>
          </Stack>
        </Group>
      </Paper>
    </header>
  );
}
