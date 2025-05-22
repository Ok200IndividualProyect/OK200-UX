const API_URL = "http://localhost:8080/api/v1/users"; 

export async function registerUser(userData) {
  try {
    const response = await fetch(API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      
      const errorText = await response.text();
      throw new Error(errorText);
    }

    return await response.json(); 
  } catch (error) {
    throw error;
  }
}

export async function getUserMatches(userId) {
  try {
    const response = await fetch(`${API_URL}/${userId}/matches`);
    if (!response.ok) {
      throw new Error("Error al obtener los matches");
    }
    const data = await response.json();
    return data; // debería ser un array de UserDTOs
  } catch (error) {
    console.error(error);
    throw error;
  }
}

