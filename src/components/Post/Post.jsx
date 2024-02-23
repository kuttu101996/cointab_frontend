import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import UserContext from "../../context/userProvider";
import DownloadExcelButton from "../DownloadExcelButton/DownloadExcelButton";

function Post() {
  const { userId } = useParams();
  const { user } = useContext(UserContext);
  const [data, setData] = useState([]);
  const [isPresent, setIsPresent] = useState(false);

  const addPosts = async () => {
    await fetch(
      `https://cointab-backend-uwqe.onrender.com/users/${Number(userId)}/posts`,
      {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Success") {
          alert(`${result.addition_message}`);
          setIsPresent(true);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Number(userId)}`)
      .then((res) => res.json())
      .then((result) => setData(result));
  }, [userId]);

  return (
    <>
      <div className="flex flex-1 w-full justify-around py-3">
        <div className="flex w-1/3 justify-between">
          {isPresent ? (
            <DownloadExcelButton userId={userId} posts={data} />
          ) : (
            // <button
            //   type="button"
            //   className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            // >
            //   Download In Excel
            // </button>
            <button
              onClick={addPosts}
              type="button"
              className="rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-600/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Bulk Add
            </button>
          )}
        </div>
      </div>
      <h1 className="font-semibold text-3xl text-center pb-2">{user.name}</h1>
      <h1 className="font-semibold text-xl text-center pb-4">
        Company: {user.company.name}
      </h1>
      {data.length > 0 &&
        data.map((ele) => (
          <div key={ele.id} className="w-[300px] rounded-md border m-auto">
            <div className="p-4">
              <h1 className="font-semibold text-base">{ele.title}</h1>
              <p className="mt-3 text-sm text-gray-600">{ele.body}</p>
            </div>
          </div>
        ))}
    </>
  );
}

export default Post;
