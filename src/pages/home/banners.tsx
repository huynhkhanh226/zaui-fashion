import Carousel from "components/carousel";
import banner1 from "static/banner-1.jpg";

export default function Banners() {
  return <Carousel slides={[banner1, banner1, banner1]} />;
}
