"use client";

import React from "react";
import {
  Footer as F,
  Title,
  createStyles,
  Stack,
  List,
  Anchor,
  ThemeIcon,
  Text,
  Group,
} from "@mantine/core";
import { BrandFacebook, BrandInstagram, Mail } from "tabler-icons-react";
import { useMediaQuery } from "@mantine/hooks";

const useStyles = createStyles((theme) => ({
  footer: {
    backgroundColor: theme.colors.gray[8],
    padding: " 2rem",
    [theme.fn.largerThan("sm")]: {
      padding: "2rem 6rem",
    },
  },
  text: {
    textAlign: "center",
    color: theme.colors.gray[1],
    [theme.fn.largerThan("sm")]: {
      textAlign: "left",
    },
  },
  icon: {
    color: theme.colors.gray[0],
    background: "none",
  },
}));

export default function Footer() {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width:830px)", false);
  return (
    <F height="fit-content" className={classes.footer}>
      <Group
        position="apart"
        align="center"
        direction={breakpoint ? "row" : "column"}
      >
        <Stack justify={breakpoint ? "start" : "center"}>
          <Title className={classes.text}>Elérhetőségeink</Title>
          <List>
            <List.Item
              icon={
                <ThemeIcon className={classes.icon}>
                  <BrandInstagram />
                </ThemeIcon>
              }
              id="twitter"
            >
              <Anchor href="https://www.instagram.com/lampamanhgl400/">
                lampamanhgl400
              </Anchor>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon className={classes.icon}>
                  <BrandFacebook />
                </ThemeIcon>
              }
              id="facebook"
            >
              <Anchor href="https://www.facebook.com/villamostechnika">
                Villamostechnikai gyűjtemény
              </Anchor>
            </List.Item>
            <List.Item
              icon={
                <ThemeIcon className={classes.icon}>
                  <Mail />
                </ThemeIcon>
              }
              id="email"
            >
              <Anchor href="mailto:villamostechnikaigyujtemeny@gmail.com">
                villamostechnikaigyujtemeny@gmail.com
              </Anchor>
            </List.Item>
          </List>
        </Stack>
        <Stack align="center" justify="center">
          <Text className={classes.text}>
            <strong>Villamostechnikai gyűjtemény</strong> | Minden jog
            fentartva! &copy; {new Date().getUTCFullYear()}
          </Text>
          <Text size="xs" className={classes.text}>
            Készítette{" "}
            <Anchor size="xs" href="https://gergopasztor.com">
              Pásztor Gergő
            </Anchor>
          </Text>
        </Stack>
      </Group>
    </F>
  );
}
