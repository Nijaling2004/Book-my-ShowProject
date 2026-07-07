import React from "react";
import "./App.css";
import MovieCard from "./jun-19/MovieCard";
import { movieData } from "./jun-19/movie";
import ClassCounter from "./jun-24/ClassCounter";
import Click from "./jun-24/Click";
import LikeButton from "./jun-24/LikeButton";
import ClassClick from "./jun-24/ClassClick";
import Fan from "./jun-24/Fan";
import Chair from "./jun-24/Chair";
import Routing from "./jun-26/Routing";
import Count from "./jun-29/Count";
import Basic from "./jun-29/Basic";
import OnlyOnce from "./jun-29/OnlyOnce";
import Dependency from "./jun-29/Dependency";
import Wall from "./jun-29/Wall";
import RestaurantCard from "./jul-6/condition/RestaurantCard";
import GetApiData from "./jun-29/GetApiData";
import PostDataApi from "./jun-29/PostDataApi";
import Mounting from "./jul-7/lifecycle/Mounting";
import MountUpdateUnmount from "./jul-7/lifecycle/MountUpdateUnmount";

function App() {
  return (
    <div>
     <MountUpdateUnmount/>
    </div>
  );
}

export default App;
