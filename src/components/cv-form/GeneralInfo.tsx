import { SetStateAction, useState } from "react";
import LabelComponent from "./LabelComponent";

export default function GeneralInfo({ generalInfo }) {
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
