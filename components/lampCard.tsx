"use client";

import { Card, createStyles, Image, Title } from "@mantine/core";
import React from "react";
import Link from "next/link";

const LampCard = ({ title, slug, img, category }) => {
  return (
    <Link href={`/lampak/${category}/${slug}`} className="max-w-fit">
      <Card
        sx={{
          maxWidth: "250px",
          position: "relative",
          overflow: "hidden",
          "&:hover": {
            "& > *:last-child": {
              height: "100%",
            },
          },
        }}
        radius="lg"
      >
        <Card.Section>
          <Image src={img} alt={title} height={250} />
        </Card.Section>
        <Card.Section
          sx={{
            position: "absolute",
            width: "100%",
            background: "#2f2f2f5f",
            left: "0",
            bottom: "0",
            height: "33.3334%",
            display: "grid",
            placeItems: "center",
            margin: "0",
            transition: "all  300ms cubic-bezier(.25,.1,.25,1)",
          }}
        >
          <Title order={3} sx={{ color: "white" }}>
            {title}
          </Title>
        </Card.Section>
      </Card>
    </Link>
  );
};

export default LampCard;
