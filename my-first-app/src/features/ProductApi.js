import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productsApi = createApi ({
    reducerPath: "prodcutsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://0083-197-14-11-2.ngrok.io"}),
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => "/store/products/",
        }),
    }),
 
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
