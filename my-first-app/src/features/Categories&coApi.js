import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const categoriesApi = createApi ({
    reducerPath: "categoriesApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://49df-197-2-252-43.ngrok.io"}),
    endpoints: (builder) => ({
        getAllCollections : builder.query({
            query: () => "/store/collections/",
        }),
    }),
 
});

export const { useGetAllProductsQuery } = categoriesApi;
