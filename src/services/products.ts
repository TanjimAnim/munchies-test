import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const munchiesApi = createApi({
  reducerPath: "munchiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://munchies-api.up.railway.app/",
    mode: "no-cors",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      transformResponse: (a, b, c) => {
        console.log(a, b, c);
      },
      transformErrorResponse: (a, b, c) => {
        console.log(a, b, c);
      },
      query: () => ({
        url: `products`,
        // This is the same as passing 'text'
        responseHandler: async (response) => {
          const res = { data: await response.json() };
          console.log("ressss", res);
          return res;
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = munchiesApi;
