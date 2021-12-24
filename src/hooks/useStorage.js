import { useEffect, useState } from "react";
import { projectFirestore, projectStorage, timestamp } from '../firebase/config';

const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  //every time we have a new value, it will run code inside 
  //useEffect() to upload file
  useEffect(() => {
    //references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    storageRef.put(file).on('state_changed', (snap) => {
      //snap = snapshot in time of the upload in that moment in time
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      setUrl(url);
      collectionRef.add({ url, createdAt })
    });
  }, [file]);

  return { progress, url, error }
}

export default useStorage;