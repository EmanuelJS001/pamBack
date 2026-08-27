import React, { useState, useEffect } from 'react';

import {
  Linking,
  Text,
  View,
  FlatList,
  ActivityIndicator,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';

import axios from 'axios';

import { styles } from '../styles/Devs_Style';
import { geralStyles } from '../styles/TopBar_Style';

import {
  useFonts,
  Inter_700Bold
} from '@expo-google-fonts/inter';

import { NavBar } from '../assets/componentes/NavBar';
import { TopBar } from '../assets/componentes/TopBar';

export function DevsScreen({ navigation }) {

  const [devs, setDevs] = useState([]);
  const [loading, setLoading] = useState(true);

  const ROUTE = 'http://localhost:3000';

  const fetchDevs = async () => {

    const API_URL = `${ROUTE}/devs`;

    try {

      const response = await axios.get(API_URL);

      console.log("Resposta dos devs:", response.data);

      setDevs(response.data.saved || []);

    } catch (error) {

      console.error(
        "Erro ao buscar desenvolvedores:",
        error.response?.data || error.message
      );

      setDevs([]);

    } finally {

      setLoading(false);

    }
  };

  useEffect(() => {
    fetchDevs();
  }, []);

  const [fontsLoaded] = useFonts({
    Inter_700Bold
  });

  if (!fontsLoaded) {
    return null;
  }

  if (loading) {
    return (
      <View style={geralStyles.center}>
        <ActivityIndicator
          size="large"
          color="#373821"
        />
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <View style={styles.cardImg}>
        <Image
          source={{
            uri: `${ROUTE}${item.img}`
          }}
          style={{
            width: 80,
            height: 80,
            borderRadius: 15
          }}
        />

      </View>
      <View style={styles.cardText}>
        <Text style={styles.name}>
          {item.nome}
        </Text>
        <Text style={styles.details}>
          Função: {item.funcao}
        </Text>
        <View style={styles.githubSection}>
          <TouchableOpacity
            onPress={() => Linking.openURL(item.link)}
          >
            <Image
              source={require('../assets/images/github.png')}
              style={styles.githubImg}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
  return (

    <SafeAreaView style={styles.container}>
      <TopBar title="Devs" />
      <FlatList
        data={devs}
        keyExtractor={(item) => item.idDev.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />

      <NavBar navigation={navigation} />
    </SafeAreaView>
  );
}