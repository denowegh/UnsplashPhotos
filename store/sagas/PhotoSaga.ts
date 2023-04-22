import { put, call, takeLatest } from "redux-saga/effects";
import { GET_PHOTOS, setPhotos } from "../PhotoReduser";
import { Alert } from "react-native";

export interface UnsplashPhoto {
    id: string;
    description: string | null;
    urls: {
        regular: string;
    };
    user: {
        name: string;
        username: string;
    };
}

const API_URL = "https://api.unsplash.com/photos?page=";
const ACCESS_KEY = "7sBD8dvnkD8oYLsOjibpjrri4D48ZZCMz7MdH_TlVfc";

const getPhotosApi = () =>
    fetch(API_URL + Math.trunc(Math.random() * 1000), {
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
    })
        .then((response) => response.json())
        .catch((e) => {
            Alert.alert(`Error`, `${e}`);
        });

// Workers
function* getPhotosWorker() {
    try {
        const photos: UnsplashPhoto[] = yield call(getPhotosApi);
        yield put(setPhotos(photos));
    } catch (error) {
        Alert.alert("Error fetching photos:", error);
    }
}

// Watchers
export function* getPhotosWatcher() {
    yield takeLatest(GET_PHOTOS, getPhotosWorker);
}
