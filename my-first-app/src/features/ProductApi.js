import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productsApi = createApi ({
    reducerPath: "prodcutsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://6ea4-102-157-29-52.ngrok.io"}),
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => "/store/products/",
        }),
    }),
 
});

export const { useGetAllProductsQuery, useGetSingleProductQuery } = productsApi;
