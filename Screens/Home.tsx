import React, { useEffect, useState } from "react";
import {
    View,
    FlatList,
    RefreshControl,
    TouchableOpacity,
    Text,
} from "react-native";
import { DefaultState, GET_INFOCreator } from "../store/PhotoReduser";
import { useDispatch, useSelector } from "react-redux";
import PhotoElem from "../Components/PhotoElem";
import { UnsplashPhoto } from "../store/sagas/PhotoSaga";

function HomeScreen({ navigation }) {
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const photos = useSelector(
        (state: { photoReducer: DefaultState }) => state.photoReducer.photos
    );
    const renderPhoto = ({ item }: { item: UnsplashPhoto }) => (
        <TouchableOpacity
            onPress={() => {
                navigation.navigate("Details", { id: item.id });
            }}
        >
            <PhotoElem
                sourceUri={item.urls.regular}
                author={item.user.name}
                title={item.description}
            />
        </TouchableOpacity>
    );
    useEffect(() => {
        Get();
    }, []);
    function Get() {
        dispatch(GET_INFOCreator());
    }
    return (
        <View style={{ flex: 1 }}>
            {photos.length == 0 ? (
                <Text>The photo did not load</Text>
            ) : (
                <FlatList
                    refreshControl={
                        <RefreshControl
                            refreshing={isLoading}
                            onRefresh={Get}
                        />
                    }
                    data={photos}
                    renderItem={renderPhoto}
                    keyExtractor={(item) => item.id}
                />
            )}
        </View>
    );
}

export default HomeScreen;
