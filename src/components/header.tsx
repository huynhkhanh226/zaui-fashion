import headerLogoImage from "static/header-logo.svg";

export default function Header() {
  return (
    <div className="h-14 w-full flex items-center px-4 py-2">
      <img src={headerLogoImage} className="max-h-full flex-none" />
    </div>
  );
}
