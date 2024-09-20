import React, { useState } from 'react';
import { View, Picker, Text } from 'react-native';

const App = () => {
  const [seleccion, setSeleccion] = useState('');

  const opciones = [
    { label: 'Opción 1', value: 'opcion1' },
    { label: 'Opción 2', value: 'opcion2' },
    { label: 'Opción 3', value: 'opcion3' },
  ];

  return (
    <View>
      <Text>Seleccione una opción:</Text>
      <Picker
        selectedValue={seleccion}
        onValueChange={(itemValue) => setSeleccion(itemValue)}
      >
        {opciones.map((opcion) => (
          <Picker.Item label={opcion.label} value={opcion.value} key={opcion.value} />
        ))}
      </Picker>
      <Text>Seleccionaste: {seleccion}</Text>
    </View>
  );
};

export default App;