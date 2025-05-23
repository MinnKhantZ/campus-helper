import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { BASE_URL } from "./BaseUrl";

export const eventApi = createApi({
  reducerPath: "eventApi",
  tagTypes: ["Events"],
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/events`,
  }),
  endpoints: (builder) => ({
    getAllEvents: builder.query({
      query: () => `/`,
      providesTags: ["Events"],
    }),
    // getEventById: builder.query({
    //   query: (id) => `/${id}`,
    //   providesTags: ["Events"],
    // }),
    createEvent: builder.mutation({
      query: (newEvent) => ({
        url: "/",
        method: "POST",
        body: newEvent,
      }),
      invalidatesTags: ["Events"],
    }),
    updateEvent: builder.mutation({
      query: ({ id, updatedEvent }) => ({
        url: `/${id}`,
        method: "PUT",
        body: updatedEvent,
      }),
      invalidatesTags: ["Events"],
    }),
    deleteEvent: builder.mutation({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Events"],
    }),
  }),
});

export const {
  useGetAllEventsQuery,
//   useGetEventByIdQuery,
  useCreateEventMutation,
  useUpdateEventMutation,
  useDeleteEventMutation,
} = eventApi;
