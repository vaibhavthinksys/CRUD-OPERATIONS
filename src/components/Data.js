import { React, useState } from "react";
import { readData, deleteData } from "../action";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Modals from "./Modals";

import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const Data = () => {
  const dispatch = useDispatch();
  const { list, loading } = useSelector((state) => state.employee);
  //console.log(list);

  useEffect(() => {
    dispatch(readData());
  }, []);


  const [Modaldata, setModaldata] = useState({
    id: "",
    title: "",
    price: "",
    description: "",
  });


  const [search, setSearch] = useState("");
  const searchList = list;
  console.log(search.toLowerCase());
  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Launch demo modal
      </button>
      <Modals module={Modaldata} />

      {loading ? (
        <div className="loader"></div>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Title</th>
              <th scope="col">Price</th>
              <th scope="col">Description</th>

              <th scope="col">OPERATIONS</th>
            </tr>
          </thead>

          {searchList
            .filter((ele) => {
              if (search == "") {
                return ele;
              } else if (
                ele.title.toLowerCase().includes(search.toLowerCase())
              ) {
                return ele;
              }
            })
            .map((ele) => (
              <tbody key={ele.id}>
                <tr>
                  <td>{ele.id}</td>
                  <td>{ele.title}</td>
                  <td>{ele.price}</td>
                  <td>{ele.description}</td>
                  <td>
                    <button onClick={() => dispatch(deleteData(ele.id))}>
                      delete
                    </button>
                  </td>
                  <td>
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => setModaldata(ele)}
                    >
                      Update
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      )}
    </div>
  );
};

export default Data;
