import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Pressable,
  useColorScheme,
  Platform,
} from "react-native";

const actRecords = [
  { id: "1", name: "Green Hill", speed: "S-Rank" },
  { id: "2", name: "Chemical Plant", speed: "A-Rank" },
  { id: "3", name: "Casino Night", speed: "S-Rank" },
  { id: "4", name: "Ice Cap", speed: "B-Rank" },
  { id: "5", name: "Flying Battery", speed: "A-Rank" },
  { id: "6", name: "Sandopolis", speed: "C-Rank" },
  { id: "7", name: "Lava Reef", speed: "S-Rank" },
  { id: "8", name: "Sky Sanctuary", speed: "S-Rank" },
  { id: "9", name: "Death Egg", speed: "A-Rank" },
];

export default function SonicProfileScreen() {
  const [isFollowing, setIsFollowing] = useState(false);
  const colorScheme = useColorScheme();
  const isDark = colorScheme === "dark";

  const theme = {
    background: isDark ? "#0f172a" : "#e0f2fe",
    surface: isDark ? "#1e293b" : "#ffffff",
    textMain: isDark ? "#f8fafc" : "#0f172a",
    textSub: isDark ? "#94a3b8" : "#64748b",
    primary: isDark ? "#3b82f6" : "#2563eb",
    border: isDark ? "#334155" : "#cbd5e1",
  };

  const renderAct = ({ item }) => (
    <View
      style={[
        styles.actCard,
        { backgroundColor: theme.surface, borderColor: theme.border },
        styles.shadow,
      ]}
    >
      <Text style={[styles.actTitle, { color: theme.primary }]}>
        {item.name}
      </Text>
      <Text style={[styles.actSpeed, { color: theme.textSub }]}>
        {item.speed}
      </Text>
    </View>
  );

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View
        style={[
          styles.profileCard,
          { backgroundColor: theme.surface },
          styles.shadow,
        ]}
      >
        <Image
          source={{
            uri: "https://i.redd.it/which-sonic-symbol-has-your-favorite-design-i-know-the-last-v0-m77npykez8i71.jpg?width=1016&format=pjpg&auto=webp&s=5ad53564737be949445806dfba141b9c4250be0b",
          }}
          style={styles.avatar}
        />
        <Text style={[styles.name, { color: theme.textMain }]}>
          Ouriço Azul
        </Text>
        <Text style={[styles.role, { color: theme.textSub }]}>
          O Herói Mais Rápido de Mobius
        </Text>

        <View style={styles.statsGrid}>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.textMain }]}>
              1991
            </Text>
            <Text style={[styles.statLabel, { color: theme.textSub }]}>
              Anéis
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.textMain }]}>8</Text>
            <Text style={[styles.statLabel, { color: theme.textSub }]}>
              Aliados
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={[styles.statValue, { color: theme.textMain }]}>
              300+
            </Text>
            <Text style={[styles.statLabel, { color: theme.textSub }]}>
              Badniks
            </Text>
          </View>
        </View>

        <Pressable
          onPress={() => setIsFollowing(!isFollowing)}
          style={({ pressed }) => [
            styles.followButton,
            {
              backgroundColor: isFollowing ? "transparent" : theme.primary,
              borderColor: theme.primary,
              borderWidth: isFollowing ? 2 : 0,
              opacity: pressed ? 0.7 : 1,
            },
          ]}
        >
          <Text
            style={[
              styles.followButtonText,
              { color: isFollowing ? theme.primary : "#ffffff" },
            ]}
          >
            {isFollowing ? "Acompanhando o Ritmo" : "Correr Junto"}
          </Text>
        </Pressable>
      </View>

      <View style={styles.listContainer}>
        <Text style={[styles.sectionTitle, { color: theme.textMain }]}>
          Zonas Concluídas
        </Text>
        <FlatList
          data={actRecords}
          renderItem={renderAct}
          keyExtractor={(item) => item.id}
          numColumns={3}
          contentContainerStyle={styles.flatListContent}
          columnWrapperStyle={styles.columnWrapper}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
  },
  shadow: Platform.select({
    ios: {
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.15,
      shadowRadius: 5,
    },
    android: {
      elevation: 6,
    },
  }),
  profileCard: {
    marginHorizontal: 20,
    borderRadius: 20,
    padding: 24,
    alignItems: "center",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#eab308",
    marginBottom: 12,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 4,
    letterSpacing: 1,
  },
  role: {
    fontSize: 14,
    fontStyle: "italic",
    marginBottom: 20,
  },
  statsGrid: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    marginBottom: 24,
    paddingHorizontal: 10,
  },
  statItem: {
    alignItems: "center",
  },
  statValue: {
    fontSize: 20,
    fontWeight: "bold",
  },
  statLabel: {
    fontSize: 12,
    textTransform: "uppercase",
    marginTop: 4,
  },
  followButton: {
    width: "100%",
    paddingVertical: 14,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  followButtonText: {
    fontSize: 16,
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: 1,
  },
  listContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textTransform: "uppercase",
  },
  flatListContent: {
    paddingBottom: 20,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
  actCard: {
    width: "31%",
    aspectRatio: 1,
    borderRadius: 12,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
  },
  actTitle: {
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  actSpeed: {
    fontSize: 11,
    fontWeight: "bold",
  },
});
