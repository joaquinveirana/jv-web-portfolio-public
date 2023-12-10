import { initializeApp, getApps } from 'firebase/app';
import { getStorage, ref, getDownloadURL } from 'firebase/storage';

export const firebaseConfig = {
  apiKey: process.env.firebase_apiKey,
  authDomain: process.env.firebase_authDomain,
  projectId: process.env.firebase_projectId,
  storageBucket: process.env.firebase_storageBucket,
  messagingSenderId: process.env.firebase_messagingSenderId,
  appId: process.env.firebase_appId,
};

export const firebaseApp =
  getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const storage = getStorage(firebaseApp);

export const storageRef = ref(storage, process.env.resume_filename);

export const getResumeStorageURL = () => {
  const response = getDownloadURL(storageRef);
  return response;
};
