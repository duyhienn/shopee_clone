export default function ProductList() {
  return <div>ProductList</div>
}

// import { keepPreviousData, useQuery } from '@tanstack/react-query'
// import categoryApi from 'src/apis/category.api'
// import productApi from 'src/apis/product.api'
// import Pagination from 'src/components/Pagination'
// import useQueryConfig, { QueryConfig } from 'src/hooks/useQueryConfig'
// import useQueryParams from 'src/hooks/useQueryParams'
// import { ProductListConfig } from 'src/types/product.type'

// export default function ProductList() {
//   const queryParams: QueryConfig = useQueryParams()
//   const queryConfig = useQueryConfig()

//   const { data: productsData } = useQuery({
//     queryKey: ['products', queryParams],
//     queryFn: () => {
//       return productApi.getProducts(queryConfig as ProductListConfig)
//     },
//     staleTime: 3 * 60 * 1000,
//     placeholderData: keepPreviousData
//   })
//   const { data: categoriesData } = useQuery({
//     queryKey: ['categories'],
//     queryFn: () => {
//       return categoryApi.getCategories()
//     }
//   })

//   return (
//     <div className='bg-gray-200 py-6'>
//       <div className='container'>
//         {productsData && (
//           <div className='grid grid-cols-12 gap-6'>
//             <div className='col-span-3'>
//               <AsideFilter queryConfig={queryConfig} categories={categoriesData?.data.data || []} />
//             </div>
//             <div className='col-span-9'>
//               <SortProductList queryConfig={queryConfig} pageSize={productsData.data.data.pagination.page_size} />
//               <div className='mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 '>
//                 {productsData.data.data.products.map((product, index) => (
//                   <div key={index} className='col-span-1'>
//                     <Product product={product} />
//                   </div>
//                 ))}
//               </div>
//               <Pagination
//                 queryConfig={queryConfig}
//                 // pageSize={productsData.data.data.pagination.page_size}
//                 pageSize={20}
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }
