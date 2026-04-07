import { useState, useEffect } from "react";

export default function DogApp() {
  const [image, setImage] = useState("");

  const fetchDog = async () => {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();
      setImage(data.message);
    } catch (error) {
      console.error("Erro ao buscar imagem:", error);
    }
  };

  useEffect(() => {
    fetchDog();
  }, []);

   return (
    <div style={styles.container}>
      <h1 style={styles.title}>Isso é um Cachorro</h1>

      {image && (
        <img
          src={image}
          alt="Cachorro aleatório"
          style={styles.image}
        />
      )}

      <button onClick={fetchDog} style={styles.button}>
        Trocar imagem
      </button>
    </div>
  );
}

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
    },
    title: {
      fontSize: "2rem",
      marginBottom: "20px",
      color: "#333",
    },
    image: {
      width: "320px",
      height: "320px",
      borderRadius: "20px",
      marginBottom: "20px",
    },
    button: {
      padding: "10px 20px",
      fontSize: "1rem",
      backgroundColor: "#0000ff",
      color: "white",
      cursor: "pointer",
    },
  };