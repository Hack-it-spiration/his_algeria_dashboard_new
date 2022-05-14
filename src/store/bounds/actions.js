import * as ActionTypes from "./actionTypes";
import axios from 'axios'
const SERVER ="https://hackit-his-api.herokuapp.com/"

export const getBoundsLoading = () => {
    return {
        type: ActionTypes.GET_BOUNDS_LOADING,
    };
};

export const getBoundsError = (err, dispatch) => {
    // dispatch(setSnackBarContent(err, "error"));

    return {
        type: ActionTypes.GET_BOUNDS_ERROR,
        payload: err,
    };
};

export const getBoundsSuccess = (content) => {
    return {
        type: ActionTypes.GET_BOUNDS_SUCCESS,
        payload: content,
    };
};

export const fetchGetBounds = () => (dispatch) => {
    dispatch(getBoundsLoading());
    const options = {
        headers: { "Content-Type": "application/json" },
    };
    return new Promise((resolve, reject) => {
        axios
            .get(SERVER+"/checkpoints?page=0&pageSize=10", options)
            .then((res) => {
                console.log("RESPONSE SUCCESS =", res);
                dispatch(getBoundsSuccess(res.data.data, dispatch));
                resolve();
            })
            .catch((err) => {
                    console.log(err.message);
                    dispatch(getBoundsError(err , dispatch));
                    reject(err.message);
            });
    });
};

