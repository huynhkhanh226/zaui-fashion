import { Outlet, useMatches } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";

export default function Layout() {
  console.log(useMatches());

  return (
    <div className="w-screen h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
