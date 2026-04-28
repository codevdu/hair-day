import { schedulesDay } from "../schedules/load.js";

const selectDate = document.getElementById("date")

selectDate.onchange = () => schedulesDay()