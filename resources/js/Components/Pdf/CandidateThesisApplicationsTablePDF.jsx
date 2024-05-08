import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import CandidateTableRow from "./CandidateTableRow";

const borderColor = "#00519C";

const styles = StyleSheet.create({
    tableContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
        marginTop: 24,
        borderWidth: 1,
        borderColor: "#3778C2",
    },
    container: {
        flexDirection: "row",
        borderBottomColor: "#00519C",
        backgroundColor: "#00519C",
        color: "#fff",
        borderBottomWidth: 1,
        alignItems: "center",
        height: 24,
        textAlign: "center",
        fontStyle: "bold",
        flexGrow: 1,
    },
    title: {
        width: "60%",
    },
    identifier: {
        width: "40%",
        borderRightColor: borderColor,
        borderRightWidth: 1,
    },
});

const CandidateThesisApplicationsTablePDF = ({ theses }) => {
    return (
        <View style={styles.tableContainer}>
            {/* Table Header */}
            <View style={styles.container}>
                <Text style={styles.identifier}>Identifiant de thèse</Text>
                <Text style={styles.title}>Titre de thèse</Text>
            </View>
            <CandidateTableRow theses={theses} />
        </View>
    );
};

export default CandidateThesisApplicationsTablePDF;
