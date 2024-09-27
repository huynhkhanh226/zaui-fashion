import { useNavigate } from "react-router-dom";
import Banners from "./banners";
import SearchBar from "./search-bar";
import Tabs from "components/tabs";

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-full bg-subtle space-y-2">
      <div className="bg-background pt-2">
        <SearchBar />
        <Banners />
      </div>
      <div className="bg-background">
        <Tabs
          items={["Tất cả", "Nam", "Nữ", "Trẻ em"]}
          selectedTab={"Tất cả"}
          onSelect={() => {}}
          renderLabel={(item) => item}
        />
      </div>
    </div>
  );
};

export default HomePage;
