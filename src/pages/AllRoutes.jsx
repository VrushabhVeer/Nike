import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "./Cart";
import Error from "./Error";
import Home from "./Home";
import Profile from "./Profile";
import Signup from "./Signup";
import Checkout from "./Checkout";
import Payment from "./Payment";
import Signin from "./Signin";
import Placed from "./Placed";
import SizeGuide from "../components/SizeGuide";
import Shoes from "./Shoes";
import Mens from "./Mens";
import Womens from "./Womens";

const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/mens" element={<Mens />} />
        <Route path="/womens" element={<Womens />} />
        <Route path="/shoes" element={<Shoes />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/order_placed" element={<Placed />} />
        <Route path="/size_guide" element={<SizeGuide />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </>
  );
};

export default AllRoutes;
