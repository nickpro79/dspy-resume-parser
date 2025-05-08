import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
  page: {
    padding: 0,
    fontFamily: 'Helvetica',
    fontSize: 11,
    lineHeight: 1.6,
    color: '#333',
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#000',
    color: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 40,
    textAlign: 'center',
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  contactInfo: {
    fontSize: 10,
    marginTop: 4,
    color: '#ccc',
  },
  body: {
    flexDirection: 'row',
    padding: 20,
  },
  leftColumn: {
    width: '35%',
    padding: 20, 
    backgroundColor: '#137A6E',
    color: '#fff',
    height: 700, 
  },
  rightColumn: {
    width: '65%',
    paddingLeft: 20,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 6,
    textTransform: 'uppercase',
    color: '#fff', // For left column
  },
  bulletItem: {
    marginLeft: 10,
    marginBottom: 4,
    fontSize: 10,
  },
  experienceItem: {
    marginBottom: 10,
  },
  experienceText: {
    fontSize: 11,
    color: '#444',
  },
});

const ResumePDF = ({ data }) => {
  const name = data.name || 'Name Not Available';
  const email = data.email || 'Email Not Available';
  const phone = data.phone || 'Phone Not Available';

  const getBulletPoints = (key, separator = '\n') => {
    const value = data[key];
    if (!value) return [];
    return value.split(separator).map(item => item.trim()).filter(item => item);
  };

  const education = getBulletPoints('education'); // as-is
  const skills = getBulletPoints('skills', ',');  // comma-separated
  const certifications = getBulletPoints('certifications');
  const projects = getBulletPoints('projects', /\n|•|-/);
  const experience = getBulletPoints('experience', /\n|•|-/);

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.contactInfo}>{email} | {phone}</Text>
        </View>

        {/* Body */}
        <View style={styles.body}>
          {/* Left Column */}
          <View style={styles.leftColumn}>
            {education.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Education</Text>
                {education.map((item, i) => (
                  <Text key={i} style={styles.bulletItem}>• {item}</Text>
                ))}
              </View>
            )}
            {skills.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Technical Expertise</Text>
                {skills.map((item, i) => (
                  <Text key={i} style={styles.bulletItem}>• {item}</Text>
                ))}
              </View>
            )}
            {certifications.length > 0 && (
              <View style={styles.section}>
                <Text style={styles.sectionTitle}>Certifications</Text>
                {certifications.map((item, i) => (
                  <Text key={i} style={styles.bulletItem}>• {item}</Text>
                ))}
              </View>
            )}
          </View>

          {/* Right Column */}
          <View style={styles.rightColumn}>
          <View style={styles.section}>
          <Text style={{ ...styles.sectionTitle, color: '#2c3e50' }}>Professional Experience</Text>
          {experience.map((item, i) => (
            <Text key={i} style={styles.bulletItem}> {item}</Text>
          ))}
        </View>
        {projects.length > 0 && (
          <View style={styles.section}>
            <Text style={{ ...styles.sectionTitle, color: '#2c3e50' }}>Projects</Text>
            {projects.map((item, i) => (
              <Text key={i} style={styles.bulletItem}> {item}</Text>
            ))}
          </View>
        )}
          </View>
        </View>
      </Page>
    </Document>
  );
};

export default ResumePDF;
