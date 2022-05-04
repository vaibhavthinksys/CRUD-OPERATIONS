import { React, useEffect, useState } from "react";
import bootstrap from "bootstrap";

import { useDispatch } from "react-redux";
import { createData,updateData } from "../action";

const Modals = ({ module }) => {
  const [state, setstate] = useState({});
  const [show, setshow] = useState(true);
  const [Error, setError] = useState(""); 

  useEffect(() => {
    setInitalValues();
  }, [module]);

  const setInitalValues = () => {
    setstate({
      ...module,
    });
  };

  console.log(module)
  

  const dispatch = useDispatch();

  const { id, title, price, description } = state;

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setstate({ ...state, [name]: value });
  };

  const handleChanges = (e) => {
    e.preventDefault();

    if (!id || !title || !price || !description) {
      setError("Please fill all the fields");
    } else {
      if (module && Object.keys({module}).length!=0) {
        dispatch(updateData(state,id));
      }else{
        dispatch(createData(state,id));
      }
      

      setstate({
       
      });

      setshow(!show);
      setError("");
    }
  };

  return (
    <div>
      {show ? (
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Create new Data
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                {/* ************************************************************************* */}
                {Error && <h3>{Error}</h3>}
                <form>
                  <div className="form-group">
                    <label htmlFor="id">ID</label>
                    <input
                      type="text"
                      className="form-control"
                      id="id"
                      name="id"
                      value={state.id}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      name="title"
                      value={state.title}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="price">Price:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="price"
                      name="price"
                      value={state.price}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <input
                      type="text"
                      className="form-control"
                      id="description"
                      name="description"
                      value={state.description}
                      onChange={handleInputChange}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>

                <button
                  type="button"
                  onClick={handleChanges}
                  className="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modals;
