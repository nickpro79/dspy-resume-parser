import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { PDFDownloadLink } from '@react-pdf/renderer';
import ResumePDF from '../components/ResumePDF'; // <-- Import this
import '../styles/PageStyles.css';

export default function Result() {
  const { state } = useLocation();
  const { formatted_resume, filename } = state || {};
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/home');
  };

  if (!formatted_resume) {
    return (
      <div className="page-container">
        <div className="resume-box">
          <h2>No resume data received</h2>
        </div>
      </div>
    );
  }

  return (
    <div className="page-container result-container">
      <div className="resume-box">
        <div className="top-buttons no-print">
          <PDFDownloadLink
            document={<ResumePDF data={formatted_resume} />}
            fileName={`${formatted_resume.name || 'resume'}.pdf`}
          >
            {({ loading }) => (
              <button className="action-button">
                {loading ? 'Preparing PDF...' : 'Download PDF'}
              </button>
            )}
          </PDFDownloadLink>

          <button className="action-button" onClick={handleBack}>
            Back to Home
          </button>
        </div>

        <div className="resume-header">
          <h2>{formatted_resume.name || "Name Not Available"}</h2>
          <p>{formatted_resume.email || "Email Not Available"}</p>
          <p>{formatted_resume.phone || "Phone Not Available"}</p>
        </div>

        <div className="resume-grid">
          {Object.entries(formatted_resume).map(([label, value]) => {
            if (["name", "email", "phone"].includes(label)) return null;
            return (
              <div className="resume-item" key={label}>
                <label>{label.charAt(0).toUpperCase() + label.slice(1)}:</label>
                <p>{value}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
