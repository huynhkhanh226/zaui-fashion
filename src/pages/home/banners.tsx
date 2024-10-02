import Carousel from "components/carousel";
import { useAtomValue } from "jotai";
import { bannersState } from "state";

export default function Banners() {
  const banners = useAtomValue(bannersState);

  return <Carousel slides={banners} />;
}
