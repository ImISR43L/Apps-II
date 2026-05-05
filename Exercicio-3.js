import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

const calamityElements = [
  { id: 0, name: "Brimstone", icon: "🔥" },
  { id: 1, name: "Abyss", icon: "🌊" },
  { id: 2, name: "Astral", icon: "☄️" },
  { id: 3, name: "Sulphurous", icon: "🧪" },
  { id: 4, name: "Profaned", icon: "☀️" },
  { id: 5, name: "Rogue", icon: "🗡️" },
  { id: 6, name: "Sunken", icon: "🐚" },
  { id: 7, name: "Exo", icon: "⚙️" },
  { id: 8, name: "Auric", icon: "⚡" },
];

export default function CalamityGrid() {
  const [activeCells, setActiveCells] = useState(Array(9).fill(false));

  const toggleCell = (index) => {
    const newCells = [...activeCells];
    newCells[index] = !newCells[index];
    setActiveCells(newCells);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calamity Mod Elements</Text>

      <View style={styles.gridContainer}>
        {calamityElements.map((item, index) => (
          <Pressable
            key={item.id}
            style={[
              styles.cell,
              activeCells[index] ? styles.cellActive : styles.cellInactive,
            ]}
            onPress={() => toggleCell(index)}
          >
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.cellText}>{item.name}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0d0d1a",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#ff4d4d",
    marginBottom: 30,
    textTransform: "uppercase",
    letterSpacing: 2,
  },
  gridContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
    paddingHorizontal: 6,
  },
  cell: {
    width: "33.33%",
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#0d0d1a",
    borderRadius: 8,
  },
  cellInactive: {
    backgroundColor: "#1a1a33",
  },
  cellActive: {
    backgroundColor: "#b30000",
  },
  icon: {
    fontSize: 34,
    marginBottom: 10,
  },
  cellText: {
    color: "#e6e6e6",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
