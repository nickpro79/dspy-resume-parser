import React, { useState } from 'react';
import '../styles/PageStyles.css';
import Navbar from '../components/Navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please choose a file first.");
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    setIsLoading(true);

    try {
      const res = await axios.post('http://localhost:8000/upload', formData, {
        headers: { 
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });

      navigate('/result', {
        state: {
          formatted_resume: res.data.formatted_resume,
          filename: res.data.filename
        }
      });

    } catch (err) {
      console.error(err);
      alert("Upload failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="page-container">
        <div className="home-box">
          <h1>Resume Formatter</h1>
          <p>Upload your resume to get a well-formatted version</p>

          <div className="form-group">
            <label className="file-label">
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="file-input"
              />
              Choose File
            </label>
          </div>

          {fileName && <p className="file-name">{fileName}</p>}

          <div className="form-group">
            <button className="upload-btn" onClick={handleUpload} disabled={isLoading}>
              {isLoading ? 'Uploading...' : 'Upload'}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
