import { SearchIcon } from "components/vectors";

export default function SearchBar() {
  return (
    <div className="px-4">
      <div className="relative w-full">
        <input
          className="w-full h-12 pl-12 pr-3 bg-input text-lg rounded-lg outline-none placeholder:text-inactive"
          placeholder="Tìm kiếm"
        />
        <SearchIcon className="absolute top-3 left-3" />
      </div>
    </div>
  );
}
