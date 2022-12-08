import React, { useEffect, useContext, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import HotelCard from "../HotelCard/HotelCard";

import HotelsContextProvider, {
  hotelsContext,
} from "../../../contexts/HotelsContextProvider";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import "../../../styles/HotelList.css";
import HotelSideBar from "../HotelSideBar";
import { useNavigate } from "react-router-dom";
import Pagination from "@mui/material/Pagination";

const HotelsList = () => {
  const { getHotels, hotels, hotelsForPages } = useContext(hotelsContext);
  // const [searchParams, setSearchParams] = useSearchParams();
  // const [currentPage, setCurrentPage] = useState(1);

  const [page, setPage] = useState(1);

  const location = useLocation();

  const navigate = useNavigate();

  useEffect(() => {
    getHotels();
  }, [page]);
  useEffect(() => {
    getHotels();
  }, []);

  const { filterHotelsByRegion } = useContext(hotelsContext);

  const count = Math.ceil(hotelsForPages / 6);

  const handlePage = (e, p) => {
    setPage(p);
    filterHotelsByRegion("page", p, navigate);
  };

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
    <div className="hotelsListBlock">
      <Navbar />

      <div className="hotelListContainer">
        <div className="hotelListDiv">
          <div className="hotelListSideBarBlock">
            <HotelSideBar />
          </div>
          <div className="hotelListCardBlock">
            <div className="hotelListTitle">
              <h2>Отели</h2>
            </div>
            {hotels.length > 0 ? (
              <>
                {hotels?.map(item => (
                  <HotelCard key={item.slug} item={item} />
                ))}
                <div className="paginationDiv">
                  <Pagination
                    count={count}
                    page={page}
                    shape="rounded"
                    onChange={handlePage}
                  />
                </div>
              </>
            ) : (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "50%",
                }}>
                <h5>По указанному запросу отелей нет</h5>
              </div>
            )}
          </div>
        </div>
      </div>

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

      <Footer />
    </div>
  );
};

export default HotelsList;
