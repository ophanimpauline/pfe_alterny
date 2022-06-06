import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productsApi = createApi ({
    reducerPath: "prodcutsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://1dd8-102-158-81-86.ngrok.io"}),
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => "/store/products/",
        }),
    }),
 
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
