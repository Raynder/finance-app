import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../../components/Header'
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
  {
    id: 1,
    label: 'Uber',
    date: '17/07/2023',
    value: '20,00',
    type: 0, //despesas
  },
  {
    id: 2,
    label: 'Salario',
    date: '30/07/2023',
    value: '1.200,00',
    type: 1, //receita
  },
  {
    id: 3,
    label: 'Aluguel',
    date: '05/08/2023',
    value: '900,00',
    type: 0, //despesas
  }
]

export default function Home() {
  return (
    <View style={styles.container}>
      <Header name="Raynder Cardoso"/>
      <Balance saldo="9.350,00" gastos="527,00"/>
      <Actions />
      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={(item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={ ({item}) => <Moviments data={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },
  list: {
    marginStart: 14,
    marginEnd: 14,
  }
});
