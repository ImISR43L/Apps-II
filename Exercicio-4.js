import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function BotaoPressable() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pressione o botão abaixo</Text>

      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed,
        ]}
      >
        {({ pressed }) => (
          <Text style={styles.buttonText}>
            {pressed ? "Pressionando!" : "Me Pressione"}
          </Text>
        )}
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8F9FA",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 30,
    color: "#333",
  },
  button: {
    backgroundColor: "#E87C22",
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 8,
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});
