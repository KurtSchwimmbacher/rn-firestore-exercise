import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { getMyBucketList } from '../services/DbService';

const ListScreen = () => {

  const navigation:any = useNavigation();

  const goToAdd = () => { navigation.navigate("Add") }

  const [bucketItems, setBucketItems] = useState<any[]>([]);

//   useEffect(() => { //only running on first load, when navigation back it doesnt re-render
//     handleGettingData();
//   },[]);

useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      handleGettingData();

      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        // DO NOTHING
      };
    }, [])
  );

  const handleGettingData = async () => {
    var allData = await getMyBucketList();
    console.log("All Data: ", allData);
    setBucketItems(allData);
  }

  return (
    // OPTIONAL - drag to reload our data option
    <SafeAreaView>
        <View  style={styles.container}>

            <Pressable style={styles.addButton} onPress={goToAdd}>
                <Text style={styles.addButtonText}>Add</Text>
                <Entypo name="bucket" size={16} color="green" />
            </Pressable>


            {/* THIS WILL LOOP FOR EACH ITEM  - scrollview or flat list & why used which*/}
            {
            bucketItems.length !== 0 ? (
                bucketItems.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.card}
                    onPress={() => navigation.navigate("Details")}
                >
                    <Text>{item.title}</Text>
                    {item.priority ? (
                    <AntDesign name="star" size={24} color="orange" />
                    ) : null}
                    {/* show the star icon if priority */}
                </TouchableOpacity>
                ))
            ) : (
                <Text>No items found</Text>
            )
            }
            {/* END LOOP */}
        </View>
       
    </SafeAreaView>
  )
}

export default ListScreen

const styles = StyleSheet.create({
    container: {
        padding: 20
    },
    card: {
        width: '100%',
        backgroundColor: 'white',
        padding: 15,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    addButton: {
        backgroundColor: 'white',
        borderColor: 'green',
        borderWidth: 2,
        padding: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    addButtonText: {
        textAlign: 'center',
        color: 'green',
        fontWeight: 'bold'
    }
})