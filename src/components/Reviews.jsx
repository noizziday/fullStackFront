import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { hotelsContext } from "../contexts/HotelsContextProvider";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import "../styles/Reviews.css";
import { FormControl, MenuItem, Select } from "@mui/material";

const Reviews = ({ id, setOpen, open }) => {
  const { getOneHotel, oneHotel, createComment, comments, getComments } =
    useContext(hotelsContext);

  console.log(id);

  const [hotel, setHotel] = useState("");
  const [comment, setComment] = useState("");
  const [staff, setStaff] = useState("");
  const [comfort, setComfort] = useState("");
  const [purity, setPurity] = useState("");
  const [facilities, setFacilities] = useState("");

  useEffect(() => {
    getOneHotel(id);

    createComment(id, {
      hotel: id,
    });
  }, []);

  function saveComment() {
    let newComment = new FormData();
    newComment.append("hotel", id);
    newComment.append("good_review", comment);
    newComment.append("staff", staff);
    newComment.append("comfort", comfort);
    newComment.append("purity", purity);
    newComment.append("facilities", facilities);
    console.log(id, comment, staff, comfort, purity, facilities);
    createComment(id, newComment);
  }
  return (
    <>
      <Drawer
        anchor={"top"}
        open={true}
        onClose={e => {
          setOpen(false);
        }}>
        <div id="comment-panel">
          <input
            id="comment-inp"
            type="text"
            placeholder="введите свой комментарий"
            onChange={e => setComment(e.target.value)}
          />
          <br />
          <div id="staff-block">
            <span
              style={{
                width: "100px",
              }}>
              Персонал
            </span>
            <select
              className="select"
              value={staff}
              onChange={e => setStaff(e.target.value)}>
              <option>---</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <br />
          <div id="comfort-block">
            <span
              style={{
                width: "100px",
              }}>
              Комфорт
            </span>
            <select
              className="select"
              value={comfort}
              onChange={e => setComfort(e.target.value)}>
              <option>---</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <br />

          <div id="purity-block">
            <span
              style={{
                width: "100px",
              }}>
              Чистота
            </span>
            <select
              className="select"
              value={purity}
              onChange={e => setPurity(e.target.value)}>
              <option>---</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <br />
          <div id="facilities-block">
            <span
              style={{
                width: "100px",
              }}>
              {" "}
              Удобства
            </span>
            <select
              className="select"
              value={facilities}
              onChange={e => setFacilities(e.target.value)}>
              <option>---</option>
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
              <option value={6}>6</option>
              <option value={7}>7</option>
              <option value={8}>8</option>
              <option value={9}>9</option>
              <option value={10}>10</option>
            </select>
          </div>
          <Button onClick={saveComment} variant="contained">
            ОПУБЛИКОВАТЬ
          </Button>
        </div>
        <br />
      </Drawer>
    </>
  );
};

export default Reviews;
