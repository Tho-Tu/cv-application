import { GeneralData } from "../cv-form/GeneralInfo";

interface PreviewGeneralInfoProps {
  generalInfo: GeneralData;
}

export default function PreviewGeneralInfo({
  generalInfo,
}: PreviewGeneralInfoProps) {
  return (
    <div className="preview-general-info">
      <div className="general-full-name">{generalInfo.fullName}</div>
      <div className="general-email">{generalInfo.email}</div>
      <div className="general-phone-number">
        {typeof generalInfo.phoneNumber === "number"
          ? generalInfo.phoneNumber.toString()
          : generalInfo.phoneNumber}
      </div>
      <div className="general-address">{generalInfo.address}</div>
    </div>
  );
}
