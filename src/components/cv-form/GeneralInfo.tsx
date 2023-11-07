import { SetStateAction, useState } from "react";

export default function GeneralInfo() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setphoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleFullName = (e: { target: { value: SetStateAction<string> } }) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
    setEmail(e.target.value);
  };

  const handlePhoneNumber = (e: {
    target: { value: SetStateAction<string> };
  }) => {
    setphoneNumber(e.target.value);
  };

  const handleAddress = (e: { target: { value: SetStateAction<string> } }) => {
    setAddress(e.target.value);
  };
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <form>
        <label>
          Full Name
          <input
            type="text"
            placeholder="First and Last name"
            value={fullName}
            onChange={handleFullName}
          ></input>
        </label>
        <label>
          Email
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={handleEmail}
          ></input>
        </label>
        <label>
          Phone number
          <input
            type="text"
            placeholder="Phone number"
            value={phoneNumber}
            onChange={handlePhoneNumber}
          ></input>
        </label>
        <label>
          Address
          <input
            type="text"
            placeholder="Address"
            value={address}
            onChange={handleAddress}
          ></input>
        </label>
        <button
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
