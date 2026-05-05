import React, { createContext, useContext } from "react";
import { View, Text, StyleSheet, useColorScheme } from "react-native";

const lightColors = {
  background: "#f0f0f5",
  surface: "#ffffff",
  text: "#2e2e5c",
  accent: "#7a42f4",
  border: "#d1d1e0",
};

const darkColors = {
  background: "#0a0a14",
  surface: "#17172b",
  text: "#e0e0eb",
  accent: "#9d66ff",
  border: "#2e2e5c",
};

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

const SantuarioScreen = () => {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View
        style={[
          styles.header,
          { borderBottomColor: theme.border, backgroundColor: theme.surface },
        ]}
      >
        <Text style={[styles.title, { color: theme.accent }]}>O Santuário</Text>
      </View>

      <View style={styles.content}>
        <View
          style={[
            styles.card,
            { backgroundColor: theme.surface, borderColor: theme.border },
          ]}
        >
          <Text style={[styles.cardTitle, { color: theme.text }]}>
            Ciclo de Luz e Sombra
          </Text>
          <Text style={[styles.cardText, { color: theme.text }]}>
            A percepção deste mundo se altera conforme a luz da sua alma. Sob a
            benção do Dragão, as cores se tornam gentis e prateadas. Quando o
            miasma se intensifica, o mundo mergulha em um abismo escuro e
            púrpura.
          </Text>
        </View>
      </View>
    </View>
  );
};

export default function ReZeroThemeApp() {
  return (
    <ThemeProvider>
      <SantuarioScreen />
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 60,
    paddingBottom: 20,
    alignItems: "center",
    borderBottomWidth: 1,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    letterSpacing: 2,
    textTransform: "uppercase",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    padding: 24,
    borderRadius: 12,
    borderWidth: 1,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  cardText: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: "justify",
  },
});
