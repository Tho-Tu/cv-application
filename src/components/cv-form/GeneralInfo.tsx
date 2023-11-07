import { useState } from "react";

export default function GeneralInfo() {
  const [text, setText] = useState("");
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <form>
        <label>Full Name</label>
        <input placeholder="First and Last name"></input>
        <label>Email</label>
        <input placeholder="Email"></input>
        <label>Phone number</label>
        <input placeholder="Phone number"></input>
        <label>Address</label>
        <input placeholder="Address"></input>
      </form>
    </div>
  );
}
