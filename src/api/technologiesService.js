//es segura la API asi?
const API_URL_TECHNOLOGIES ="http://localhost:8080/api/v1/technologies";

export async function getTechnologies() {
  const response = await fetch(API_URL_TECHNOLOGIES);

  if (!response.ok) {
    throw new Error("Error al obtener tecnologías");
  }

  return await response.json();
}