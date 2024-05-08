import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    section: {
        flexDirection: "row",
        marginBottom: 5,
    },
    label: {
        width: "30%",
        fontWeight: "bold",
        fontSize: "16",
    },
    value: {
        flexGrow: 1,
        fontSize: "16",
    },
});

const PersonalInfoLayoutPDF = ({ personalData }) => {
    return (
        <View style={styles.container}>
            <Text
                style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}
            >
                Informations Personnelles
            </Text>
            <View style={styles.section}>
                <Text style={styles.label}>Nom de famille :</Text>
                <Text style={styles.value}>{personalData.lastName}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Prénom :</Text>
                <Text style={styles.value}>{personalData.firstName}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Date de naissance :</Text>
                <Text style={styles.value}>{personalData.dateOfBirth}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Ville, Pays :</Text>
                <Text style={styles.value}>
                    {personalData.city}, {personalData.country}
                </Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>N CIN :</Text>
                <Text style={styles.value}>{personalData.cin}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Adresse postale :</Text>
                <Text style={styles.value}>{personalData.address}</Text>
            </View>
            <View style={styles.section}>
                <Text style={styles.label}>Téléphone :</Text>
                <Text style={styles.value}>{personalData.phone_number}</Text>
            </View>
        </View>
    );
};

export default PersonalInfoLayoutPDF;
