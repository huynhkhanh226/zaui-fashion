import ProductGrid from "components/product-grid";
import Section from "components/section";
import { useAtomValue } from "jotai";
import { flashSaleProductsState } from "state";

export default function FlashSales() {
  const products = useAtomValue(flashSaleProductsState);
  console.log({ products });

  return (
    <Section title="Flash Sales" viewMore={() => {}}>
      <ProductGrid products={products} />
    </Section>
  );
}
