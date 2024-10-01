import Dropdown from "components/dropdown";
import { useAtom, useAtomValue } from "jotai";
import {
  colorsState,
  selectedColorState,
  selectedSizeState,
  sizesState,
} from "state";

export default function Filter() {
  const sizes = useAtomValue(sizesState);
  const [size, setSize] = useAtom(selectedSizeState);
  const colors = useAtomValue(colorsState);
  const [color, setColor] = useAtom(selectedColorState);

  return (
    <div className="flex px-4 py-3 space-x-2 overflow-x-auto">
      <Dropdown
        items={sizes}
        value={size}
        onChange={setSize}
        renderTitle={(selectedSize) =>
          `Kích thước${selectedSize ? `: ${selectedSize}` : ""}`
        }
      />
      <Dropdown
        items={colors}
        value={color}
        onChange={setColor}
        renderTitle={(selectedColor) =>
          `Màu sắc${selectedColor ? `: ${selectedColor.name}` : ""}`
        }
        renderItem={(color) => color.name}
      />
      <button className="bg-primary text-white rounded-full h-8 flex-none px-3">
        Xoá bộ lọc
      </button>
    </div>
  );
}
