import { db } from "../../firebase";
import { doc, getDoc } from "firebase/firestore";




export const getProfile = async (userId) => {
  const profileRef = doc(db, 'userProfiles', userId);
  const profileSnapshot = await getDoc(profileRef);

  if (profileSnapshot.exists()) {
    return profileSnapshot.data();
  } else {
    return null;
  }
};