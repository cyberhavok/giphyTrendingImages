import { HttpStatusCode } from "../enums/HttpStatusCode.js";

const endpointTrending = "http://api.giphy.com/v1/gifs/trending";
const apiKey = "fIqIZpCyt2zeZ9jE83dOA4jVd5Du3GIK";

export async function getTrendingImages() {
    let response = await fetch(endpointTrending + "?api_key=" + apiKey);
    let gifInfo = await response.json();
    let status = gifInfo.meta.status;
    try {
        if (status === HttpStatusCode.OK) {
            console.log("Conexion exitosa", status);
        } else if (status === HttpStatusCode.NOT_FOUND) {
            throw new Error("Error - recurso no encontrado");
        }
        else {
            throw new Error("Error de conexión, intente más tarde")
        }
    } catch (error) {
        console.error(error);
    }
    console.info(gifInfo);
    return gifInfo;
}
