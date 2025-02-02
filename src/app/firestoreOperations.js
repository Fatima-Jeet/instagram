"use client";
import { firestore } from './firebaseconfig'; // Adjust the path if needed
import { collection, addDoc } from 'firebase/firestore';

// Reference to the 'code' collection
const codeCollection = collection(firestore, 'code');

// Function to add a new document
async function addCodeDocument(data) {
  try {
    // Add a new document with an autogenerated ID
    const docRef = await addDoc(codeCollection, data);
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
}

// Example usage
const newDocumentData = {
  field1: 'value1',
  field2: 'value2',
  // Add more fields as needed
};

addCodeDocument(newDocumentData);
