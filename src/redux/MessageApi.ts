import { IContactFormData } from "@/types";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const MessageApi = createApi({
  reducerPath: "message",
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    sendForm: builder.mutation<string, IContactFormData>({
      query: (formData) => ({
        url: "/api",
        method: "POST",
        body: formData,
      }),
    }),
  }),
});

export default MessageApi;
export const { useSendFormMutation } = MessageApi;
