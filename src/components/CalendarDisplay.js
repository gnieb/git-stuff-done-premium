
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import { format, parse, startOfWeek, getDay } from "date-fns";
import "react-big-calendar/lib/css/react-big-calendar.css";

const locales = {
	"en-US": require("date-fns")
};
const localizer = dateFnsLocalizer({
	format,
	parse,
	startOfWeek,
	getDay,
	locales
});


function CalendarDisplay ({tasks, events}) {

    return (
        <div>
        <Calendar
			events={events}
            tasks={tasks}
			// resources={myresources}
			localizer={localizer}
			defaultView="week"
			style={{ height: 700 }}
		/>
        </div>
    )
}

export default CalendarDisplay;