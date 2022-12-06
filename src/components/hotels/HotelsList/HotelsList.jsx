import React, { useEffect, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";
import { hotelsContext } from "../../../contexts/HotelsContextProvider";
import Pagination from "react-bootstrap/Pagination";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/HotelList.css";

const HotelsList = () => {
  const { getHotels, hotels } = useContext(hotelsContext);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    getHotels();
  }, []);

  // useEffect(() => {
  //   getHotels();
  // }, [searchParams]);

  // useEffect(() => {
  //   setSearchParams({
  //     page: currentPage,
  //   });
  // }, [currentPage]);

  // function getPagesCount() {
  //   let pageCountArr = [];
  //   for (let i = 1; i < pages + 1; i++) {
  //     pageCountArr.push(i);
  //   }
  //   return pageCountArr;
  // }
  // console.log(hotels);

  return (
    <div>
      <Navbar />
      <div className="hotelListContainer">
        <h2>Отели</h2>

        {hotels?.map(item => (
          <HotelCard key={item.slug} item={item} />
        ))}

        {/* <Pagination>
  <Pagination.Prev onClick={() => setCurrentPage(currentPage - 1)} />

  {getPagesCount().map(item =>
    item === currentPage ? (
      <Pagination.Item
        active
        onClick={() => setCurrentPage(item)}
        key={item}>
        {item}
      </Pagination.Item>
    ) : (
      <Pagination.Item onClick={() => setCurrentPage(item)} key={item}>
        {item}
      </Pagination.Item>
    )
  )}

  <Pagination.Next onClick={() => setCurrentPage(currentPage + 1)} />
</Pagination> */}
      </div>
      <Footer />
    </div>
  );
};

export default HotelsList;
