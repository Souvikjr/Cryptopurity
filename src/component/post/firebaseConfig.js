import {initializeApp} from 'firebase/app'
import { getAuth } from 'firebase/auth';
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCsITRUl981gLBX_POce89PN4TBX8km7Qc",
  authDomain: "metavy-socal-apy.firebaseapp.com",
  projectId: "metavy-socal-apy",
  storageBucket: "metavy-socal-apy.appspot.com",
  messagingSenderId: "1076022607735",
  appId: "1:1076022607735:web:ed4137ad4c9d422213eb72"
  };

  const app = initializeApp(firebaseConfig);
  export const storage = getStorage(app);
  export const db = getFirestore(app);
  export const auth =getAuth(app);