import { Overview } from "../overview/Overview";
import BoardDemo from "../mytask/Board";
import { Inbox } from "../inbox/Inbox";
import { Calander } from "../calander/Calander";

type DashboardMainPageProps = {
  activeView: string;
  activeChannel: string;
};

export function DashboardMainPage({
  activeView,
  activeChannel,
}: DashboardMainPageProps) {
  const view = {
    Overview: <Overview />,
    "My tasks": <BoardDemo />,
    Inbox: <Inbox activeChannel={activeChannel} />,
    Calendar: <Calander />,
  }[activeView as "Overview" | "My tasks" | "Inbox" | "Calendar"];

  return (
    <main className="col-span-5 min-h-150 w-full rounded-br-xl bg-[#f8faf6] p-4 sm:p-6">
      {view ?? <Overview />}
    </main>
  );
}
