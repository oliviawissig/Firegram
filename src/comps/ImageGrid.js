import React from 'react';
import useFirestore from '../hooks/useFirestore';

import { motion } from 'framer-motion';
import firebase from 'firebase';

import '../styling/imagegrid.css';

const ImageGrid = ({ setSelectedImg }) => {
  const { docs, setDocs } = useFirestore('images');

  const handleDate = (d) => {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    //Template literals (`) can contain placeholders. 
    //These are indicated by the dollar sign and curly braces (${expression}).
    return `${day}, ${date} ${month} ${year}`;
  }

  const handleDelete = (id) => {
    //delete the instance in firebase
    const docRef = firebase.firestore().collection("images").doc(id);
    docRef.delete();

    const newDocs = docs.filter((doc) => (
      doc.id !== id
    ));
    setDocs(newDocs);
  }

  return (
    <motion.div className="img-grid">
      {docs && docs.map(doc => (
        <div className='img-wrap' key={doc.id} >
          <motion.div className="img-container"
            layout
            whileHover={{ opacity: 1 }}
            onClick={() => setSelectedImg(doc.url)}
          >
            <motion.img src={doc.url} alt="uploaded pic"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            />
          </motion.div>
          <div className="img-info">
            <span style={{ color: "lightgray" }}>
              Uploaded:
            </span>
            <button className="delete-btn" onClick={() => handleDelete(doc.id)}>
              <i className="fas fa-trash-alt"></i>
            </button>
            <div className="timestamp">
              {doc.createdAt && handleDate(doc.createdAt.toDate())}
            </div>
          </div>
        </div>
      )
      )}
    </motion.div >
  )
}

export default ImageGrid;