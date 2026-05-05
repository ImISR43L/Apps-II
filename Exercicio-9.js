import React, { useState, useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from "react-native";

const AnimatedProgressBar = ({ value }) => {
  const animatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: value,
      duration: 600,
      easing: Easing.out(Easing.ease),
      useNativeDriver: false,
    }).start();
  }, [value]);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  const backgroundColor = animatedValue.interpolate({
    inputRange: [0, 50, 100],
    outputRange: ["#4ade80", "#facc15", "#ef4444"],
  });

  return (
    <View style={styles.barBackground}>
      <Animated.View style={[styles.barFill, { width, backgroundColor }]} />
    </View>
  );
};

export default function EquestriaAlert() {
  const [dangerLevel, setDangerLevel] = useState(0);

  const increaseDanger = () => {
    setDangerLevel((prev) => (prev + 20 > 100 ? 100 : prev + 20));
  };

  const decreaseDanger = () => {
    setDangerLevel((prev) => (prev - 20 < 0 ? 0 : prev - 20));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alerta em Equestria</Text>

      <View style={styles.content}>
        <Text style={styles.description}>
          O céu de Ponyville está sendo monitorado pelas pegasus de Cloudsdale.
          Quando sombras se reúnem na Floresta da Liberdade e criaturas hostis
          se aproximam, os sinos tocam e o nível de alerta do reino é elevado
          para garantir a segurança de todos os pôneis.
        </Text>
      </View>

      <AnimatedProgressBar value={dangerLevel} />

      <Text style={styles.levelText}>{dangerLevel}% de Risco</Text>

      <View style={styles.controls}>
        <Pressable style={styles.buttonSafe} onPress={decreaseDanger}>
          <Text style={styles.buttonText}>Afastar Ameaça</Text>
        </Pressable>
        <Pressable style={styles.buttonDanger} onPress={increaseDanger}>
          <Text style={styles.buttonText}>Invasão Changeling</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fce7f3",
    padding: 24,
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#be185d",
    textAlign: "center",
    marginBottom: 20,
  },
  content: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 16,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: "#fbcfe8",
  },
  description: {
    fontSize: 16,
    color: "#831843",
    lineHeight: 24,
    textAlign: "justify",
  },
  barBackground: {
    height: 24,
    backgroundColor: "#f3e8ff",
    borderRadius: 12,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#e9d5ff",
  },
  barFill: {
    height: "100%",
    borderRadius: 12,
  },
  levelText: {
    textAlign: "center",
    marginTop: 12,
    fontSize: 18,
    fontWeight: "bold",
    color: "#9d174d",
  },
  controls: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
    gap: 12,
  },
  buttonSafe: {
    flex: 1,
    backgroundColor: "#c084fc",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonDanger: {
    flex: 1,
    backgroundColor: "#db2777",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 14,
  },
});
