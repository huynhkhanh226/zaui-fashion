import Tabs from "./tabs";

export default function CategoryTabs() {
  return (
    <Tabs
      items={["Tất cả", "Nam", "Nữ", "Trẻ em"]}
      selectedTab={"Tất cả"}
      onSelect={() => {}}
      renderLabel={(item) => item}
    />
  );
}
