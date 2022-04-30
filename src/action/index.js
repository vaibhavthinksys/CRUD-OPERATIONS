import axios from "axios";
import  {useDispatch as dispatch} from "react-redux";

export const readData=()=> (dispatch)=>{
    dispatch({
        type: "READ_REQUEST",
        
    });
    const res=axios.get("https://fakestoreapi.com/products").then(res=>{
       //console.log(res.data)
       dispatch({
           type:"READ_DATA",
           payload: res.data
       });
       
    

    })
    

}
export const deleteData=(id)=>(dispatch)=>{
const del=axios.delete(`https://fakestoreapi.com/products/${id}`)
.then(()=>{
    console.log(id)
    dispatch({
        type:"DELETE_DATA",
        id
    })
})
    

}
