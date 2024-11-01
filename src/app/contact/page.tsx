import ContactPageBody from "@/components/ContactPageBody";
import { Box } from "@mui/material";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact page in test assignment for CADEX",
  openGraph: {
    siteName: "CADEX test assignment",
    title: "Contact Us",
    description: "Contact page in test assignment for CADEX",
    images: "https://files.svgcdn.io/skill-icons/nextjs-light.png",
    type: "website",
    locale: "en_US",
  },
};

const ContactPage = () => {
  return (
    <Box
      paddingBlock={"40px"}
      paddingInline={"16px"}
      gap={"25px"}
      flexDirection={"column"}
      height={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}>
      <ContactPageBody />
    </Box>
  );
};

export default ContactPage;
