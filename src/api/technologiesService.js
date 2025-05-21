export async function getTechnologies() {
  const response = await fetch("http://localhost:8080/api/v1/technologies");

  if (!response.ok) {
    throw new Error("Error al obtener tecnologías");
  }

  return await response.json();
}