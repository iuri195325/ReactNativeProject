import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native';
import styles from './sytle';

export default function Main() {
const[peso, setPeso]=useState(null);
const[altura, setAltura]=useState(null);
const[result, setResult]=useState(null)

function Calcular(){
    return setResult(((peso)/(altura * altura)).toFixed(2));
}
  return (
   <View style={styles.formBox}>
       <View style={styles.form}>        
           <Text style={styles.formLabel}>Peso</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setPeso}
                    value={peso}
                    placeholder='Ex. 54,76'
                    keyboardType='numeric'
            />
            <Text style={styles.formLabel}>Altura</Text>
            <TextInput
                    style={styles.input}
                    onChangeText={setAltura}
                    value={altura}
                    placeholder='Ex. 1,72'
                    keyboardType='numeric'
            />
            <TouchableOpacity
                style={styles.buttonCalculador}
                onPress={() => {
                    Calcular()
                }}
            >
                <Text style={styles.textButton}>Calcular</Text>
            </TouchableOpacity>    

            
        </View>

       <Text>Resultado</Text>
       <Text>Seu IMC é: {result}</Text>
   </View>
  );
}
