// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_SEGMENTS_LOADING,
    GET_SEGMENTS_SUCCESS,
    GET_SEGMENTS_ERROR
} from "./actionTypes";

const initialState = {
    data: [],
    error: null,
    loading : false
};

export default function segmentsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_SEGMENTS_LOADING:
            return {
                ...state,
                data: null,
                error: null,
                loading: true,
            };
        case GET_SEGMENTS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case GET_SEGMENTS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
