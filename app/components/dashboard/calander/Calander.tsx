import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import themePlugin from "@fullcalendar/theme-monarch";

export function Calander() {
  return (
    <section className="calendar-shell sm:p-6">
      <div className="mb-5">
        <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
          Workspace calendar
        </p>

        <h2 className="mt-1 font-serif text-2xl font-medium tracking-tight text-ink">
          Team timeline
        </h2>
      </div>

      <FullCalendar
        plugins={[dayGridPlugin, themePlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: "prev,next today",
          center: "title",
        }}
        height="560px"
        contentHeight="500px"
        fixedWeekCount={false}
        dayMaxEvents={3}
        headerToolbarClass="calendar-toolbar"
        toolbarTitleClass="calendar-toolbar-title"
        dayCellTopInnerClass={(arg) => {
          const base = "day-grid-number";
          if (arg.isToday) return `${base} today-circle`;
          if (arg.isOther) return `${base} is-other-day`;
          return base;
        }}
      />
    </section>
  );
}
