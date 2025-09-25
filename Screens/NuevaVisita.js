import { useState } from 'react';
import {View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Alert, Pressable} from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMenu } from '../Context/MenuContext';


export default function App() {
  const { setShowMenu } = useMenu();

  const [nombre, setNombre] = useState("");
  const [tipoId, setTipoId] = useState("");
  const [documento, setDocumento] = useState("");
  const [edad, setEdad] = useState("");
  const [historia, setHistoria] = useState("");
  const [procedimientos, setProcedimientos] = useState("");
  const [medicamentos, setMedicamentos] = useState("");
  const [observaciones, setObservaciones] = useState("");


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ padding: 20 }}>
        <View style={ styles.header }> 
          <Pressable style={styles.menuButton} onPress={() => setShowMenu(true)}> 
            <Text style={ styles.menuIcon }>☰</Text>
          </Pressable>
          <Text style={styles.header}>NUEVA VISITA</Text>
        </View>

  
        <Text style={styles.sectionTitle}>Informacion del paciente</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre completo"
          value={nombre}
          onChangeText={setNombre}
        />

        <View style={styles.row}>
          <View style={{ flex: 1, marginRight: 5 }}>
            <Text style={styles.label}>Tipo de Identificacion</Text>
            <TextInput
              style={styles.input}
              placeholder="CC, TI, PAS"
              value={tipoId}
              onChangeText={setTipoId}
            />
          </View>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Text style={styles.label}>Numero de documento</Text>
            <TextInput
              style={styles.input}
              placeholder="Número de documento"
              value={documento}
              onChangeText={setDocumento}
              keyboardType="numeric"
            />
          </View>
        </View>

        <Text style={styles.label}>Edad</Text>
        <TextInput
          style={styles.input}
          placeholder="Edad"
          value={edad}
          onChangeText={setEdad}
          keyboardType="numeric"
        />

        <Text style={styles.label}>Historia Clinica</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="Comorbilidades, alergias, condiciones preexistentes, etc"
          value={historia}
          onChangeText={setHistoria}
          multiline
        />


        <Text style={styles.sectionTitle}>Detalles de la atencion</Text>

        <Text style={styles.label}>Procedimientos realizados</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="Ej: Toma de signos vitales, saturación, etc"
          value={procedimientos}
          onChangeText={setProcedimientos}
          multiline
        />

        <Text style={styles.label}>Medicamentos suministrados</Text>
        <TextInput
          style={styles.input}
          placeholder="Ej: Acetaminofén (500mg)"
          value={medicamentos}
          onChangeText={setMedicamentos}
        />

        <Text style={styles.label}>Observaciones</Text>
        <TextInput
          style={styles.inputArea}
          placeholder="Notas adicionales, plan de seguimiento, etc"
          value={observaciones}
          onChangeText={setObservaciones}
          multiline
        />

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>FINALIZAR VISITA</Text>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  menuButton: {
    position: 'absolute',
    left: 0,
    top: 0,
    padding: 10,
  },
  menuIcon: { fontSize: 24, color: '#0A4C9A', top: 10 },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#004AAD",
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    color: "#004AAD",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingVertical: 5,
    marginBottom: 15,
  },
  inputArea: {
    borderBottomWidth: 1,
    borderColor: "#000",
    paddingVertical: 5,
    minHeight: 60,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    backgroundColor: "#004AAD",
    padding: 15,
    borderRadius: 30,
    alignItems: "center",
    marginTop: 30,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});