"use client";

import React, { useState } from "react";
import { createStyles, Group, Title, Text, Pagination } from "@mantine/core";
import { News as NewsIcon } from "tabler-icons-react";
import NewsCard from "./newsCard";

const useStyles = createStyles((theme) => ({
  section: {
    width: "100%",
    padding: "2rem",
    backgroundColor: `${theme.colors.orange[1]}6f`,
    [theme.fn.largerThan("sm")]: {
      padding: "6rem",
    },
  },
  text: {
    color: theme.colors.gray[8],
  },
}));

type Props = {
  newsArray: any;
};

export default function News({ newsArray }: Props) {
  const [page, setPage] = useState(1);
  const { classes } = useStyles();

  return (
    <section className={classes.section}>
      <Title mb="4rem" className={classes.text}>
        Híreink <NewsIcon size={28} />
      </Title>
      <Group position="left" grow sx={{ gap: "1rem" }}>
        {newsArray ? (
          newsArray.map((news) => (
            <NewsCard
              key={news.slug}
              src={news.slug}
              title={news.title}
              text={news.excerpt}
              date={news.date}
              img={news.featuredImage?.node.sourceUrl}
            />
          ))
        ) : (
          <Text>Jelenleg nincsenek új híreink</Text>
        )}
      </Group>
      <Pagination
        page={page}
        onChange={(e) => setPage(e)}
        total={Math.ceil(newsArray.length / 3)}
      />
    </section>
  );
}
