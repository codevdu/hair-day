import { apiConfig } from "./api-config.js"

export const scheduler = async ({ id, name, when }) => {
    try {
        await fetch(`${apiConfig.baseURL}/schedules`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ id, name, when })
        })
        
        alert("Agendamento realizado com sucessso!")
    } catch (error) {
        console.log(error);
        alert("Não foi possível realizar o agendamento. Tente novamente mais tarde.")
    }
}