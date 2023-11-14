export default function PreviewGeneralInfo({ generalInfo }) {
  return (
    <div className="preview-general-info">
      <div className="general-full-name">{generalInfo.fullName}</div>
      <div className="general-email">{generalInfo.email}</div>
      <div className="general-phone-number">{generalInfo.phoneNumber}</div>
      <div className="general-address">{generalInfo.address}</div>
    </div>
  );
}
