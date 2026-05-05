import React from "react";
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  FlatList,
} from "react-native";

const memories = [
  {
    id: "1",
    title: "Sorriso de Prata",
    desc: "A magia de gelo ressoa com o espírito familiar nos jardins da mansão.",
  },
  {
    id: "2",
    title: "Devoção Oni",
    desc: "Uma manhã azul manchada pela determinação e por uma corrente de ferro.",
  },
  {
    id: "3",
    title: "Vento Cortante",
    desc: "O orgulho vermelho protege os corredores com magia de vento implacável.",
  },
  {
    id: "4",
    title: "Retorno pela Morte",
    desc: "O miasma sombrio envolve o ciclo interminável de desespero e salvação.",
  },
  {
    id: "5",
    title: "Biblioteca Proibida",
    desc: "Páginas de sabedoria ancestral trancadas no cruzamento de infinitas portas.",
  },
  {
    id: "6",
    title: "Chá da Ganância",
    desc: "Conhecimento absoluto oferecido sob o céu de um campo de grama infinita.",
  },
];

export default function ReZeroResponsive() {
  const { width, height } = useWindowDimensions();
  const isPortrait = height >= width;
  const numColumns = isPortrait ? 1 : 2;

  const containerPadding = 16;
  const gap = 16;

  const cardWidth = isPortrait
    ? width - containerPadding * 2
    : (width - containerPadding * 2 - gap) / 2;

  const renderItem = ({ item }) => (
    <View style={[styles.card, { width: cardWidth }]}>
      <Text style={styles.cardTitle}>{item.title}</Text>
      <Text style={styles.cardDesc}>{item.desc}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Registros de Lugunica</Text>
        <Text style={styles.headerDesc}>
          As memórias se reorganizam conforme a perspectiva do seu Metia. Gire o
          artefato para reescrever as linhas do tempo e revelar novas colunas de
          observação.
        </Text>
      </View>

      <FlatList
        key={numColumns}
        data={memories}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={numColumns}
        contentContainerStyle={styles.listContent}
        columnWrapperStyle={!isPortrait && styles.columnWrapper}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a2e",
  },
  header: {
    paddingTop: 50,
    paddingBottom: 24,
    paddingHorizontal: 20,
    backgroundColor: "#3b2554",
    borderBottomWidth: 3,
    borderBottomColor: "#6a0dad",
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#e0c097",
    textAlign: "center",
    marginBottom: 10,
    letterSpacing: 1,
  },
  headerDesc: {
    fontSize: 15,
    color: "#d1d1e0",
    textAlign: "center",
    lineHeight: 22,
    fontStyle: "italic",
  },
  listContent: {
    padding: 16,
    gap: 16,
  },
  columnWrapper: {
    gap: 16,
  },
  card: {
    backgroundColor: "#2a2a40",
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: "#4d4d73",
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 10,
  },
  cardDesc: {
    fontSize: 14,
    color: "#a3a3c2",
    lineHeight: 20,
  },
});
