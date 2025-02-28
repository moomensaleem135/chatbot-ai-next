import React from "react";

import { Header, Sidebar } from "@/components";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-screen bg-gray-900">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <div className="flex-1 flex p-4">
          <div className="flex-1 flex flex-col">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default AppLayout;
