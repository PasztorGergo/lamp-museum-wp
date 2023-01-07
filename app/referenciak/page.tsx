"use client";

import React, { useEffect, useState } from "react";
import {
  createStyles,
  LoadingOverlay,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Testimonial from "../../components/testimonial";

const useStyles = createStyles((theme) => ({
  section: {
    placeItems: "center",
    alignContent: "center",
    position: "relative",
    minHeight: "fit-content",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gridGap: "20px",
    [theme.fn.largerThan("sm")]: {
      padding: "3rem 6rem 3rem",
    },
  },
}));

const Referenciak = () => {
  const theme = useMantineTheme();
  const { classes } = useStyles();
  const [testimonalArray, setTestimonials] = useState<Array<unknown>>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetch("/api/getReferences", {
      method: "GET",
    }).then((x) =>
      x.json().then(({ data }) => {
        setTestimonials(data.edges);
        setLoading(false);
      })
    );
  }, []);

  return (
    <main className="px-12 py-6">
      <Stack pt="8rem" px="6rem" align="center">
        <Title sx={{ color: theme.colors.gray[8], textAlign: "center" }}>
          Referenciák
        </Title>
        <Text
          size="lg"
          sx={{ color: theme.colors.gray[8], textAlign: "center" }}
        >
          Látogatóink, illetve a nagyérdemű véleményeket és a munkásságunkról
          szóló cikkeket itt tekintheti meg.
        </Text>
      </Stack>

      <section className={classes.section}>
        <LoadingOverlay visible={loading} loaderProps={{ color: "orange" }} />
        {testimonalArray.length > 0 ? (
          testimonalArray.map(({ node }: any) => (
            <Testimonial
              content={node.content}
              featuredImage={node.featuredImage.node.sourceUrl}
              title={node.title}
              key={node.title}
            />
          ))
        ) : (
          <Title
            sx={{ width: "100%", color: theme.colors.gray[8], height: "6rem" }}
            align="center"
            mb="3rem"
            order={4}
          >
            Lépjen kapcsolatba velünk és legyen Ön a következő értékelőnk!
          </Title>
        )}
      </section>
    </main>
  );
};

export default Referenciak;
