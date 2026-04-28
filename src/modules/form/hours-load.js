import dayjs from "dayjs";
import { OpeningHours } from "../../utils/opening-hours.js";
import { hoursClick } from "./hours-click.js";

const hours = document.getElementById("hours")

export function hoursLoad({ date, dailySchedules }) {
    // limpa lista
    hours.innerHTML = ""

    const unavailableHours = dailySchedules.map((schedule) => dayjs(schedule.when).format("HH:mm")) 

    const opening = OpeningHours.map((hour) => {
        const [scheduleHour] = hour.split(":")

        //adiciona hora na data e verifica se está no passado
        const isHourPresent = dayjs(date).add(scheduleHour, "hour").isAfter(dayjs())

        const available = !unavailableHours.includes(hour) && isHourPresent

        // define se o horário está disponível
        return {
            hour,
            available,
        }
    })

    opening.forEach(({ hour, available }) => {
        const li = document.createElement("li")

        li.classList.add("hour")
        li.classList.add(available ? "hour-available" : "hour-unavailable")

        li.textContent = hour

        if (hour === "9:00") {
            hoursHeaderAdd("Manhã")
        }
        else if (hour === "13:00") {
            hoursHeaderAdd("Tarde")
        }
        else if (hour === "18:00") {
            hoursHeaderAdd("Noite")
        }

        hours.append(li)
    })

    hoursClick()
}

function hoursHeaderAdd(title) {
    const header = document.createElement("li")
    header.classList.add("hour-period")
    header.textContent = title

    hours.append(header)
}
