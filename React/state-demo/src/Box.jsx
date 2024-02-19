import "./Box.css"
import { useState } from "react";

function Box({ isActive }) {
    return <div
        className="Box"
        style={{ backgroundColor: isActive ? "aquamarine" : "red" }}></div>
}

export default Box;