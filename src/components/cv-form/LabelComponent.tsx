import { ChangeEvent } from "react";

export default function LabelComponent({
  name,
  type = "text",
  value,
  handlerFunction,
}: LabelComponentProps) {
  return (
    <>
      <label>
        {name}
        <input
          type={type}
          placeholder={name}
          value={value === null ? "" : value}
          onChange={handlerFunction}
        ></input>
      </label>
    </>
  );
}

interface LabelComponentProps {
  name: string;
  type?: string;
  value?: string | number | null;
  handlerFunction: (event: ChangeEvent<HTMLInputElement>) => void;
}
