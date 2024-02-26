import React, { useEffect, useState } from "react";

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/DIGVIJ-HUB")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="m-4 bg-gray-600 text-white text-left p-4 text-3xl">
      <div className="flex gap-12">
        <div>
          <img src={data.avatar_url} alt="" width={300} />
        </div>
        <div>
          <h6>Name : {data.name}</h6>
          <h6>Username : {data.login}</h6>
          <h6>Link : {data.html_url}</h6>
        </div>
      </div>
    </div>
  );
}

export default Github;
