import { schedulesDay } from "./load.js";
import { scheduleDelete } from "../../services/schedule-delete.js";

const periods = document.querySelectorAll(".period")

periods.forEach((period) => {
    period.addEventListener("click", async (event) => {
        if (event.target.classList.contains("cancel-icon")) {
            const item = event.target.closest("li")
            const { id } = item.dataset

            if (id) {
                const isConfirmed = confirm("Tem certeza que deseja cancelar o agendamento?")
                if (isConfirmed) {
                    await scheduleDelete({ id })
                    schedulesDay()
                }
            }
        }
    })
})