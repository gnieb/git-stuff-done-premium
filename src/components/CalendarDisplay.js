
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { enUS } from 'date-fns/locale/en-US'

const locales = {
	"en-US": require("date-fns")
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales,
});


function CalendarDisplay ({tasks, events}) {

const myEvents = events.map((ev) => {
	return ev = {
			id: ev.id,
			title: ev.title,
			start: new Date(ev.start),
			end: new Date(ev.end)
		}
	})
	console.log(myEvents)

    return (
        <div>
        <Calendar
			events={myEvents}
            tasks={tasks}
			localizer={localizer}
			defaultView="week"
			startAccessor="start"
      		endAccessor="end"
			style={{ height: 700 }}
		/>
        </div>
    )
}

export default CalendarDisplay;