import { View, Text, StyleSheet, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useMenu } from '../Context/MenuContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Menu() {
  const { showMenu, setShowMenu } = useMenu();
  const navigation = useNavigation();
  
  if (!showMenu) return null;
  
  return (
    <SafeAreaView style={styles.overlay}>
      <View style={styles.menu}>

        <Pressable style={styles.closeButton} onPress={() => setShowMenu(false)}>
          <Text style={styles.closeText}>✕</Text>
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => {
          navigation?.navigate("Inicio");
          setShowMenu(false);
        }}>
          <Text style={styles.menuText}>Inicio</Text>
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => {
          navigation?.navigate("Historial");
          setShowMenu(false);
        }}>
          <Text style={styles.menuText}>Historial de visitas</Text>
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => {
          navigation?.navigate("NuevaVisita");
          setShowMenu(false);
        }}>
          <Text style={styles.menuText}>Nueva visita</Text>
        </Pressable>

        <Pressable style={styles.menuItem} onPress={() => {
          navigation?.navigate("Configuraciones");
          setShowMenu(false);
        }}>
          <Text style={styles.menuText}>Configuracion</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0, 
    bottom: 0,
    width: '70%',
    height: '300%',
    backgroundColor: '#0A4C9A', 
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    paddingTop: 50,
    elevation: 8,
    zIndex: 1000
  },
  closeButton: {
    position: 'absolute',
    right: 20,
    zIndex: 1000
    
  },
  closeText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1000

  },
  menu: {
    flex: 1,
    padding: 20,
    zIndex: 1000,
    top: -50,

  },
  menuItem: {
    paddingVertical: 12,
    marginBottom: 10,
    zIndex: 1000

  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    zIndex: 1000

  },
});