import React, { useEffect, useMemo, useState } from "react";

const LoggedUser = () => {
  const [usersData, setUsersData] = useState([]);
  const [currentUserData, setCurrentUserData] = useState({});

  const currentUser = useMemo(() => {
    return usersData
      .filter((el) => el.email === currentUserData.email)
      .map((el) => `Benvenuto ${el.name} ${el.surname}`);
  }, [usersData, currentUserData]);

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

  return (
    <div className='logged-user'>
      {currentUser.length > 0 ? (
        <div>
          <p className='logged-user-p'>{currentUser}</p>
        </div>
      ) : (
        <p>Effettua il login o registrati</p>
      )}
    </div>
  );
};

export default LoggedUser;
