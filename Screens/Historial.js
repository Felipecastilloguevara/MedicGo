import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useMenu } from '../Context/MenuContext';
import { Card, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Historial() {
  const { setShowMenu } = useMenu();

  return (
    <SafeAreaView style={styles.body }>
      <View style={ styles.header }> 
        <Pressable style={styles.menuButton} onPress={() => setShowMenu(true)}> 
          <Text style={ styles.menuIcon }>☰</Text>
        </Pressable>
        <Text style={ styles.title }>Historial de visitas</Text>
      </View>

      <View>
        <Card style={ styles.card }>
          <Card.Content>
            <Text style={ styles.date }>11 de Septiembre, 2025</Text>
            <Text style={ styles.patient }>Paciente: Felipe Castillo Guevara</Text>
            <Text>Motivo: Dolor en el pecho</Text>
            <Text>Hora: 10:30 AM</Text>
          </Card.Content>
          <Card.Actions style={ styles.cardActions }>
            <Text style={ styles.status }>Completada</Text>
            <Button mode="contained" textColor="#fff" style={ styles.button }>Detalles</Button>
          </Card.Actions>
        </Card>
      </View>

    </SafeAreaView>
  ); 
}

const styles = StyleSheet.create({
  body: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff'
  },
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
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#0A4C9A',
    textAlign: 'center',
    marginVertical: 10,
  },
  menuIcon: { fontSize: 24, color: '#0A4C9A', top: 10 },
  card: {
    marginBottom: 15
  },
  date: {
    fontSize: 12,
    color: '#666'
  },
  patient: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  cardActions: {
    justifyContent: 'space-between'
  },
  status: {
    color: 'green'
  },
  button: {
    backgroundColor: '#004aad'
  }
});
