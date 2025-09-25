import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './Screens/Home';
import Historial from './Screens/Historial';
import NuevaVisita from './Screens/NuevaVisita';
import Menu from './components/Menu';
import Configuraciones from './Screens/Configuraciones';
import MenuProvider from './Context/MenuContext';


const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Inicio" component={Home} />
          <Stack.Screen name="Historial" component={Historial} />
          <Stack.Screen name="NuevaVisita" component={NuevaVisita} />
          <Stack.Screen name="Configuraciones" component={Configuraciones}/>
        </Stack.Navigator>
        <Menu />
      </NavigationContainer>
    </MenuProvider>
  );
}