"use client";

import {
  Paper,
  Select,
  Group,
  LoadingOverlay,
  Text,
  createStyles,
} from "@mantine/core";
import React, { useEffect, useState } from "react";
import LampCard from "../../components/lampCard";

const styles = createStyles((theme) => ({
  text: {
    color: theme.colors.gray[8],
    textAlign: "center",
  },
  header: {
    minHeight: "30vh",
    margin: "8rem 0 2rem 0",
    padding: "0 6rem",
    [theme.fn.smallerThan("md")]: {
      padding: "0 2rem",
      minHeight: "30vh",
      margin: "8rem 0 2rem 0",
    },
  },
}));

const Lampak = () => {
  const { classes } = styles();
  const [lampArray, setLamp] = useState<Array<any>>([]);
  const [type, setType] = useState<string>("fenyforrasok");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getLampsByCategory", {
      method: "POST",
      body: JSON.stringify({ type }),
    }).then((x) =>
      x.json().then((x) => {
        setLamp(x.data.edges);
        setLoading(false);
      })
    );
  }, [type]);

  const types = [
    { value: "fenyforrasok", label: "Fényforrások" },
    { value: "kozvilagitas", label: "Közvilágítási Lámpatestek" },
    { value: "elektronika", label: "Elektrotechnikai eszközök" },
    { value: "erdekessegek", label: "Érdekességek" },
    { value: "retro", label: "Retro gyűjtemény" },
  ];

  return (
    <main className="relative min-h-fit">
      <LoadingOverlay visible={loading} loaderProps={{ color: "orange" }} />
      <Group className={"lamps " + classes.header} noWrap={false}>
        <Paper sx={{ width: "75vw" }} mx="auto" withBorder p="xl">
          <Select
            label="Válasszon kategoriát"
            data={types}
            value={type}
            onChange={(e) => setType(e)}
          ></Select>
        </Paper>
      </Group>
      <section className="p-6 grid [grid-template-columns: repeat(auto-fill, 25rem)] min-h-[40vh] place-items-center">
        {lampArray.length > 0 ? (
          lampArray.map((edge) => (
            <LampCard
              img={edge.node.featuredImage?.node.sourceUrl}
              slug={edge.node.slug}
              title={edge.node.title}
              key={edge.node.title}
              category={type}
            />
          ))
        ) : (
          <Text className={classes.text}>
            Nincsen a keresésnek megfelelő elem
          </Text>
        )}
      </section>
    </main>
  );
};

export default Lampak;
