import React, { useState, useEffect } from "react";
import "./stacks.scss";
const BrevStacks: React.FC = (props) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <div className="plate tall-stack">
        <div className="butter falling-element"></div>
        <div className="pancake falling-element"></div>
        <div className="pancake falling-element"></div>
        <div className="plate-bottom"></div>
        <div className="shadow"></div>
      </div>
    </div>
  );
};
export default BrevStacks;
