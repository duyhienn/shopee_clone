export default function Pagination() {
  return <div>Pagination</div>
}

// import classNames from 'classnames'
// import { Link, createSearchParams } from 'react-router-dom'
// import path from 'src/constants/path'
// import { QueryConfig } from 'src/hooks/useQueryConfig'

// interface Props {
//   queryConfig: QueryConfig
//   pageSize: number
// }
// /**
// Với range = 2 áp dụng cho khoảng cách đầu, cuối và xung quanh current_page

// [1] 2 3 ... 19 20
// 1 [2] 3 4 ... 19 20
// 1 2 [3] 4 5 ... 19 20
// 1 2 3 [4] 5 6 ... 19 20
// 1 2 3 4 [5] 6 7 ... 19 20

// 1 2 ... 4 5 [6] 8 9 ... 19 20

// 1 2 ...13 14 [15] 16 17 ... 19 20

// 1 2 ... 14 15 [16] 17 18 19 20
// 1 2 ... 15 16 [17] 18 19 20
// 1 2 ... 16 17 [18] 19 20
// 1 2 ... 17 18 [19] 20
// 1 2 ... 18 19 [20]
//  */

// const RANGE = 2
// export default function Pagination({ queryConfig, pageSize }: Props) {
//   const page = Number(queryConfig.page)
//   const renderPagnation = () => {
//     let dotAfter = false
//     let dotBefore = false
//     const renderDotBefore = (index: number) => {
//       if (!dotBefore) {
//         dotBefore = true
//         return (
//           <div key={index} className='bg-white rounded px-3 py-2 shadow-sm mx-2 select-none border'>
//             ...
//           </div>
//         )
//       }
//       return null
//     }
//     const renderDotAfter = (index: number) => {
//       if (!dotAfter) {
//         dotAfter = true
//         return (
//           <div key={index} className='bg-white rounded px-3 py-2 shadow-sm mx-2 select-none border'>
//             ...
//           </div>
//         )
//       }
//       return null
//     }
//     return Array(pageSize)
//       .fill(0)
//       .map((_, index) => {
//         const pageNumber = index + 1
//         if (page <= RANGE * 2 + 1 && pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
//           return renderDotAfter(index)
//         } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
//           if (pageNumber < page - RANGE && pageNumber > RANGE) {
//             return renderDotBefore(index)
//           } else if (pageNumber > page + RANGE && pageNumber < pageSize - RANGE + 1) {
//             return renderDotAfter(index)
//           }
//         } else if (page >= pageSize - RANGE * 2 && pageNumber > RANGE && pageNumber < page - RANGE) {
//           return renderDotBefore(index)
//         }
//         return (
//           <Link
//             to={{
//               pathname: path.home,
//               search: createSearchParams({
//                 ...queryConfig,
//                 page: pageNumber.toString()
//               }).toString()
//             }}
//             key={index}
//             className={classNames('bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border', {
//               'border-cyan-500': pageNumber === page,
//               'border-transparent': pageNumber !== page
//             })}
//           >
//             {pageNumber}
//           </Link>
//         )
//       })
//   }
//   return (
//     <div className='flex flex-wrap mt-6 justify-center'>
//       {page === 1 ? (
//         <span className='bg-white rounded px-3 py-2 shadow-sm mx-2 border cursor-not-allowed'>Prev</span>
//       ) : (
//         <Link
//           to={{
//             pathname: path.home,
//             search: createSearchParams({
//               ...queryConfig,
//               page: (page - 1).toString()
//             }).toString()
//           }}
//           className={classNames('bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border')}
//         >
//           Prev
//         </Link>
//       )}
//       {renderPagnation()}
//       {page === pageSize ? (
//         <span className='bg-white rounded px-3 py-2 shadow-sm mx-2 border cursor-not-allowed'>Next</span>
//       ) : (
//         <Link
//           to={{
//             pathname: path.home,
//             search: createSearchParams({
//               ...queryConfig,
//               page: (page + 1).toString()
//             }).toString()
//           }}
//           className={classNames('bg-white rounded px-3 py-2 shadow-sm mx-2 cursor-pointer border')}
//         >
//           Next
//         </Link>
//       )}
//     </div>
//   )
// }
