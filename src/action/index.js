import axios from "axios";
import { useDispatch as dispatch } from "react-redux";

export const readData = () => (dispatch) => {
  dispatch({
    type: "READ_REQUEST",
  });
  const res = axios.get("https://fakestoreapi.com/products").then((res) => {
    //console.log(res.data)
    dispatch({
      type: "READ_DATA",
      payload: res.data,
    });
  });
};
export const deleteData = (id) => (dispatch) => {
  const del = axios
    .delete(`https://fakestoreapi.com/products/${id}`)
    .then(() => {
      console.log(id);
      dispatch({
        type: "DELETE_DATA",
        id,
      });
    });
};




export const createData = (user) => (dispatch) => {
  try {
    const data = axios
      .post("https://fakestoreapi.com/products", user)
      .then((res) => {
        console.log(user);
        console.log(res);
        console.log(res.data);
        console.log(res.request.status);

        dispatch({
          type: "CREATE_DATA",
          payload: res.data,
        });
        return {
          type: "CREATE_DATA_SUCCESS",
        };
      });
  } catch (e) {
    console.log(e);
  }
};


export const updateData = (user ,id) => (dispatch) => {
    try {
      const data = axios
        .put(`https://fakestoreapi.com/products/${id}`, user)
        .then((res) => {
          
          dispatch({
            type: "UPDATE_DATA",
            
          });
          
        });
    } catch (e) {
      console.log(e);
    }
  };
  



