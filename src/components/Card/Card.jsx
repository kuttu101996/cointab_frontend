import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userProvider";

function Card({ ele }) {
  const { setUser } = useContext(UserContext);
  const [isPresent, setIsPresent] = useState(false);
  ele = { posts: [{}], ...ele };

  const addUser = async () => {
    await fetch(`https://cointab-backend-uwqe.onrender.com/users`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ele),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Success") {
          setIsPresent(true);
          setUser(ele);
        } else if (result.message === "User already exists") {
          alert(`User Exists`);
          setIsPresent(true);
          setUser(ele);
        }
      });
  };

  return (
    <div className="border border-gray-200 w-1/3 m-auto">
      <h1>Name : {ele.name}</h1>
      <h2>Email : {ele.email}</h2>
      <h2>Phone : {ele.phone}</h2>
      <h2>Website : {ele.website}</h2>
      <h2>City : {ele.address.city}</h2>
      <h2>Company : {ele.company.name}</h2>
      <div className="flex w-full justify-end">
        {isPresent ? (
          <button
            type="button"
            className="rounded-lg m-3 px-3 py-2 text-sm font-semibold text-white shadow-sm bg-black hover:bg-black/80
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            <Link to={`/post/${ele.id}`}>Open</Link>
          </button>
        ) : (
          <button
            type="button"
            onClick={addUser}
            className="rounded-lg m-3 bg-orange-800 hover:bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm 
          focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
