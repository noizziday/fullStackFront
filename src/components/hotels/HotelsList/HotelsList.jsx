// import React, { useEffect, useContext, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import HotelCard from "../HotelCard/HotelCard";
// import { hotelsContext } from "../../../contexts/HotelsContextProvider";
// import Pagination from "react-bootstrap/Pagination";
// import Pagination from '@mui/material/Pagination';
// import Stack from '@mui/material/Stack';

// // export default function BasicPagination() {
// //   return (
//   //   );
//   // }

//   const HotelsList = () => {
//     const { getHotels, hotels, pages } = useContext(hotelsContext);
//     const [searchParams, setSearchParams] = useSearchParams();
//     const [currentPage, setCurrentPage] = useState(1);

//   useEffect(() => {
//     getHotels();
//   }, []);

//   useEffect(() => {
//     getHotels();
//   }, [searchParams]);

//   useEffect(() => {
//     setSearchParams({
//       page: currentPage,
//     });
//   }, [currentPage]);

//   function getPagesCount() {
//     let pageCountArr = [];
//     for (let i = 1; i < pages + 1; i++) {
//       pageCountArr.push(i);
//     }
//     return pageCountArr;
//   }

//   return (
//     <div>
//       <h2>Отели</h2>

//       {hotels?.map(item => (
//         <HotelCard key={item.id} item={item} />
//         ))}

//       <Pagination>
//         <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

//         {getPagesCount().map(item =>
//           item === currentPage ? (
//             <Pagination.Item
//             active
//             onClick={() => setCurrentPage(item)}
//               key={item}>
//               {item}
//             </Pagination.Item>
//           ) : (
//             <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
//               {item}
//             </Pagination.Item>
//           )
//           //     <Stack spacing={2}>
//           //
//           //       <Pagination count={10} color="primary" />
//           //
//           //     </Stack>
//         )}

//         <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
//       </Pagination>
//     </div>
//   );
// };

// export default HotelsList;
