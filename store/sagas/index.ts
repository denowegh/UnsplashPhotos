import { all } from "redux-saga/effects";
import { getPhotosWatcher } from "./PhotoSaga";

export function* rootWatcher() {
    yield all([getPhotosWatcher()]);
}
