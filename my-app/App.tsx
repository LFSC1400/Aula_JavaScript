import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {

  const [mensagem, setMensagem] = useState("Bem vindo ao react native!");

  function mudarMensagem() {
    setMensagem("Você clicou no botão!");
  }
  return (
    <View style={styles.container}>

      <text style={styles.titulo}>
        Primeiro exemplo de React Native
      </text>
         
      <text style={styles.texto}>
        {mensagem}
      </text>

      <Button
        title="Clique aqui"
        onPress={mudarMensagem}
      />

      <Button
        title="Voltar mensagem original"
        onPress={() => setMensagem("Bem vindo ao react native!")}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    fontFamily: 'Comic Sans MS',
  },

  texto: {
    fontSize: 18,
    marginBottom: 20,
  },

  Button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
  },
});
