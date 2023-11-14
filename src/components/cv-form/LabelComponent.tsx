export default function LabelComponent({
  name,
  type = "text",
  value,
  handlerFunction,
}) {
  return (
    <>
      <label>
        {name}
        <input
          type={type}
          placeholder={name}
          value={value}
          onChange={handlerFunction}
        ></input>
      </label>
    </>
  );
}
