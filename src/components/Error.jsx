import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <img
        src={
          "https://i.postimg.cc/Jz7tCrDx/51a42552-8cd4-4d32-aafc-ab6dccb4554e.png"
        }
        alt={"Error"}
        style={{ width: "350px", height: "auto" }}
      />
      <Link className="btn btn-dark" to="/">
        Volver a Home
      </Link>
    </div>
  );
};

export default Error;
