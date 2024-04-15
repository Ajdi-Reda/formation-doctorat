import React from 'react';
import { Document, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import PersonalInfoLayoutPDF from './PersonalInfoLayoutPDF';
import CandidateThesisApplicationsTablePDF from './CandidateThesisApplicationsTablePDF';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 20,
  },
  section: {
    marginBottom: 10,
  },
});

const SummaryPDF = ({ formData }) => {
  const { personalData, theses } = formData;
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          {/* Render Personal Information */}
          <PersonalInfoLayoutPDF personalData={personalData} />
        </View>
        <View style={styles.section}>
          {/* Render Candidate Thesis Applications */}
          <CandidateThesisApplicationsTablePDF theses={theses} />
        </View>
      </Page>
    </Document>
  );
};

export default SummaryPDF;
