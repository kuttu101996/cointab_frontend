import React, { useState } from "react";
import Card from "../Card/Card";

function Home() {
  const [data, setData] = useState([]);

  const showUsers = async () => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((result) => setData(result));
  };
  return (
    <div className="flex flex-1 mt-5 items-center justify-center w-full">
      {data.length > 1 ? (
        <div className="grid grid-cols-3 gap-4">
          {data.map((ele) => (
            <Card key={ele.id} ele={ele} />
          ))}
        </div>
      ) : (
        <div>
          <button
            onClick={showUsers}
            className="rounded-md p-2 bg-orange-700 hover:bg-orange-600 ease-in-out duration-200 text-white font-semibold"
          >
            All Users
          </button>
        </div>
      )}
    </div>
  );
}

export default Home;
