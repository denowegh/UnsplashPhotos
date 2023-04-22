import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PhotoElem = ({ sourceUri, title, author }) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri: sourceUri }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {title == null ? "The title did not load" : title}
                </Text>
                <Text style={styles.author}>{author}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: "Black",
        borderBottomWidth: 1,
        flexDirection: "row",
        justifyContent: "center",
        textAlign: "center",
        padding: 15,
    },
    image: { width: 100, height: 100, borderRadius: 10 },
    textContainer: {
        flexDirection: "column",
        justifyContent: "center",
        margin: 10,
        flex: 1,
    },
    title: { fontWeight: "bold", fontSize: 21, flex: 1 },
    author: {},
});

export default PhotoElem;
