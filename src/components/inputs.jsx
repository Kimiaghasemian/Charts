import React from "react";
import "../styles/input.css";
export default function Inputs() {
  return (
    <div className="statistics">
      <div>
        <span>خالی</span>
        <button
          style={{
            backgroundColor: "blue",
          }}></button>
      </div>
      <div>
        <span>غلط</span>
        <button
          style={{
            backgroundColor: "red",
          }}></button>
      </div>
      <div>
        <span>درست</span>
        <button
          style={{
            backgroundColor: "green",
          }}></button>
      </div>
    </div>
  );
}
