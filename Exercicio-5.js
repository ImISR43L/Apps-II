import React from "react";
import { View, Text, StyleSheet, Platform, StatusBar } from "react-native";

export default function EstilosPlataformaCalamity() {
  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "ios" ? "dark-content" : "light-content"}
        backgroundColor={Platform.OS === "android" ? "#5a0000" : "#ffffff"}
      />

      <View style={[styles.headerBase, styles.headerPlatform]}>
        <Text style={styles.headerText}>
          {Platform.OS === "ios" ? "Exo Empire" : "Brimstone Crags"}
        </Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Ressonância do Artefato</Text>
        <Text style={styles.description}>
          As energias deste bioma foram transmutadas pelas características do
          seu transmissor. A matriz de luz de Draedon ou as chamas de Azafure se
          manifestam de acordo com o sistema operacional detectado em seu
          dispositivo.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d1a",
  },
  headerBase: {
    paddingTop: Platform.OS === "ios" ? 50 : 20,
    paddingBottom: 20,
    paddingHorizontal: 24,
    justifyContent: "center",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 6,
      },
    }),
  },
  headerPlatform: Platform.select({
    ios: {
      backgroundColor: "#ffffff",
      alignItems: "center",
    },
    android: {
      backgroundColor: "#8b0000",
      alignItems: "flex-start",
    },
  }),
  headerText: Platform.select({
    ios: {
      color: "#00b3b3",
      fontSize: 22,
      fontWeight: "bold",
      letterSpacing: 2,
      textTransform: "uppercase",
    },
    android: {
      color: "#ffcc00",
      fontSize: 22,
      fontWeight: "bold",
      fontStyle: "italic",
    },
  }),
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#ff4d4d",
    marginBottom: 16,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#e6e6e6",
    textAlign: "center",
    lineHeight: 24,
  },
});
