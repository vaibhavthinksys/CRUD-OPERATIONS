import {React , useState} from "react";
import { readData } from "../action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const Data = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.employee);
  //console.log(list);
  useEffect(() => {
    dispatch(readData());
  }, []);

  const [search, setsearch] = useState("")
  const searchList=list;
  console.log(search.toLowerCase())
  return (
    
    <div>
      <div> 
        <input type ="text" placeholder="search"
        onChange={(e)=>{setsearch(e.target.value)}} />
        </div>
      {loading ? (
        <div className="loader"></div>
      ) : (
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">MAKE_ID</th>
              <th scope="col">MAKE_NAME</th>
            </tr>
          </thead>

          {searchList.filter((ele)=>{
            if (search==""){
              return ele
            }else if(ele.Make_Name.includes(search.toLowerCase())){
              return ele
            }
          }).map((ele) => (
            <tbody key={ele.key}>
              <tr >
                <td>{ele.Make_ID}</td>
                <td>{ele.Make_Name}</td>
              </tr>
            </tbody>
          ))}
        </table>
      )}
    </div>
  );
};

export default Data;
