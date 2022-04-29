import React from "react";
import { readData } from "../action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Empreducer } from "../reducer/Empreducer";
import "bootstrap/dist/css/bootstrap.min.css";
const Data = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.employee);
  //console.log(list);
  useEffect(() => {
    dispatch(readData());
  }, []);
  
console.log(loading)
  return (
    <div>
      { loading ? <div>loading</div>:
          
          
          <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">MAKE_ID</th>
            <th scope="col">MAKE_NAME</th>
          </tr>
        </thead>

        
          {list.map((ele) => (
            <tbody>
              <tr>
                <td>{ele.Make_ID}</td>
                <td>{ele.Make_Name}</td>
              </tr>
            </tbody>
          ))
        }
      </table>}
    </div>
  );
};

export default Data;
