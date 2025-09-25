import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch, ScrollView, Pressable} from "react-native";
import { useMenu } from '../Context/MenuContext';

export default function Configuraciones() {
  const [notificaciones, setNotificaciones] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);
  const { setShowMenu } = useMenu();

  return (
    <ScrollView style={styles.container}>
    
      <View style={ styles.header }> 
        <Pressable style={styles.menuButton} onPress={() => setShowMenu(true)}> 
          <Text style={ styles.menuIcon }>☰</Text>
        </Pressable>
        <Text style={styles.title}>CONFIGURACION</Text>
      </View>

      

      
      <View style={styles.profileCard}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>JP</Text>
        </View>
        <View style={styles.profileInfo}>
          <Text style={styles.name}>Dr. Felipe Castillo</Text>
          <Text style={styles.subtitle}>Medico General/Muy gay </Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.editText}>Editar perfil</Text>
        </TouchableOpacity>
      </View>


      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ajustes Generales</Text>

        <View style={styles.row}>
          <Text style={styles.option}>Notificaciones</Text>
          <Switch value={notificaciones} onValueChange={setNotificaciones} />
        </View>

        <View style={styles.row}>
          <Text style={styles.option}>Modo oscuro</Text>
          <Switch value={modoOscuro} onValueChange={setModoOscuro} />
        </View>
      </View>

  
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>cuenta</Text>

        <TouchableOpacity>
          <Text style={styles.link}>cambiar contrasena</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={[styles.link, styles.logout]}>cerrar sesion</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: '30'
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: "#0033A0",
    marginBottom: 20,
  },
  profileCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F2F2F2",
    marginHorizontal: 16,
    padding: 12,
    borderRadius: 8,
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: "#0488",
    alignItems: "center",
    justifyContent: "center",
  },
  menuButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 10,
  },
  menuIcon: { fontSize: 24, color: '#0A4C9A', top: 10 },
  avatarText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  profileInfo: {
    flex: 1,
    marginLeft: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 14,
    color: "#666",
  },
  editText: {
    color: "#0033A0",
    fontWeight: "bold",
  },
  section: {
    marginTop: 20,
    marginHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  option: {
    fontSize: 16,
  },
  link: {
    fontSize: 16,
    color: "#0033A0",
    paddingVertical: 10,
  },
  logout: {
    color: "red",
  },
});