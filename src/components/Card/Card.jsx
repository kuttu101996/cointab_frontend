import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/userProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Card({ ele }) {
  const { setUser } = useContext(UserContext);
  const [isPresent, setIsPresent] = useState(false);
  ele = { posts: [{}], ...ele };

  const addUser = async () => {
    await fetch(`http://localhost:9000/users/insert-user`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(ele),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.message === "Success") {
          toast.success("User added Successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setIsPresent(true);
          setUser(ele);
        } else if (result.message === "User already exists") {
          toast.info("User already exist", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          setIsPresent(true);
          setUser(ele);
        }
      });
  };

  return (
    <div className="border border-gray-200 mx-auto p-8 w-80">
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Name :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.name}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Email :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.email}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Phone :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.phone}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Website :</p>
        <p className="text-sm ml-3 font-medium text-gray-900"> {ele.website}</p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">City :</p>
        <p className="text-sm ml-3 font-medium text-gray-900">
          {ele.address.city}
        </p>
      </div>
      <div className="flex mb-1 justify-between">
        <p className="text-left text-sm font-normal text-gray-500">Company :</p>
        <p className="text-sm ml-3 font-medium text-gray-900">
          {ele.company.name}
        </p>
      </div>
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
            className="rounded-lg mt-2 w-32 bg-orange-800 hover:bg-orange-700 px-3 py-2 text-sm font-semibold text-white shadow-sm 
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
