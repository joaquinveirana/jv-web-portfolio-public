'use server';

import { initializeApp, getApps } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { LearningItem } from '@/interfaces/db-entities';
import dayjs from 'dayjs';
const customParseFormat = require('dayjs/plugin/customParseFormat');
dayjs.extend(customParseFormat);

const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
};

const firebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const storage = getStorage(firebaseApp);
const db = getFirestore(firebaseApp);

const storageRef = ref(storage, process.env.resume_filename);

export const getResumeStorageURL = () => {
  const response = getDownloadURL(storageRef);
  return response;
};

export const getFileStorageURL = (file: string) => {
  const reference = ref(storage, file);
  const response = getDownloadURL(reference);
  return response;
};

export const getDbBadges = async () => {
  const badgesArray: LearningItem[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'badge'));
    querySnapshot.forEach(doc => badgesArray.push(doc.data() as LearningItem));
    const sortedObjects = badgesArray.sort((a, b) => {
      const dateA = dayjs(a.date, 'DD/MM/YYYY');
      const dateB = dayjs(b.date, 'DD/MM/YYYY');
      if (dateA.isBefore(dateB)) {
        return 1;
      } else {
        return -1;
      }
    });
    return sortedObjects;
  } catch (error) {
    console.log(error);
    return badgesArray;
  }
};

export const getDbCertificates = async () => {
  const certsArray: LearningItem[] = [];
  try {
    const querySnapshot = await getDocs(collection(db, 'certificado'));
    querySnapshot.forEach(doc => certsArray.push(doc.data() as LearningItem));
    const sortedObjects = certsArray.sort((a, b) => {
      const dateA = dayjs(a.date, 'DD/MM/YYYY');
      const dateB = dayjs(b.date, 'DD/MM/YYYY');
      if (dateA.isBefore(dateB)) {
        return 1;
      } else {
        return -1;
      }
    });
    return sortedObjects;
  } catch (error) {
    console.log(error);
    return certsArray;
  }
};
