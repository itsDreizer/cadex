"use client";

import { useSendFormMutation } from "@/redux/MessageApi";
import { IContactFormData } from "@/types";
import { Button, styled as MUIStyled, TextField } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import styled from "styled-components";
import { TextareaAutosize as BaseTextareaAutosize } from "@mui/base/TextareaAutosize";
import { shouldNotForwardPropsWithKeys } from "@/utils";

const TextareaAutosize = MUIStyled(BaseTextareaAutosize, {
  shouldForwardProp: shouldNotForwardPropsWithKeys(["error"]),
})<{ error?: boolean }>`
  width: 100%;
  padding: 16.5px 14px;
  font: inherit;
  line-height: 1.5;
  color: ${({ theme }) => theme.palette.text.primary};
  border-radius: 4px;
  border: 1px solid ${({ error, theme }) => (error ? theme.palette.error.main : theme.palette.grey[400])};
  background-color: ${({ theme }) => theme.palette.background.paper};
  transition: border-color 0.3s ease;
  resize: none;

  &:hover {
    border-color: ${({ error, theme }) => (error ? theme.palette.error.dark : theme.palette.text.primary)};
  }

  &:focus {
    outline: none;
    border-color: ${({ error, theme }) => (error ? theme.palette.error.main : theme.palette.primary.main)};
  }

  &:disabled {
    color: ${({ theme }) => theme.palette.text.disabled};
  }
  &::placeholder{
  color: ${({ error, theme }) => error && theme.palette.error.main};

  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
`;

const ContactForm = () => {
  const [sendForm, { isLoading }] = useSendFormMutation({
    fixedCacheKey: "message",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm<IContactFormData>({
    reValidateMode: "onSubmit",
  });

  const onSubmit: SubmitHandler<IContactFormData> = async (data) => {
    sendForm(data);
  };

  return (
    <StyledForm noValidate onSubmit={handleSubmit(onSubmit)}>
      <TextField
        error={!!errors.name}
        disabled={isLoading}
        required
        autoComplete="off"
        {...register("name", {
          required: "Fill in the required fields",
          onChange: () => clearErrors(),
        })}
        label="Name"
      />

      <TextField
        error={!!errors.email}
        disabled={isLoading}
        required
        color={`${errors.email ? "error" : "primary"}`}
        autoComplete="off"
        {...register("email", { required: "Fill in the required fields", onChange: () => clearErrors() })}
        label="Email"
      />

      <TextareaAutosize
        error={!!errors.message}
        disabled={isLoading}
        minRows={5}
        maxRows={5}
        placeholder="Message*"
        {...register("message", { required: "Fill in the required fields", onChange: () => clearErrors() })}
      />

      {(() => {
        const keysOfErrors = Object.keys(errors);

        return <div style={{ color: "red" }}>{errors[keysOfErrors[0] as keyof IContactFormData]?.message}</div>;
      })()}

      <Button disabled={isLoading} variant="contained" sx={{ marginTop: "30px" }} type="submit">
        Submit
      </Button>
    </StyledForm>
  );
};

export default ContactForm;
