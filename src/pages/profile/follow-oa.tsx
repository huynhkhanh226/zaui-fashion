import Button from "components/button";
import HorizontalDivider from "components/horizontal-divider";
import { VerifiedOAIcon } from "components/vectors";
import { useEffect } from "react";
import oaLogoImage from "static/oa-logo.svg";
import { showOAWidget } from "zmp-sdk";

export function FollowOALegacy() {
  return (
    <div className="bg-white rounded-lg p-4 space-y-2">
      <div className="text-sm text-subtitle">
        Quan tâm OA để nhận các đặc quyền ưu đãi
      </div>
      <HorizontalDivider />
      <div className="flex space-x-4 items-center pt-2">
        <div className="relative">
          <img src={oaLogoImage} />
          <VerifiedOAIcon className="absolute right-0 bottom-0" />
        </div>
        <div className="flex-1 overflow-hidden space-y-0.5">
          <div>Clothing store</div>
          <div className="text-sm text-subtitle">Official Account</div>
        </div>
        <Button small primary>
          Quan tâm
        </Button>
      </div>
    </div>
  );
}

export default function FollowOAWidget() {
  useEffect(() => {
    showOAWidget({
      id: "oaWidget",
      guidingText: "Quan tâm OA để nhận các đặc quyền ưu đãi",
      color: "#F7F7F8",
      onStatusChange: (status) => {
        console.log(status);
      },
    });
  }, []);

  return <div id="oaWidget" />;
}
