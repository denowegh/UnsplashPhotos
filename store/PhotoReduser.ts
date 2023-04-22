import { UnsplashPhoto } from "./sagas/PhotoSaga";

export interface DefaultState {
    photos: UnsplashPhoto[];
}
interface UnsplashPhotosAction {
    type: typeof GET_PHOTOS;
    payload: UnsplashPhoto[];
}
const defaultState: DefaultState = {
    photos: [],
};

export const GET_PHOTOS: string = "GET_PHOTOS";
export const SET_PHOTOS: string = "SET_PHOTOS";

export function photoReducer(
    state = defaultState,
    action: UnsplashPhotosAction
) {
    switch (action.type) {
        case SET_PHOTOS:
            return { ...state, photos: action.payload };
    }
    return state;
}

export const setPhotos = (payload: UnsplashPhoto[]) => ({
    type: SET_PHOTOS,
    payload,
});
export const GET_INFOCreator = () => ({ type: GET_PHOTOS });
