import axios from "axios";
import  {useDispatch as dispatch} from "react-redux";

export const readData=()=> (dispatch)=>{
    dispatch({
        type: "READ_REQUEST",
        
    });
    const res=axios.get("https://vpic.nhtsa.dot.gov/api/vehicles/getallmakes?format=json").then(res=>{
       //console.log(res.data.Results)
       dispatch({
           type:"READ_DATA",
           payload: res.data.Results
       });
       
    

    })
    

}
