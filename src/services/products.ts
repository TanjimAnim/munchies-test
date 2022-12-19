import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const munchiesApi = createApi({
  reducerPath: "munchiesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/munchies",
  }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => ({
        url: `products`,
        // This is the same as passing 'text'
        responseHandler: async (res) => {
          if (!res.ok) {
            return {
              error: await res.json() 
            }
          }
          return {
            data: await res.json() 
          };
        },
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllProductsQuery } = munchiesApi;
