import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import themePlugin from "@fullcalendar/theme-monarch";

export function Calander() {
  return (
    <section className=" sm:p-6">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#93a092]">Workspace calendar</p>
        <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight text-[#213328]">Team timeline</h2>
      </div>
      <FullCalendar
        plugins={[dayGridPlugin, themePlugin]}
        initialView="dayGridMonth"
        headerToolbar={{ left: "prev,next today", center: "title", right: "" }}
        height="560px"
        contentHeight="500px"
        fixedWeekCount={false}
        dayMaxEvents={3}
      />
    </section>
  );
}
