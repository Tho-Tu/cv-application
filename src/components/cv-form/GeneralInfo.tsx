import LabelComponent from "./LabelComponent";

interface GeneralInfoProps {
  generalInfo: {
    generalInfo: GeneralData;
    handleFullName: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleEmail: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handlePhoneNumber: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleAddress: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
}

export interface GeneralData {
  fullName: string;
  email: string;
  phoneNumber?: string | number | null;
  address: string;
}

export default function GeneralInfo({ generalInfo }: GeneralInfoProps) {
  return (
    <div className="general-info">
      <h2>General Info</h2>
      <form>
        <LabelComponent
          name={"Full Name"}
          value={generalInfo.generalInfo.fullName}
          handlerFunction={generalInfo.handleFullName}
        />
        <LabelComponent
          name={"Email"}
          type={"email"}
          value={generalInfo.generalInfo.email}
          handlerFunction={generalInfo.handleEmail}
        />
        <LabelComponent
          name={"Phone number"}
          type={"number"}
          value={generalInfo.generalInfo.phoneNumber}
          handlerFunction={generalInfo.handlePhoneNumber}
        />
        <LabelComponent
          name={"Address"}
          value={generalInfo.generalInfo.address}
          handlerFunction={generalInfo.handleAddress}
        />
      </form>
    </div>
  );
}
