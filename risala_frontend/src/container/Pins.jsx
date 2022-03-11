import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { CreatePin, Feed, NavBar, PinDetail, Search } from "../components";

const Pins = ({ user }) => {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <div className="px-2 md:px-5">
      <div className="bg-gray-50">
        <NavBar
          searchTerm={searchTerm}
          setSearchTerm={setsearchTerm}
          user={user && user}
        ></NavBar>
      </div>
      <div className="h-full">
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/category/:categoryId" element={<Feed />} />
          <Route
            path="/pin-detail?:pinId"
            element={<PinDetail user={user} />}
          />
          <Route path="/create-pin" element={<CreatePin user={user} />} />
          <Route
            path="/search"
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setsearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
