import { Outlet, useMatches } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import Skeleton from "./skeleton";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<Skeleton />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <Toaster
        position="bottom-center"
        containerStyle={{
          top: 20,
          left: 20,
          bottom: 80,
          right: 20,
        }}
      />
    </div>
  );
}
