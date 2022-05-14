import * as ActionTypes from "./actionTypes";
import axios from 'axios'
const SERVER ="https://hackit-his-api.herokuapp.com/"

export const getSegmentsLoading = () => {
    return {
        type: ActionTypes.GET_SEGMENTS_LOADING,
    };
};

export const getSegmentsError = (err, dispatch) => {
    // dispatch(setSnackBarContent(err, "error"));

    return {
        type: ActionTypes.GET_SEGMENTS_ERROR,
        payload: err,
    };
};

export const getSegmentsSuccess = (content) => {
    return {
        type: ActionTypes.GET_SEGMENTS_SUCCESS,
        payload: content,
    };
};

export const fetchGetSegments = () => (dispatch) => {
    dispatch(getSegmentsLoading());
    const options = {
        headers: { "Content-Type": "application/json" },
    };
    return new Promise((resolve, reject) => {
        axios
            .get(SERVER+"/segments?page=0&pageSize=2", options)
            .then((res) => {
                console.log("RESPONSE SUCCESS =", res);
                dispatch(getSegmentsSuccess(res.data.data, dispatch));
                resolve();
            })
            .catch((err) => {
                console.log(err.message);
                dispatch(getSegmentsError(err , dispatch));
                reject(err.message);
            });
    });
};

