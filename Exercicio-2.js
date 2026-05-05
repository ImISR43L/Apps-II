import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function LayoutFlexbox() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Header do Site</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.contentText}>
          <h1>Calamity</h1>
        </Text>
        <Text style={styles.contentText}>
          Bom mod para terraria, recomendo!
        </Text>
      </View>

      <TouchableOpacity style={styles.footerButton}>
        <Text style={styles.buttonText}>Jogar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
  },
  header: {
    height: 60,
    backgroundColor: "#0F9D58",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  headerText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  contentText: {
    fontSize: 16,
    color: "#333333",
    textAlign: "center",
    marginBottom: 15,
  },
  footerButton: {
    position: "absolute",
    bottom: 30,
    left: 20,
    right: 20,
    backgroundColor: "#4285F4",
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3,
    elevation: 5,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
