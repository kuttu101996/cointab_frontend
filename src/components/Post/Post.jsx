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
    await fetch(`https://cointab-backend-uwqe.onrender.com/posts`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "Success") {
          alert(`${result.message}`);
          setIsPresent(true);
        }
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${Number(userId)}`)
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      });
  }, [userId]);

  return (
    <div>
      <div className="flex flex-1 w-full justify-around py-3 border-b-2">
        <h1 className="font-semibold text-2xl">Cointab SE-ASSIGNMENT</h1>
        <div className="flex w-1/3 justify-center">
          {isPresent ? (
            <DownloadExcelButton userId={userId} posts={data} />
          ) : (
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
      <div className="grid grid-cols-3 w-[1300px] m-auto gap-4 mt-10">
        {data.length > 0 &&
          data.map((ele) => (
            <div key={ele.id} className="w-96 h-44 rounded-md border m-auto">
              <div className="p-4">
                <h1 className="font-semibold text-base">{ele.title}</h1>
                <p className="mt-3 text-sm text-gray-600">{ele.body}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Post;
