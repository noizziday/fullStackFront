import React, { useReducer } from "react";
import axios from "axios";

export const hotelsContext = React.createContext();

const INIT_STATE = {
  hotels: [],
  pages: 0,
  // categories: [],
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
    // case "GET_CATEGORIES":
    //   return { ...state, categories: action.payload };
    case "GET_ONE_HOTEL":
      return { ...state, oneHotel: action.payload };
    default:
      return state;
  }
}

const API = "http://34.159.95.125";

const HotelsContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  // async function getCategories() {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/category/list/`, config);
  //     // console.log(res);
  //     dispatch({
  //       type: "GET_CATEGORIES",
  //       payload: res.data.results,
  //     });
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

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
      navigate("/hotel/hotels");
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
      const res = await axios(
        `${API}/hotel/hotels/${window.location.search}`,
        config
      );
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

  // async function toggleLike(id) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios(`${API}/products/${id}/toggle_like/`, config);
  //     getProducts();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  async function createComment(id, content) {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(
        `${API}/hotel/hotels/${id}/`,
        content,
        config
      );
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

  // async function createCategory(category) {
  //   try {
  //     const tokens = JSON.parse(localStorage.getItem("tokens"));
  //     const Authorization = `Bearer ${tokens.access}`;
  //     const config = {
  //       headers: {
  //         Authorization,
  //       },
  //     };
  //     const res = await axios.post(`${API}/category/`, category, config);
  //     getCategories();
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <hotelsContext.Provider
      value={{
        hotels: state.hotels,
        pages: state.pages,
        // categories: state.categories,
        oneHotel: state.oneHotel,

        createHotel,
        getHotels,
        getOneHotel,
        updateHotel,
        deleteHotel,
        createComment,
        deleteComment,
      }}>
      {children}
    </hotelsContext.Provider>
  );
};

export default HotelsContextProvider;
