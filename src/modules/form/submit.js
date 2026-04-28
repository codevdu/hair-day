import dayjs from "dayjs";
import { scheduler } from "../../services/schedule-new.js";
import { schedulesDay } from "../schedules/load.js";

const form = document.querySelector("form")
const clientName = document.getElementById("client")
const selectDate = document.getElementById("date")
const inputToday = dayjs(new Date()).format("YYYY-MM") 

// carrega a data atual
selectDate.value = dayjs(new Date()).format("YYYY-MM-DD")
//define a data mínima como atual
selectDate.min = dayjs(new Date()).format("YYYY-MM-DD")


form.onsubmit = async (event) => {
    event.preventDefault()

    try {
        // recuperando o nome do cliente
        const name = clientName.value.trim()
        console.log(name);

        if (!name) {
            return alert("Informe o seu nome!")
        }

        // recupera a hora selecionada
        const hourSelected = document.querySelector(".hour-selected")
        
        if (!hourSelected) {
            return alert("Selecione seu horário!")            
        }

        // recupera somente a hora 
        const [hour] = hourSelected.innerText.split(":")

        // insere a hora na data
        const when = dayjs(selectDate.value).add(hour, "hour")
        console.log();
        
        // gera um id
        const id = new Date().getTime()

        await scheduler({
            id,
            name,
            when,
        });

        await schedulesDay()
        
        clientName.value = ""
    } catch (error) {
        alert("Não foi possível realizar o agendamento")
        console.log(error);
    }
}