"use client";

import { useSendFormMutation } from "@/redux/MessageApi";
import Title from "./Title";
import ContactForm from "./ContactForm";
import { Backdrop, CircularProgress } from "@mui/material";

const ContactPageBody = () => {
  const [, { data, isLoading }] = useSendFormMutation({
    fixedCacheKey: "message",
  });
  return (
    <>
      <Title level={1}>{data || "Contact Us"}</Title>
      {!data && <ContactForm />}
      <Backdrop sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })} open={isLoading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </>
  );
};

export default ContactPageBody;
