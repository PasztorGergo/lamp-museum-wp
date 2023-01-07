import { Avatar, Card, Title } from "@mantine/core";
import React from "react";

const Testimonial = ({ featuredImage, content, title }) => {
  return (
    <Card shadow="md" withBorder p="md">
      <Card.Section
        p="md"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Avatar src={featuredImage} radius="xl" size="lg" />
        <Title order={3}>{title}</Title>
      </Card.Section>
      <Card.Section p="md">
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Card.Section>
    </Card>
  );
};

export default Testimonial;
