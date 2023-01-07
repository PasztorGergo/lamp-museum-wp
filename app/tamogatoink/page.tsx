"use client";

import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import {
  Box,
  createStyles,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";

const useStyles = createStyles((theme) => ({
  section: {
    placeItems: "center",
    alignContent: "center",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "20px",

    [theme.fn.largerThan("sm")]: {
      padding: "3rem 6rem 3rem",
    },
    [theme.fn.largerThan("xs")]: {
      padding: " 3rem 2rem 3rem",
    },
  },
}));

const Tamogatoink: NextPage = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Támogatóink | Villamostechnikai Gyűjtemény</title>
      </Head>
      <Stack pt="8rem" px="6rem">
        <Title align="center" sx={{ color: theme.colors.gray[8] }}>
          Támogatóink
        </Title>
        <Text align="center" size="lg" sx={{ color: theme.colors.gray[8] }}>
          Szeretnénk támogatóinknak hálánkat kifejezni, amiért gyűjteményünket
          akár tárgyi, akár tudásanyaggal segítették.
        </Text>
      </Stack>

      <section className={classes.section}>
        {/* {sponsorArray?.length > 0 ? (
          sponsorArray.map(({ name, profileImg, contact }: any, id: number) => (
            <Testimonial
              key={id}
              contact={contact}
              name={name}
              profileImg={profileImg}
              isPage={false}
            />
          ))
        ) : (
          <Stack align="center" justify="center">
            <Title align="center" sx={{ color: theme.colors.gray[8] }}>
              Jelenleg nincsenek támogatóink!
            </Title>
            <Text align="center" color="dimmed">
              Legyen Ön az első!
            </Text>
          </Stack>
        )} */}
      </section>
      <Box px="sm">
        <Title
          align="center"
          sx={{ width: "100%", color: theme.colors.gray[8] }}
          mb="3rem"
        >
          Lépjen kapcsolatba velünk és legyen Ön a következő támogatónk!
        </Title>
      </Box>
    </>
  );
};

export default Tamogatoink;
