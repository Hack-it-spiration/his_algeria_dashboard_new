// import {GET_USERS, USERS_ERROR , GET_USERS_LOADING } from 'app/types'

import {
    GET_BOUNDS_LOADING,
    GET_BOUNDS_SUCCESS,
    GET_BOUNDS_ERROR
} from "./actionTypes";

const initialState = {
    data: [],
    error: null,
    loading : false
};

export default function boundsReducer(state = initialState, action) {
    switch (action.type) {
        case GET_BOUNDS_LOADING:
            return {
                ...state,
                data: null,
                error: null,
                loading: true,
            };
        case GET_BOUNDS_SUCCESS:
            return {
                ...state,
                data: action.payload,
                error: null,
                loading: false,
            };
        case GET_BOUNDS_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
}
