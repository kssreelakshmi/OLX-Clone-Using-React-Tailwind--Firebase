import React, { createContext, useContext, useState,useEffect } from 'react'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut,onAuthStateChanged,updateProfile } from 'firebase/auth'
import {auth,db,storage} from '../Firebase/FirebaseConfig'
import {doc,setDoc,addDoc,collection,getDocs } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';


export const FirebaseContext = createContext(null);
export const AuthContext = createContext(null);
export const PostsContext = createContext(null);

export default function AuthContexts({ children }) {
    const [user, setUser] = useState(null);

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser)
    })
    return ()=> unsubscribe;
   
    },[])

    const signUp = async (email, password, username, phoneNumber) => {
        try {
          const result = await createUserWithEmailAndPassword(auth,email, password);
          await updateProfile(result.user, { displayName: username });
          await setDoc(doc(db, 'users', result.user.uid), {
            id: result.user.uid,
            username: username,
            phone: phoneNumber,
          });
          return result;
        } catch (e) {
          console.error(e);
          throw e;
        }
      };

    const logIn = async(email, password) =>{
        try {
            return await signInWithEmailAndPassword(auth, email, password);
          } catch (e) {
            console.error(e);
            throw e;
          }
    }
    function logOut(){
        return signOut(auth);
    }

    return (
        <AuthContext.Provider value={{ user, setUser,signUp,logIn,logOut }}>
            {children}
        </AuthContext.Provider>
    );
    
}

export function PostProvider({ children }) {
  const [postDetails, setPostDetails] = useState(null);
  const [products,setProducts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const result = await getDocs(collection(db, 'products'));
        const allPosts = result.docs.map((product) => ({
          ...product.data(),
          id: product.id,
        }));
        setProducts(allPosts);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  

  const sellProduct = async (productName, category, price, image, date) => {
    try {
      // Upload the image
      const imageRef = ref(storage, `images/${image.name}`);
      const snapshot = await uploadBytes(imageRef, image);
      const url = await getDownloadURL(snapshot.ref);

      // Add product details to Firestore
      await addDoc(collection(db, 'products'), {
        product_name: productName,
        category,
        price,
        url,
        userId: user.uid,
        createdAt: date.toDateString()
      });
      
    } catch (error) {
      console.error("Error selling product: ", error);
      throw error; // Propagate error to the caller
    }
  };

  return (
    <PostsContext.Provider value={{ postDetails, setPostDetails, sellProduct,products }}>
      {children}
    </PostsContext.Provider>
  );
}
export function UserAuth(){
    return useContext(AuthContext)
}

export function ProductDetails(){
  return useContext(PostsContext)
}