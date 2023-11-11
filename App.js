import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import UserAvatar from 'react-native-user-avatar';

const flatData = [
  {
    id: 1,
    fullname: 'Aydin Gill',
    place: 'Khartoum, Sudan',
  },
  {
    id: 2,
    fullname: 'Jadyn Shepherd',
    place: 'Ashgabat, Turkmenistan',
  },
  {
    id: 3,
    fullname: 'Jayda Barton',
    place: 'Valletta, Malta',
  },
  {
    id: 4,
    fullname: 'Alfonso Armstrong',
    place: 'Kathmandu, Nepal',
  },
  {
    id: 5,
    fullname: 'Colt Pena',
    place: 'Houston, United States',
  },
  {
    id: 6,
    fullname: 'Cristopher Bean',
    place: 'Malé, Maldives',
  },
  {
    id: 7,
    fullname: 'Sarai Morgan',
    place: 'Ljubljana, Slovenia',
  },
  {
    id: 8,
    fullname: 'Gloria Duffy',
    place: 'Maputo, Mozambique',
  },
  {
    id: 9,
    fullname: 'Dario Gonzales',
    place: 'Kansas City, MO, United States',
  },
  {
    id: 10,
    fullname: 'Tatum Holden',
    place: 'Luxembourg, Luxembourg',
  },
  {
    id: 11,
    fullname: 'Ainsley Perkins',
    place: 'Columbus OH, United States',
  },
  {
    id: 12,
    fullname: 'Micah Carlson',
    place: 'Vatican City, Vatican City',
  },
  {
    id: 13,
    fullname: 'Katrina Mora',
    place: 'Lisbon, Portugal',
  },
  {
    id: 14,
    fullname: 'Gretchen Roberts',
    place: 'Valencia, Spain',
  },
  {
    id: 15,
    fullname: 'Lilah Wilkins',
    place: 'Portland, United States',
  },
  {
    id: 16,
    fullname: 'Hayley Delacruz',
    place: 'Reykjavík, Iceland',
  },
  {
    id: 17,
    fullname: 'Rudy Cameron',
    place: 'Monaco, Monaco',
  },
  {
    id: 18,
    fullname: 'Sonny Mccarty',
    place: 'Thun, Switzerland',
  },
  {
    id: 19,
    fullname: 'Jackson Gentry',
    place: 'Marseille, France',
  },
  {
    id: 20,
    fullname: 'Mateo Sutton',
    place: 'Rome, Italy',
  },
];

const Item = ({ fullname, place }) => (
  <View style={styles.item}>
    <Text style={styles.fullname}><UserAvatar size={50} name={fullname}/>{fullname}</Text>
    <Text style={styles.place}>{place}</Text>
  </View>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={flatData}
        renderItem={({ item }) => <Item fullname={item.fullname} place={item.place} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginLeft: 25,
    marginTop: 250,
  },
  fullname: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  place: {
    fontSize: 16,
    marginLeft: 52,
  },
});

export default App;
