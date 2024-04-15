import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  section: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  label: {
    width: '30%',
    fontWeight: 'bold',
    fontSize: '16',
  },
  value: {
    flexGrow: 1,
    fontSize: '16',
  },
});

const PersonalInfoLayoutPDF = ({ personalData }) => {
  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Personal Information</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Last Name:</Text>
        <Text style={styles.value}>{personalData.lastName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>First Name:</Text>
        <Text style={styles.value}>{personalData.firstName}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Date of Birth:</Text>
        <Text style={styles.value}>{personalData.dateOfBirth}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>City, Country:</Text>
        <Text style={styles.value}>{personalData.city}, {personalData.country}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>N CIN:</Text>
        <Text style={styles.value}>{personalData.cin}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Address Postale:</Text>
        <Text style={styles.value}>{personalData.address}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Telephone:</Text>
        <Text style={styles.value}>{personalData.phone_number}</Text>
      </View>
    </View>
  );
};

export default PersonalInfoLayoutPDF;
