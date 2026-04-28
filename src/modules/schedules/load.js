import { scheduleFetch } from "../../services/schedule-fetch.js";
import { scheduleShow } from "../schedules/show.js";
import { hoursLoad } from "../form/hours-load.js";

const selectDate = document.getElementById("date")

export async function schedulesDay() {
    const date = selectDate.value
    const dailySchedules = await scheduleFetch({ date })

    scheduleShow({ dailySchedules })

    hoursLoad({ date, dailySchedules });
}