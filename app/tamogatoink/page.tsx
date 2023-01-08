"use client";

import Head from "next/head";
import React from "react";
import { Box, Stack, Text, Title } from "@mantine/core";

const Tamogatoink = () => {
  return (
    <>
      <Head>
        <title>Támogatóink | Villamostechnikai Gyűjtemény</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Stack pt="8rem" px="6rem">
        <Title align="center" sx={{ color: "#343a40" }}>
          Támogatóink
        </Title>
        <Text align="center" size="lg" sx={{ color: "#343a40" }}>
          Szeretnénk támogatóinknak hálánkat kifejezni, amiért gyűjteményünket
          akár tárgyi, akár tudásanyaggal segítették.
        </Text>
      </Stack>

      <section className="text-[#343a40]">
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
          sx={{ width: "100%", color: "#343a40" }}
          mb="3rem"
        >
          Lépjen kapcsolatba velünk és legyen Ön a következő támogatónk!
        </Title>
      </Box>
    </>
  );
};

export default Tamogatoink;
