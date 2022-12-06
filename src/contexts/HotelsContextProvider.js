import React, { useReducer } from "react";

import axios from "axios";

export const hotelsContext = React.createContext();

const INIT_STATE = {
  hotels: [],
  pages: 0,

  oneHotel: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_HOTELS":
      return {
        ...state,
        hotels: action.payload.results,
        pages: Math.ceil(action.payload.count / 3),
      };

    case "GET_ONE_HOTEL":
      return { ...state, oneHotel: action.payload };
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
      console.log(res.data.slug);
      navigate(`/hotel/add/addroom/${res.data.slug}`);
      // getHotels();
    } catch (err) {
      console.log(err);
    }
  }

  async function addRoomToHotel(newRoom, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/room/add-room/`, newRoom, config);
      console.log(res);
      navigate("/hotels/");
      // getHotels();
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
      const res = await axios(`${API}/hotel/hotels/`, config);
      dispatch({
        type: "GET_HOTELS",
        payload: res.data,
      });
      console.log(res.data);
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

  async function updateHotel(id, editedHotel, navigate) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/hotel/hotels/${id}/`,
        editedHotel,
        config
      );
      navigate("/hotels/");
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

  // async function createComment(id, content) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.post(
  //       `${API}/hotel/hotels/${id}/`,
  //       content,
  //       config
  //     );
  //     console.log(res);
  //     getOneHotel(id);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // async function deleteComment(hotelId, commentId) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.delete(
  //       `${API}/hotel/hotels/${commentId}/`,
  //       config
  //     );
  //     getOneHotel(hotelId);
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <hotelsContext.Provider
      value={{
        hotels: state.hotels,
        pages: state.pages,
        oneHotel: state.oneHotel,

        createHotel,
        addRoomToHotel,
        getHotels,
        getOneHotel,
        updateHotel,
        deleteHotel,
        // createComment,
        // deleteComment,
      }}>
      {children}
    </hotelsContext.Provider>
  );
};

export default HotelsContextProvider;
