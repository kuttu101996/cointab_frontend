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
    <div>
      {data.length > 1 ? (
        data.map((ele) => <Card key={ele.id} ele={ele} />)
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
