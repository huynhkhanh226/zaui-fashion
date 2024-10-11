import { PropsWithChildren, ReactNode } from "react";
import { ChevronRight } from "./vectors";

export interface SectionProps {
  title: ReactNode;
  viewMore?: () => void;
}

export default function Section(props: PropsWithChildren<SectionProps>) {
  return (
    <div className="bg-background pt-1">
      <div className="flex items-center justify-between px-2">
        <div className="text-sm font-medium p-2 truncate">{props.title}</div>
        {props.viewMore && (
          <div
            className="text-sm font-medium text-primary flex items-center space-x-1 p-2 cursor-pointer flex-none"
            onClick={props.viewMore}
          >
            <span>Xem thêm</span>
            <ChevronRight />
          </div>
        )}
      </div>
      {props.children}
    </div>
  );
}
