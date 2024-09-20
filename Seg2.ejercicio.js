import * as React from 'react';
import { ScrollView, Image, View, Text, StyleSheet } from 'react-native';

function ImageScreen() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.header}>Gallery</Text>
        {/* Lista de imágenes */}
        <Image 
          source={{ uri: 'https://placekitten.com/300/300' }}
          style={styles.image}
        />
        <Image 
          source={{ uri: 'https://placekitten.com/301/301' }}
          style={styles.image}
        />
        <Image 
          source={{ uri: 'https://placekitten.com/302/302' }}
          style={styles.image}
        />
        <Image 
          source={{ uri: 'https://placekitten.com/303/303' }}
          style={styles.image}
        />
        <Image 
          source={{ uri: 'https://placekitten.com/304/304' }}
          style={styles.image}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
    borderRadius: 10,
  },
});

export default ImageScreen;
