// All of our firestore functionality 
import { collection, addDoc, getDocs, query, orderBy, where } from "firebase/firestore"; 
import { db } from "../firebase";

// TODO: Create new list item function


export const createNewBucketItem = async (item) => {
    try {
    
        // docRef is our reference to the document we are creating (brand new document with a self generated ID)
        const docRef = await addDoc(collection(db, "items"), item);
        console.log("Document written with ID: ", docRef.id);
        return true; // be a bit more specific about why it was successful
    } catch (e) {
        console.error("Error adding document: ", e);
        return false; // be a bit more specific about why it failed
    }

}


// TODO: Get all list items function

export const getMyBucketList = async () => {

    var allItems = []; //this is the array we want to return
    // making a custom query to add order by or limit 
    var q = query(collection(db, "items"), orderBy('priority',"desc"), where("priority","==",true)); // query to get all items in the collection by priority ascending


    // getDocs - get all the docs in our collection {optional 'where' that you can add}
    const querySnapshot = await getDocs(q);
    // not getting the data as JSON. Each document is a snapshot that has a .data
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        
        // console.log(doc.id, " => ", doc.data());
        allItems.push({ ...doc.data(), id: doc.id }); // push each doc's data and id as a single object to the array
    });


    return allItems; // return the array of items

// cant just use query snapshot as the array of items - need to access the .data()

}