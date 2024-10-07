import { Outlet, useMatches } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import { Suspense } from "react";
import { PageSkeleton } from "./skeleton";
import { Toaster } from "react-hot-toast";

export default function Layout() {
  return (
    <div className="w-screen h-screen flex flex-col bg-background text-foreground">
      <Header />
      <div className="flex-1 overflow-y-auto">
        <Suspense fallback={<PageSkeleton />}>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
      <Toaster
        position="top-center"
        containerStyle={{
          top: "calc(60px + env(safe-area-inset-top))",
          left: 20,
          bottom: 20,
          right: 20,
        }}
      />
    </div>
  );
}
