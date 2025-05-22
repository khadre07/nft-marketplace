export const getUserInfo = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/userInfo', {
        method: 'GET',
        credentials: 'include',
        headers: {
          'Accept': 'application/json',
        }
      });
  
      console.log('Status:', response.status);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  };
  export const isUserAuthenticated = async (): Promise<boolean> => {
    try {
      const res = await fetch("http://localhost:5000/api/isConnected", {
        method: "GET",
        credentials: "include", // Envoie le cookie HTTPOnly
      });
  
      const data = await res.json();
      console.log(data, "hope thet work");
      
      return data.isAuthentifixared; // Retourne true ou false
    } catch (error) {
      console.error("Erreur de vérification de l'authentification", error);
      return false;
    }
  };
  