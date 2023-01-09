"use client";

import { Stack, Title, Text, Card, Image } from "@mantine/core";
import React from "react";

const Tamogatok = ({ sponsorArray }: { sponsorArray: Array<unknown> }) => {
  return (
    <>
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
        {sponsorArray.length > 0 ? (
          sponsorArray.map(({ node }) => (
            <Card withBorder shadow="md" key={node.title}>
              <Card.Section>
                <Image
                  src={node.featuredImage.node.sourceUrl}
                  alt={node.title}
                  height={200}
                />
              </Card.Section>
              <Card.Section className="py-4">
                <Title order={3} className="text-[#343a40] text-center">
                  {node.title}
                </Title>
              </Card.Section>
            </Card>
          ))
        ) : (
          <Stack align="center" justify="center" sx={{ height: "30vh" }}>
            <Title align="center" sx={{ color: "#343a40" }}>
              Jelenleg nincsenek támogatóink
            </Title>
            <Text align="center" color="dimmed">
              Legyen Ön az első!
            </Text>
          </Stack>
        )}
      </section>
    </>
  );
};

export default Tamogatok;
