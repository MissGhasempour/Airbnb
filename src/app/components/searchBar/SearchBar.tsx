'use client'
import { useState } from "react";
import ExperienceSearch from "./experienceSearch";
import StaySearch from "./staySearch";
export default function SearchBar() {
  const [stay, setStay] = useState(true);
  const stays = () => {
    setStay(true)
    console.log("stay");
  };
  const experience = () => {
    setStay(false)
    console.log("ex");
  };
  return (
    <div>
      <div className="flex relative left-70">
        {/* {stays ? (<SearchBar />) : (<ExperienceSearch />)} */}
        <div className="p-2" onClick={stays}>
          Stays
        </div>
        <div className="p-2" onClick={experience}>
          Experiences
        </div>
      </div>
      <div className="my-6">{stay ? <StaySearch /> : <ExperienceSearch />}</div>
    </div>
  );
}
