import React, { useState } from 'react';
import { ActivityIndicator, SafeAreaView, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import axios from 'axios';
import { useFonts, Inter_700Bold } from '@expo-google-fonts/inter';
import { styles } from '../styles/AddTarefa_Style';
import { geralStyles } from '../styles/TopBar_Style';
import { getIdUsuario } from '../services/auth';
import { TopBar } from '../assets/componentes/TopBar';

export function AddTarefasScreen({ navigation }) {
  const [nomeTarefa, setNomeTarefa] = useState('');
  const [tempoTarefa, setTempoTarefa] = useState('');
  const [relevanciaTarefa, setRelevanciaTarefa] = useState('');
  const [statusTarefa, setStatusTarefa] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [fontsLoaded] = useFonts({ Inter_700Bold });

  const adicionarTarefa = async () => {
    if (!nomeTarefa || !tempoTarefa || !relevanciaTarefa || !statusTarefa) {
      setErrorMsg('Preencha todos os campos');
      return;
    }

    setLoading(true);
    try {
      const idUsuario = await getIdUsuario();
      await axios.post('http://localhost:3000/tarefas', {
        nome_da_tarefa: nomeTarefa,
        tempo: tempoTarefa,
        relevancia: relevanciaTarefa,
        status: statusTarefa,
        idUsuario,
      });
      navigation.navigate('Tarefas');
    } catch (error) {
      setErrorMsg(error.response?.data?.message || 'Não foi possível criar a tarefa');
    } finally {
      setLoading(false);
    }
  };

  if (!fontsLoaded) return null;
  if (loading) {
    return <View style={geralStyles.center}><ActivityIndicator size="large" color="#373821" /></View>;
  }

  return (
    <SafeAreaView style={styles.container}>
      <TopBar title="Nova tarefa" />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.innerForm}>
          <Text style={styles.boxTitle}>Nome da tarefa</Text>
          <TextInput style={styles.textBox} value={nomeTarefa} onChangeText={setNomeTarefa} />
          <Text style={styles.boxTitle}>Relevância</Text>
          <Picker selectedValue={relevanciaTarefa} onValueChange={setRelevanciaTarefa}>
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Muito Importante" value="Muito Importante" />
            <Picker.Item label="Importante" value="Importante" />
            <Picker.Item label="Moderado" value="Moderado" />
            <Picker.Item label="Pouco Importante" value="Pouco Importante" />
          </Picker>
          <Text style={styles.boxTitle}>Status</Text>
          <Picker selectedValue={statusTarefa} onValueChange={setStatusTarefa}>
            <Picker.Item label="Selecione" value="" />
            <Picker.Item label="Pendente" value="Pendente" />
            <Picker.Item label="Em Andamento" value="Em Andamento" />
            <Picker.Item label="Concluída" value="Concluída" />
          </Picker>
          <Text style={styles.boxTitle}>Duração</Text>
          <TextInput style={styles.textBox} value={tempoTarefa} onChangeText={setTempoTarefa} />
          {errorMsg !== '' && <Text style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</Text>}
          <TouchableOpacity style={styles.formButton} onPress={adicionarTarefa}>
            <Text style={styles.formButtonText}>Adicionar tarefa</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opcaoEntrada} onPress={() => navigation.goBack()}>
            <Text style={styles.opcaoEntradaText}>Cancelar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
