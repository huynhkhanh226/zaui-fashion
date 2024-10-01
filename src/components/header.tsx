import { useAtomValue } from "jotai";
import {
  UIMatch,
  useLocation,
  useMatches,
  useNavigate,
} from "react-router-dom";
import { categoriesState } from "state";
import headerLogoImage from "static/header-logo.svg";
import { BackIcon } from "./vectors";
import { useMemo } from "react";

export default function Header() {
  const categories = useAtomValue(categoriesState);
  const navigate = useNavigate();
  const location = useLocation();
  const matches = useMatches() as UIMatch<
    undefined,
    {
      title?: string | Function;
      logo?: boolean;
      back?: boolean;
    }
  >[];
  const lastMatch = matches[matches.length - 1];

  const title = useMemo(() => {
    if (lastMatch.handle) {
      if (typeof lastMatch.handle.title === "function") {
        return lastMatch.handle.title({ categories, params: lastMatch.params });
      } else {
        return lastMatch.handle.title;
      }
    }
  }, [matches, categories]);

  const showBack =
    location.key !== "default" && lastMatch.handle?.back !== false;

  if (lastMatch.handle?.logo) {
    return (
      <div className="h-14 w-full flex items-center px-4 py-2">
        <img src={headerLogoImage} className="max-h-full flex-none" />
      </div>
    );
  }

  return (
    <div className="h-12 w-full flex items-center pl-4 pr-[106px] py-2 space-x-1">
      {showBack && (
        <div className="p-2 cursor-pointer" onClick={() => navigate(-1)}>
          <BackIcon />
        </div>
      )}
      <div className="text-xl font-medium truncate">{title}</div>
    </div>
  );
}
