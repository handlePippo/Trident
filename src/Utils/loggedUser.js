import React, { useEffect, useState } from "react";

const LoggedUser = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});

  const currentUser = usersData
    .filter((el) => el.email === currentUserData.email)
    .map((el) => `Benvenuto ${el.name} ${el.surname}`);

  useEffect(() => {
    let users = JSON.parse(localStorage.getItem("users") || "[]");
    let currentUser = JSON.parse(
      localStorage.getItem("currentUserData") || "{}"
    );
    if (users.length > 0) {
      setUsersData(users);
    }
    if (Object.values(currentUser).length > 0) {
      setCurrentUserData(currentUser);
    }
  }, []);

  return <div>{<p>{currentUser}</p>}</div>;
};

export default LoggedUser;
