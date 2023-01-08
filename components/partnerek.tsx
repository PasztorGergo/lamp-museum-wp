"use client";

import { Stack, Title, Text, Card, Image } from "@mantine/core";
import React from "react";

const Partnerek = ({ supports }: { supports: Array<unknown> }) => {
  return (
    <>
      <Stack className="pt-32 px-24">
        <Title className="text-[#343a40] text-center">Partner oldalak</Title>
        <Text className="text-[#343a40] text-lg text-center">
          Itt találhatja Gyűjteményünk partnereinek a weboldalait.
        </Text>
      </Stack>

      <section className="grid [repeat(auto-fit, minmax(250px, 1fr))] gap-5 place-items-center content-center md:px-24 px-6 py-8">
        {supports.length > 0 ? (
          supports.map(({ node }: any) => (
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
          <Text className="text-[#343a40] mt-6 text-lg text-center md:h-[40vh] h-[10vh]">
            Legyen Ön az első partnerünk!
          </Text>
        )}
      </section>
    </>
  );
};

export default Partnerek;
