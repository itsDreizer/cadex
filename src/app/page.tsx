import MaxWContainer from "@/components/MaxWContainer";
import Player from "@/components/Player";
import Title from "@/components/Title";
import { Box, Button, Typography } from "@mui/material";
import { Metadata } from "next";
import Link from "next/link";

const idCreator = (() => {
  let count = 0;
  return () => {
    return (count += 1);
  };
})();

const items = [
  {
    id: idCreator(),
    title: "Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maiores reiciendis placeat repudiandae vitae quaerat similique beatae magnam iure possimus",
  },
  {
    id: idCreator(),
    title: "Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maiores reiciendis placeat repudiandae vitae quaerat similique beatae magnam iure possimus",
  },
  {
    id: idCreator(),
    title: "Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maiores reiciendis placeat repudiandae vitae quaerat similique beatae magnam iure possimus",
  },
  {
    id: idCreator(),
    title: "Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maiores reiciendis placeat repudiandae vitae quaerat similique beatae magnam iure possimus",
  },
  {
    id: idCreator(),
    title: "Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maiores reiciendis placeat repudiandae vitae quaerat similique beatae magnam iure possimus",
  },
  {
    id: idCreator(),
    title: "Title",
    body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi maiores reiciendis placeat repudiandae vitae quaerat similique beatae magnam iure possimus",
  },
];

export const metadata: Metadata = {
  title: "Main Page",
  description: "Main page in test assignment for CADEX",
  openGraph: {
    siteName: "CADEX test assignment",
    title: "Main page",
    description: "This is the description of the Main Page.",
    images: "https://files.svgcdn.io/skill-icons/nextjs-light.png",
    type: "website",
    locale: "en_US",
  },
};

export default function Home() {
  return (
    <>
      <Box sx={{ backgroundColor: "lightgray" }} component={"section"}>
        <MaxWContainer>
          <Box
            sx={{
              paddingBlock: "50px",
              paddingInline: { sm: "50px" },
              gridTemplateColumns: { sm: "repeat(auto-fit, minmax(500px, 1fr))" },
            }}
            display={"grid"}
            gap={"50px"}>
            <Box>
              <Title level={1}>Most important title on the page</Title>
              <Typography lineHeight={1.7} marginTop={"35px"}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate consequatur est tenetur quis officia
                quibusdam eveniet? Est saepe dolor eum possimus voluptas, aut laboriosam praesentium labore doloremque
                sint, hic ex?
              </Typography>
            </Box>
            <Box display={"flex"} justifyContent={"center"}>
              <Player
                controls
                width={"100%"}
                maxWidth="500px"
                height={"unset"}
                light
                aspectRatio={2}
                url={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
              />
            </Box>
          </Box>
        </MaxWContainer>
      </Box>

      <Box component={"section"}>
        <MaxWContainer paddingBlock="50px">
          <Title centered level={2}>
            Also very important title
          </Title>
          <Box
            marginTop={"50px"}
            display={"grid"}
            gap={"50px"}
            rowGap={"100px"}
            justifyContent={"center"}
            gridTemplateColumns={"repeat(auto-fit, minmax(320px, 1fr))"}>
            {items.map((item) => {
              return (
                <Box key={item.id}>
                  <Box fontWeight={500} fontSize={"1.5rem"}>
                    {item.title}
                  </Box>
                  <Typography marginTop={"10px"} variant="body1">
                    {item.body}
                  </Typography>
                </Box>
              );
            })}
          </Box>
          <Box marginTop={"50px"} display={"flex"} justifyContent={"center"}>
            <Button variant="contained" component={Link} href="/contact">
              Contact Us
            </Button>
          </Box>
        </MaxWContainer>
      </Box>

      <Box sx={{ backgroundColor: "lightgray" }} component={"section"}>
        <MaxWContainer paddingBlock="50px">
          <Box display={"flex"} alignItems={"center"} gap="25px" flexDirection={"column"}>
            <Title centered level={3}>
              Less important title
            </Title>
            <Button variant="contained" component={Link} href="/contact">
              Contact Us
            </Button>
          </Box>
        </MaxWContainer>
      </Box>
    </>
  );
}
