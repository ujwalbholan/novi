"use client";

import { useState } from "react";
import { DashboardMainPage } from "./dashboard/ui/DashboardMainPage";
import { Header } from "./dashboard/ui/Header";
import { Sidebar } from "./dashboard/ui/Sidebar";

export const DashboardDemo = () => {
  const [activeView, setActiveView] = useState("Overview");
  const [activeChannel, setActiveChannel] = useState("general");

  return (
    <div className="w-full rounded-xl border border-black/5 shadow-lg md:rounded-3xl">
      <Header />
      <div className=" grid grid-cols-6 ">
        <Sidebar
          activeView={activeView}
          activeChannel={activeChannel}
          onViewChange={setActiveView}
          onChannelChange={(channel) => {
            setActiveChannel(channel);
            setActiveView("Inbox");
          }}
        />
        <DashboardMainPage
          activeView={activeView}
          activeChannel={activeChannel}
        />
      </div>
    </div>
  );
};
