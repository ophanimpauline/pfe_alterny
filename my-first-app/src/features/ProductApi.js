import {createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"


export const productsApi = createApi ({
    reducerPath: "prodcutsApi",
    baseQuery: fetchBaseQuery({baseUrl: "https://1fce-197-0-23-87.ngrok.io"}),
    endpoints: (builder) => ({
        getAllProducts : builder.query({
            query: () => "/store/products/",
        }),
    }),
 
});

export const { useGetAllProductsQuery } = productsApi;
