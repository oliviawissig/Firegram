import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

import { motion } from 'framer-motion';

const ProgressBar = ({ file, setFile }) => {
  //hook will fire, take the file, make a reference to the file,
  //and try to upload that file
  //we get return values url and progress
  const { url, progress } = useStorage(file);

  //will run when url changes
  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile])

  return (
    <motion.div className="progress-bar"
      initial={{ width: 0 }}
      animate={{ width: progress + '%' }}
    ></motion.div>
  )
}

export default ProgressBar;