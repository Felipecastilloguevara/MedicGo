import { StyleSheet, Text, View, Pressable, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useMenu } from '../Context/MenuContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home({ navigation }) {
  const { setShowMenu } = useMenu();

  const listaPacientes = [
    {
      id: '1',
      name: 'Annie Osorio',
      text: 'Se inicia consulta con la toma de signos vit...',
    },
    {
      id: '2',
      name: 'Felipe Castillo',
      text: 'Se inicia consulta con la toma de signos vit...',
    },
    {
      id: '3',
      name: 'Daniel Arenas',
      text: 'Se inicia consulta con la toma de signos vit...',
    }
  ];

  const [dateTime, setDateTime] = useState(new Date())

  useEffect(() => {
    const interval = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDate = date => 
  date.toLocaleDateString('es-CO', {
    weekday: 'short',
    day: '2-digit',
    month: 'long',
  })
  
  const formatTime = (date) => 
    date.toLocaleTimeString('es-CO', { hour12: false });

  return (
    <SafeAreaView>
      <View style={ styles.header }> {/* Encabezado */}
        <Pressable style={styles.menuButton} onPress={() => setShowMenu(true)}> 
          <Text style={ styles.menuIcon }> ☰ </Text>
        </Pressable>
        <Text style={styles.title}>Unidad 23</Text>

        <Text style={styles.date}>{formatDate(dateTime)}</Text>
        <Text style={styles.time}>{formatTime(dateTime)}</Text>
      </View>


      <Text style={styles.sectionTitle}>INDICADORES</Text>
      <View style={styles.indicatorBox}>
        <Text>Total de visitas completadas hoy</Text>
        <Text style={styles.indicatorNumber}>{listaPacientes.length}</Text>
      </View>

      <Text style={styles.sectionTitle}>HISTORIAL</Text>
      <FlatList 
      
        data={listaPacientes}
        keyExtractor={(item) => item.id}
        
        renderItem={({ item }) => (
          <View style={styles.historyItem}> 
            <Text style={styles.historyName}>{item.name}</Text>
            <Text style={styles.historyText}>{item.text}</Text>
          </View>
        )}
      />

      <Pressable style={styles.button} onPress={() =>  navigation?.navigate("NuevaVisita")}>
        <Text style={styles.buttonText}>REGISTRAR NUEVA CONSULTA</Text>
      </Pressable>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    alignItems: 'center',
    marginBottom: 20,
    paddingTop: 20,
  },
  menuButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 10,
  },
  menuIcon: { fontSize: 24, color: '#0A4C9A', top: 10 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#0A4C9A' },
  date: { fontSize: 14, color: '#444' },
  time: { fontSize: 14, color: '#0A4C9A', fontWeight: 'bold' },
  sectionTitle: { fontWeight: 'bold', marginVertical: 10, color: '#0A4C9A' },
  indicatorBox: {
    backgroundColor: '#F2F6FB',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  indicatorNumber: { fontSize: 24, fontWeight: 'bold', color: '#0A4C9A' },
  historyItem: {
    backgroundColor: '#F9F9F9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  historyName: { fontWeight: 'bold', color: '#0A4C9A' },
  historyText: { color: '#555' },
  button: {
    backgroundColor: '#0A4C9A',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 10,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});