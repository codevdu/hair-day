import dayjs from "dayjs";
import { apiConfig } from "../services/api-config.js";

export const scheduleFetch = async ({ date }) => {
    try {
        const response = await fetch(`${apiConfig.baseURL}/schedules`)
        const data = await response.json()

        const dailySchedules = data.filter((schedule) => dayjs(date).isSame(schedule.when, "day"))

        
        console.log(dailySchedules);
        return dailySchedules
    } catch (error) {
        console.log(error);
        alert("Não foi possível buscar os agendamentos do dia selecionado.")
    }
}