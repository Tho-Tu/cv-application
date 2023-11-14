import { SetStateAction, useState } from "react";
import LabelComponent from "./LabelComponent";

export default function GeneralInfo({ generalInfo }) {
  // const [fullName, setFullName] = useState("");
  // const [email, setEmail] = useState("");
  // const [phoneNumber, setphoneNumber] = useState("");
  // const [address, setAddress] = useState("");

  // const handleFullName = (e: { target: { value: SetStateAction<string> } }) => {
  //   setFullName(e.target.value);
  // };

  // const handleEmail = (e: { target: { value: SetStateAction<string> } }) => {
  //   setEmail(e.target.value);
  // };

  // const handlePhoneNumber = (e: {
  //   target: { value: SetStateAction<string> };
  // }) => {
  //   setphoneNumber(e.target.value);
  // };

  // const handleAddress = (e: { target: { value: SetStateAction<string> } }) => {
  //   setAddress(e.target.value);
  // };
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <form>
        <LabelComponent
          name={"Full Name"}
          value={generalInfo.fullName}
          handlerFunction={generalInfo.handleFullName}
        />
        <LabelComponent
          name={"Email"}
          type={"email"}
          value={generalInfo.email}
          handlerFunction={generalInfo.handleEmail}
        />
        <LabelComponent
          name={"Phone number"}
          type={"number"}
          value={generalInfo.phoneNumber}
          handlerFunction={generalInfo.handlePhoneNumber}
        />
        <LabelComponent
          name={"Address"}
          value={generalInfo.address}
          handlerFunction={generalInfo.handleAddress}
        />
      </form>
    </div>
  );
}
