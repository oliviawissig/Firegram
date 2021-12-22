import React, { useEffect } from 'react';
import useStorage from '../hooks/useStorage';

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
    <div className="progress-bar" style={{ width: progress + '%' }}></div>
  )
}

export default ProgressBar;