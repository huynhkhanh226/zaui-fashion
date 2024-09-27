export interface TabsProps<T> {
  items: T[];
  selectedTab: T;
  onSelect: (item: T) => void;
  renderLabel: (item: T) => string;
}

export default function Tabs<T>(props: TabsProps<T>) {
  return (
    <div
      className="grid h-11 border-b-[0.5px] border-black/10"
      style={{
        gridTemplateColumns: `repeat(${props.items.length}, minmax(0, 1fr))`,
      }}
    >
      {props.items.map((item) => (
        <div
          className="h-full flex flex-col px-3 cursor-pointer"
          onClick={() => props.onSelect(item)}
        >
          <div className="flex-1 flex items-center justify-center">
            <span
              className={"truncate font-medium ".concat(
                item === props.selectedTab ? "" : "text-inactive"
              )}
            >
              {props.renderLabel(item)}
            </span>
          </div>
          {props.selectedTab === item && (
            <div className="bg-tabIndicator h-[1.5px] rounded-t-sm -mt-px" />
          )}
        </div>
      ))}
    </div>
  );
}
