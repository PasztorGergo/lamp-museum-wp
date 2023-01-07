"use client";

import { Stack, Title, Text, Timeline, Image } from "@mantine/core";
import React from "react";
import Date from "./date";

const History = ({ events }: { events: Array<unknown> }) => {
  return (
    <>
      <header>
        <Stack
          className="md:h-[50vh] w-full h-[30vh] px-6 md:mt-0 mt-36"
          justify="center"
          align="center"
        >
          <Title order={1} className="text-[#343a40] text-center">
            Történetünk
          </Title>
          <Text className="text-[#343a40] text-center">
            Tudjon meg többet a történetünkről, és jelentősebb eseményekről
            amelyek hatással voltak gyűjteményünkre!
          </Text>
        </Stack>
      </header>
      <main className="md:px-12 px-6 mb-10 w-full">
        <Timeline color="orange" className="md:w-2/3 w-full" active={Infinity}>
          {events.map(({ node }: any) => (
            <Timeline.Item className="flex flex-col space-y-8">
              <Title order={3} className="text-[#343a40]">
                {node.title}
              </Title>
              <Date dateString={node.date} />
              <div
                className="text-[#343a40] leading-relaxed"
                dangerouslySetInnerHTML={{ __html: node.content }}
              />
              <Image
                src={node.featuredImage.node.sourceUrl}
                alt="title"
                radius="lg"
                className="md:w-1/2 w-full mt-4"
              />
            </Timeline.Item>
          ))}
        </Timeline>
      </main>
    </>
  );
};

export default History;
