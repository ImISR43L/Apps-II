import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function ExemploCartao() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{
            uri: "https://images.igdb.com/igdb/image/upload/t_cover_big_2x/cobryq.jpg",
          }}
          style={styles.image}
        />
        <Text style={styles.title}>Calamity</Text>
        <Text style={styles.description}>
          O Calamity Mod é um extenso mod de conteúdo para Terraria que adiciona
          muitas horas de conteúdo pós-jogo e dezenas de inimigos e chefes
          espalhados pela progressão do jogo base. O Calamity Mod também
          apresenta diversos modos de dificuldade mais desafiadores, cinco novos
          biomas e novas estruturas, uma nova classe, mais de cinquenta novas
          músicas, mais de cinquenta receitas para itens do jogo base que antes
          não podiam ser criados e outras mudanças diversas na jogabilidade
          original.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 24,
    alignItems: "center",
    width: "100%",
    maxWidth: 350,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 8,
  },
  description: {
    fontSize: 14,
    color: "#666666",
    textAlign: "center",
    lineHeight: 20,
  },
});
