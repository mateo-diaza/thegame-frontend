// eslint-disable-next-line no-unused-vars
import React from "react";

export const isJson = response => {

    const contentType = response.headers.get("content-type");

    return contentType && contentType.indexOf("application/json") !== -1;

}

export const config = (method, body) => {

    const config = {};

    config.method = method;

    if (body) {
        if (body instanceof FormData) {
            config.body = body;
        } else  {
            config.headers = {'Content-Type': 'application/json'};
            config.body = JSON.stringify(body);
        }
    }

    return config;
}

const handleResponse = async (response, onSuccess, onErrors) => {
    if (response.ok) {
        onSuccess(response);
        return;
    }

    if (response.status >= 400 && response.status <= 500) {
        if (!isJson(response)) {
            return;
        }

        response.json().then(payload => {
            if (payload.globalError || payload.fieldErrors) {
                onErrors(payload.globalError);
            }
        });
    }
}

export const appFetch = (path, options, onSuccess, onErrors) => {
    fetch(`${process.env.REACT_APP_SERVER_URL}${path}`, options).then(response => {
        handleResponse(response, onSuccess, onErrors);
    }).catch(error => {
        console.error('Error:', error);
        alert(error);
    })
}