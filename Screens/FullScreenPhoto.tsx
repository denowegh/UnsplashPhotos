import React from "react";
import { View, Image } from "react-native";
import { useSelector } from "react-redux";
import { DefaultState } from "../store/PhotoReduser";

function DetailsScreen({ route, navigation }) {
    const { id } = route.params;
    const photos = useSelector(
        (state: { photoReducer: DefaultState }) => state.photoReducer.photos
    );
    const photo = photos.find((e) => e.id == id);
    let description: string =
        photo.description == null
            ? "The title did not load"
            : photo.description;
    navigation.setOptions({
        title: `${description}`,
    });

    return (
        <View style={{ flex: 1 }}>
            <Image
                source={{ uri: photo.urls.regular }}
                style={{ width: "100%", height: "100%" }}
            ></Image>
        </View>
    );
}

export default DetailsScreen;
