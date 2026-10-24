import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
    const [listaReceitas, setListaReceitas] = useState([]);
  const [carregando, setCarregando] = useState(true);

  const buscarReceitas = async () => {
    try {
      const resposta = await axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=chicken');

      setListaReceitas(resposta.data.meals || []);
    } catch (erro) {
        console.error('Erro ao buscar receitas:', erro);
    } finally {
      setCarregando(false);
    }
  };

  useEffect(() => {
    buscarReceitas();
  }, []);

  if (carregando) {
    return (
        <View style={styles.carregandoContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Carregando receitas...</Text>
      </View>
    );
  }
  const renderizarItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.cartaoItem}
      onPress={() => navigation.navigate('Detail', { receitaSelecionada: item })}
    >
        <Image 
        source={{ uri: item.strMealThumb }} 
        style={styles.imagemReceita} 
      />
      <Text style={styles.nomeReceita}>{item.strMeal}</Text>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={listaReceitas}
        keyExtractor={(item) => item.idMeal}
        renderItem={renderizarItem}
        contentContainerStyle={styles.listaEspacamento}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  carregandoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listaEspacamento: {
    padding: 16,
  },
  cartaoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 12,
    padding: 10,
    borderRadius: 8,
  },
  imagemReceita: {
    width: 70,
    height: 70,
    borderRadius: 8,
    marginRight: 12,
  },
  nomeReceita: {
    fontSize: 16,
    fontWeight: 'bold',
    flex: 1,
  },
});