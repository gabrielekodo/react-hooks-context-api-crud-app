import React, { useContext, useEffect } from "react";
import image from "../assets/avatar.png";
import { Link } from "react-router-dom";
import { GlobalContext } from "../context/GlobalState";

export const UserList = () => {
  const { users, removeUser } = useContext(GlobalContext);
  // console.log(users);

  return (
    <div>
      <ul className="list-group">
        {users.length > 0 ? (
          users.map((user) => {
            return (
              <li
                key={user.id}
                className="list-group-item mb-2 d-flex justify-content-between"
              >
                <div className="d-flex ">
                  <img src={image} alt="avatar" style={img} />

                  <h4>{user.name}</h4>
                </div>
                <div>
                  <Link
                    to={`/edit/${user.id}`}
                    className="btn btn-warning mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => removeUser(user.id)}
                    className="btn btn-danger"
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })
        ) : (
          <h4 className="text-center">No Users to display</h4>
        )}
      </ul>
    </div>
  );
};
const img = {
  width: "40px",
  height: "40px",
  marginRight: "20px",
};
