// ExploreScreen.js
import React from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const categories = [
    { title: 'Fresh Fruits & Vegetable', image: { uri: 'https://i.imgur.com/Jm4M0pr.png' } },
    { title: 'Cooking Oil & Ghee', image: { uri: 'https://i.imgur.com/AX0c5s2.png' } },
    { title: 'Meat & Fish', image: { uri: 'https://i.imgur.com/OdL0XPt.png' } },
    { title: 'Bakery & Snacks', image: { uri: 'https://i.imgur.com/TJK8waP.png' } },
    { title: 'Dairy & Eggs', image: { uri: 'https://i.imgur.com/DLDg7u4.png' } },
    { title: 'Beverages', image: { uri: 'https://i.imgur.com/wHbjRz4.png' } },
  ];
  

export default function ExploreScreen() {
  return (
    <View style={{ flex: 1, padding: 16, backgroundColor: '#fff' }}>
      <Text style={{ fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginBottom: 12 }}>
        Find Products
      </Text>

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#f2f2f2',
          paddingHorizontal: 12,
          paddingVertical: 8,
          borderRadius: 20,
          marginBottom: 16,
        }}
      >
        <Ionicons name="search-outline" size={20} color="gray" />
        <TextInput
          placeholder="Search Store"
          style={{ marginLeft: 10, fontSize: 16, flex: 1 }}
        />
      </View>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.title}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              backgroundColor: '#f9f9f9',
              borderRadius: 12,
              padding: 10,
              alignItems: 'center',
              marginBottom: 16,
              width: '48%',
            }}
          >
            <Image
              source={item.image}
              style={{ width: 80, height: 80, marginBottom: 8 }}
              resizeMode="contain"
            />
            <Text style={{ textAlign: 'center', fontSize: 14 }}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
