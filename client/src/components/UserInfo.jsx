import React, { useState } from "react";

const UserInfo = () => {
  const [user_info, setUser_info] = useState(null);
  return (
    <div>
      <h3 className="text-2xl">{user_info ? "My Details" : "Login"}</h3>
      <form>
        <input type="text" place />
      </form>
    </div>
  );
};

export default UserInfo;
