import Button from "components/button";
import HorizontalDivider from "components/horizontal-divider";
import { useAtomValue } from "jotai";
import { useParams } from "react-router-dom";
import { colorsState, productState } from "state";
import { formatPrice } from "utils/format";
import ShareButton from "./share-buttont";
import VariantPicker from "./variant-picker";
import { useState } from "react";

export default function ProductPage() {
  const { id } = useParams();
  const product = useAtomValue(productState(Number(id)));
  const colors = useAtomValue(colorsState);
  const [selectedColor, setSelectedColor] = useState(colors[0]);

  if (product) {
    return (
      <div className="w-full h-full flex flex-col">
        <div className="flex-1 overflow-y-auto px-4">
          <div className="py-2">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="text-xl font-medium text-primary">
            {formatPrice(product.price)}
          </div>
          {!!product.originalPrice && (
            <div className="text-2xs text-subtitle line-through">
              {formatPrice(product.price)}
            </div>
          )}
          <div className="text-sm mt-1">{product.name}</div>
          <div className="py-2">
            <ShareButton />
          </div>
          <VariantPicker
            title="Color"
            variants={colors}
            value={selectedColor}
            onChange={(color) => setSelectedColor(color)}
            renderVariant={(variant, selected) => (
              <div
                className={"w-full h-full rounded-full ".concat(
                  selected ? "border-2 border-primary p-0.5" : ""
                )}
              >
                <div
                  className="w-full h-full rounded-full"
                  style={{ backgroundColor: variant.hex }}
                />
              </div>
            )}
          />
        </div>
        <HorizontalDivider />
        <div className="flex-none grid grid-cols-2 gap-2 py-3 px-4">
          <Button large>Thêm vào giỏ</Button>
          <Button large primary>
            Mua ngay
          </Button>
        </div>
      </div>
    );
  }
}
