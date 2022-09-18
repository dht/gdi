import { initializeApp } from 'firebase/app';
import {
    getFirestore,
    collection,
    getDocs,
    setDoc,
    getDoc,
    deleteDoc,
    doc,
    addDoc,
    writeBatch,
    updateDoc,
} from 'firebase/firestore/lite';

export const firebase = {
    initializeApp,
    getFirestore,
    collection,
    getDocs,
    setDoc,
    getDoc,
    deleteDoc,
    doc,
    addDoc,
    writeBatch,
    updateDoc,
};
