"use client";

import {
  Card,
  Image,
  Text,
  Title,
  createStyles,
  Stack,
  Modal,
  Button,
} from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import Link from "next/link";
import React from "react";

type Props = {
  src: string;
  title: string;
  text: string;
  date: string;
  img: string;
};

const useStyles = createStyles((theme) => ({
  text: {
    color: theme.colors.gray[8],
  },
}));

export default function NewsCard({ src, img, text, title, date }: Props) {
  const { classes } = useStyles();
  const breakpoint = useMediaQuery("(min-width: 790px)", false);
  return (
    <>
      <Card
        sx={{ minWidth: breakpoint ? "initial" : "100%", minHeight: "22rem" }}
      >
        <Card.Section>
          <Image src={img} alt={title} height={160} />
        </Card.Section>
        <Stack mt="1.25rem">
          <Title className={classes.text} order={5}>
            {title}
          </Title>
          <Text className={classes.text}>
            <div
              dangerouslySetInnerHTML={{
                __html:
                  text?.length > 100
                    ? text.substring(0, (text?.length / 100) * 10)
                    : text,
              }}
            />
            ...
          </Text>
          <Link href={`hirek/${src}`}>
            <Button variant="subtle" color="orange" className="w-full">
              Hír megnyitása
            </Button>
          </Link>
        </Stack>
      </Card>
    </>
  );
}
