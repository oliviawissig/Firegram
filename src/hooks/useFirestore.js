import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";

const useFirestore = (collection) => {
  const [docs, setDocs] = useState([]);

  useEffect(() => {
    //returns function that is used to unsubscribe from collections
    const unsub = projectFirestore.collection(collection)
      .orderBy('createdAt', 'desc')
      .onSnapshot((snap) => {
        //every time a new image is added, we get notified with this snapshot
        let documents = [];
        snap.forEach(doc => {
          //gets data in each document in firestone database
          //(createdAt, url)
          documents.push({ ...doc.data(), id: doc.id });
        });
        setDocs(documents);
      })
    //unsubscribes from collection when we no longer use it. 
    return () => unsub();
  }, [collection])

  return { docs, setDocs };
}

export default useFirestore;