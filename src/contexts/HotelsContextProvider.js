import React, { useReducer } from "react";

import axios from "axios";

export const hotelsContext = React.createContext();

const INIT_STATE = {
  hotels: [],
  oneHotel: null,
  comments: [],
  oneComment: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_HOTELS":
      return {
        ...state,
        hotels: action.payload,
        // pages: Math.ceil(action.payload.count / 3),
      };

    case "GET_ONE_HOTEL":
      return { ...state, oneHotel: action.payload };
    case "GET_ONE_COMMENT":
      return { ...state, comments: action.payload };
    default:
      return state;
  }
}

const API = "http://34.159.95.125";

const HotelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  async function createHotel(newHotel, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/hotel/hotels/`, newHotel, config);
      console.log(res);
      navigate("/hotels");
      getHotels();
    } catch (err) {
      console.log(err);
    }
  }

  async function getHotels() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(
        `${API}/hotel/hotels/
        `,
        config
      );
      dispatch({
        type: "GET_HOTELS",
        payload: res.data.results,
      });
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  }

  async function getOneHotel(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/hotel/hotels/${id}/`, config);
      dispatch({
        type: "GET_ONE_HOTEL",
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  }
  async function getComments() {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios(`${API}/comment/crud/`, config);
      dispatch({
        type: "GET_ONE_COMMENT",
        payload: res.data.results,
      });
      console.log(res.data.results);
    } catch (err) {
      console.log(err);
    }
  }

  async function updateHotel(id, editedHotel, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.put(
        `${API}/hotel/hotels/${id}/`,
        editedHotel,
        config
      );
      navigate("/hotel/hotels");
      getHotels();
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteHotel(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      await axios.delete(`${API}/hotel/hotels/${id}/`, config);
      getHotels();
    } catch (err) {
      console.log(err);
    }
  }

  async function createComment(id, content) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/comment/crud/`, content, config);
      console.log(res);
      getOneHotel(id);
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteComment(hotelId, commentId) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(
        `${API}/hotel/hotels/${commentId}/`,
        config
      );
      getOneHotel(hotelId);
    } catch (err) {
      console.log(err);
    }
  }

  async function createLike(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/comment/like/${id}/`, config);
      getComments(id);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteLike(id) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/comment/like/${id}/`, config);
      getComments(id);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <hotelsContext.Provider
      value={{
        hotels: state.hotels,
        // pages: state.pages,
        comments: state.comments,
        oneHotel: state.oneHotel,

        createHotel,
        getHotels,
        getOneHotel,
        updateHotel,
        deleteHotel,
        createComment,
        getComments,
        deleteComment,
        createLike,
        deleteLike,
      }}>
      {children}
    </hotelsContext.Provider>
  );
};

export default HotelsContextProvider;
