import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const borderColor = "#3778C2";
const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    borderBottomColor: "#3778C2",
    borderBottomWidth: 1,
    alignItems: "center",
    fontStyle: "bold"
  },
  title: {
    display: "flex",
    flexDirection: "row",
    width: "80%",
    textAlign: "right",
    borderRightColor: borderColor,
    borderRightWidth: 1,
    paddingLeft: 8,
    paddingRight: 4,
  },
  identifier: {
    width: "20%",
    borderRightColor: borderColor,
    paddingRight: 10
  },
});

const CandidateTableRow = ({ theses }) => {
  const rows = theses.map((thesis) => (
    <View style={styles.row} key={thesis.id}>
      <Text style={styles.identifier}>{thesis.id}</Text>
      <Text style={styles.title}>{thesis.title}</Text>
    </View>
  ));
  return <>{rows}</>;
};

export default CandidateTableRow;