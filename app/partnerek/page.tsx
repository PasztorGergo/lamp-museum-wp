"use client";

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

const Tamogatoink = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Partner oldalak | Villamostechnikai Gyűjtemény</title>
      </Head>
      <Stack pt="8rem" px="6rem">
        <Title align="center" sx={{ color: theme.colors.gray[8] }}>
          Partner oldalak
        </Title>
        <Text align="center" size="lg" sx={{ color: theme.colors.gray[8] }}>
          Itt találhatja Gyűjteményünk partnereinek a webdalait.
        </Text>
      </Stack>

      <section className={classes.section}>
        {/* {partnerArray?.length > 0 ? (
          partnerArray.map(
            ({ name, pageImg, contact, description }: any, id: number) => (
              <Testimonial
                key={id}
                contact={contact}
                name={name}
                profileImg={pageImg}
                comment={description}
                isPage
              />
            )
          )
        ) : (
          <Stack align="center" justify="center" mb="24vh">
            <Title align="center" sx={{ color: theme.colors.gray[8] }}>
              Jelenleg nincsenek partner oldalak!
            </Title>
          </Stack>
        )} */}
      </section>
    </>
  );
};

export default Tamogatoink;
