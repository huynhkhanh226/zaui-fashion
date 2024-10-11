import { Key, ReactNode, useRef } from "react";
import { ChevronDown, ChevronRight } from "./vectors";

export interface DropdownProps<T> {
  renderTitle?: (selectedItem?: T) => ReactNode;
  renderItem?: (item: T) => string;
  renderKey?: (item: T) => string;
  items: T[];
  value?: T;
  onChange: (selectedItem?: T) => void;
}

export default function Dropdown<T>(props: DropdownProps<T>) {
  return (
    <div className="flex-none h-8 flex justify-center items-center border border-black/15 rounded-full px-3 space-x-1.5 relative">
      <select
        className="absolute inset-0 opacity-0 cursor-pointer"
        onChange={(e) => {
          const key = e.currentTarget.value;
          const item = props.items.find((item, i) =>
            props.renderKey ? key === props.renderKey(item) : key == String(i)
          );
          props.onChange(item);
        }}
      >
        {props.items.map((item, i) => (
          <option
            value={props.renderKey ? props.renderKey(item) : i}
            selected={props.value === item}
          >
            {props.renderItem ? props.renderItem(item) : String(item)}
          </option>
        ))}
      </select>
      <div className="text-xs">
        {props.renderTitle
          ? props.renderTitle(props.value)
          : String(props.value)}
      </div>
      <ChevronDown />
    </div>
  );
}
