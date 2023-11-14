import { useState } from "react";

export default function PreviewGeneralInfo() {
  const [text, setText] = useState("");
  return (
    <div className="preview-general-info">
      <div className="general-full-name">Taylor Swift</div>
      <div className="general-email">taylorswift@email.com</div>
      <div className="general-phone-number">123 456 789</div>
      <div className="general-address">
        132, My Street, Kingston, New York 12401
      </div>
    </div>
  );
}
