import { useState } from "react";

export default function Education() {
  const [text, setText] = useState("");
  return (
    <div className="education">
      <h2>Education</h2>
      <button>+ Education</button>
      <form></form>
    </div>
  );
}
