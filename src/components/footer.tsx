import { useMatches, useNavigate } from "react-router-dom";
import { CartIcon, CategoryIcon, HomeIcon, ProfileIcon } from "./vectors";

const NAV_ITEMS = [
  {
    name: "Trang chủ",
    path: "/",
    icon: HomeIcon,
  },
  {
    name: "Danh mục",
    path: "/category",
    icon: CategoryIcon,
  },
  {
    name: "Giỏ hàng",
    path: "/cart",
    icon: CartIcon,
  },
  {
    name: "Thành viên",
    path: "/profile",
    icon: ProfileIcon,
  },
];

export default function Footer() {
  const navigate = useNavigate();
  const matches = useMatches();

  return (
    <div
      className="w-full px-4 pt-2 grid"
      style={{
        gridTemplateColumns: `repeat(${NAV_ITEMS.length}, 1fr)`,
        paddingBottom: `max(16px, env(safe-area-inset-bottom)`,
      }}
    >
      {NAV_ITEMS.map((item) => {
        const isActive =
          matches.length > 1 && matches[1].pathname === item.path;
        return (
          <div
            key={item.path}
            className="flex flex-col items-center space-y-0.5 p-1 pb-0.5 cursor-pointer active:scale-105"
            onClick={() => {
              navigate(item.path);
            }}
          >
            <div className="w-6 h-6 flex justify-center items-center">
              <item.icon active={isActive} />
            </div>
            <div className={`text-2xs ${isActive ? "text-primary" : ""}`}>
              {item.name}
            </div>
          </div>
        );
      })}
    </div>
  );
}
