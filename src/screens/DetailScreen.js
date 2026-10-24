import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

export default function DetailScreen({ route }) {
  // Recebe os dados passados através dos parâmetros da navegação
  const { receitaSelecionada } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Image 
        source={{ uri: receitaSelecionada.strMealThumb }} 
        style={styles.imagem} 
      />
      
      <View style={styles.conteudo}>
        <Text style={styles.titulo}>{receitaSelecionada.strMeal}</Text>
        
        <View style={styles.tagContainer}>
          <Text style={styles.categoria}>
            Categoria: {receitaSelecionada.strCategory || 'Frango'}
          </Text>
          <Text style={styles.origem}>
            Origem: {receitaSelecionada.strArea || 'Internacional'}
          </Text>
        </View>

        <Text style={styles.subtitulo}>Instruções de Preparo:</Text>
        <Text style={styles.instrucoes}>
          {receitaSelecionada.strInstructions || 'Sem instruções disponíveis.'}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagem: {
    width: '100%',
    height: 250,
  },
  conteudo: {
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  categoria: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  origem: {
    fontSize: 14,
    color: '#666',
    fontWeight: '600',
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 8,
    color: '#444',
  },
  instrucoes: {
    fontSize: 14,
    lineHeight: 22,
    color: '#555',
  },
});