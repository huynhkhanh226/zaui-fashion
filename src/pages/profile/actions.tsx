import {
  OrderHistoryIcon,
  PackageIcon,
  ProfileIcon,
  VoucherIcon,
} from "components/vectors";

export default function ProfileActions() {
  return (
    <div className="bg-white rounded-lg p-4 grid grid-cols-4 gap-4 border-[0.5px] border-black/15">
      {[
        {
          label: "Thông tin tài khoản",
          icon: ProfileIcon,
        },
        {
          label: "Đổi voucher",
          icon: VoucherIcon,
        },
        {
          label: "Theo dõi đơn hàng",
          icon: PackageIcon,
        },
        {
          label: "Lịch sử mua hàng",
          icon: OrderHistoryIcon,
        },
      ].map((action) => (
        <div className="flex flex-col gap-2 items-center cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-[#EBEFF7] flex items-center justify-center">
            <action.icon active />
          </div>
          <div className="text-2xs text-center">{action.label}</div>
        </div>
      ))}
    </div>
  );
}
