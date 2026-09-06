"use client";

import { useState } from "react";
import { DashboardMainPage } from "./dashboard/ui/DashboardMainPage";
import { Header } from "./dashboard/ui/Header";
import { Sidebar } from "./dashboard/ui/Sidebar";

export const DashboardDemo = () => {
  const [activeView, setActiveView] = useState("Overview");
  const [activeChannel, setActiveChannel] = useState("general");

  return (
    <div className="relative z-10 mx-auto mt-12 w-full max-w-6xl px-4 pb-4 md:mt-16 md:px-8">
      <div className="rounded-2xl border border-white/30 bg-white/20 p-2 shadow-md backdrop-blur-md md:rounded-4xl md:p-3">
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
    </div>
  );
};
