import React from "react";
import { useEffect, useState } from "react";

const GitUser = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://api.github.com/users");
      const data = await response.json();
      setUser(data);
    };

    fetchData();
  }, []);

  return (
    <div className="bg-red-400">
        {user.map((user)=>{
            return(
                <div key={user.id}>
                    <div className="p-20">
                        <img src={user.avatar_url} alt="" width={100} height={100}/>
                        <p>{user.login}</p>
                    </div>
                </div>
            )
        })}
    </div>
  )
};

export default GitUser;
