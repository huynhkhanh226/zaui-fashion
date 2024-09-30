import { useNavigate } from "react-router-dom";
import Banners from "./banners";
import SearchBar from "./search-bar";
import Tabs from "components/tabs";
import Category from "./category";
import FlashSales from "./flash-sales";
import HorizontalDivider from "components/horizontal-divider";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-subtle">
      <div className="bg-background pt-2">
        <SearchBar />
        <Banners />
      </div>
      <div className="bg-background space-y-2 mt-2">
        <Tabs
          items={["Tất cả", "Nam", "Nữ", "Trẻ em"]}
          selectedTab={"Tất cả"}
          onSelect={() => {}}
          renderLabel={(item) => item}
        />
        <Category />
      </div>
      <HorizontalDivider />
      <FlashSales />
    </div>
  );
};

export default HomePage;
