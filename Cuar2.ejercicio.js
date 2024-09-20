import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

const Cuestionario = () => {
  const [preguntas, setPreguntas] = useState([
    {
      id: 1,
      pregunta: '¿Cuál es tu color favorito?',
      opciones: ['Rojo', 'Verde', 'Azul'],
      respuesta: ''
    },
    {
      id: 2,
      pregunta: '¿Cuál es tu animal favorito?',
      opciones: ['Perro', 'Gato', 'Pájaro'],
      respuesta: ''
    },
    {
      id: 3,
      pregunta: '¿Cuál es tu comida favorita?',
      opciones: ['Pizza', 'Hamburguesa', 'Tacos'],
      respuesta: ''
    }
  ]);

  const [resultado, setResultado] = useState({});

  const handleRespuesta = (id, respuesta) => {
    const nuevasPreguntas = preguntas.map((pregunta) => {
      if (pregunta.id === id) {
        pregunta.respuesta = respuesta;
      }
      return pregunta;
    });
    setPreguntas(nuevasPreguntas);
  };

  const handleSubmit = () => {
    const respuestas = preguntas.reduce((acumulado, pregunta) => {
      acumulado[pregunta.id] = pregunta.respuesta;
      return acumulado;
    }, {});
    setResultado(respuestas);
  };

  return (
    <ScrollView>
      {preguntas.map((pregunta) => (
        <View key={pregunta.id} style={{ marginBottom: 20 }}>
          <Text>{pregunta.pregunta}</Text>
          {pregunta.opciones.map((opcion) => (
            <TouchableOpacity
              key={opcion}
              onPress={() => handleRespuesta(pregunta.id, opcion)}
              style={{
                backgroundColor: pregunta.respuesta === opcion ? '#ccc' : '#fff',
                padding: 10,
                borderRadius: 5,
                marginBottom: 10
              }}
            >
              <Text>{opcion}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#4CAF50', padding: 10, borderRadius: 5 }}>
        <Text>Enviar respuestas</Text>
      </TouchableOpacity>
      {Object.keys(resultado).length > 0 && (
        <View style={{ marginTop: 20 }}>
          <Text>Resultados:</Text>
          {Object.keys(resultado).map((id) => (
            <Text key={id}>
              Pregunta {id}: {resultado[id]}
            </Text>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

export default Cuestionario;