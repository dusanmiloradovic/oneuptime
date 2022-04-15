import axios from 'axios';

import { clusterKey, serverUrl } from './config';

const _this: $TSFixMe = {
    getHeaders: () => {
        return {
            'Access-Control-Allow-Origin': '*',
            Accept: 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            clusterKey,
        };
    },
    post: (url: URL, data: $TSFixMe, withBaseUrl: $TSFixMe = false) => {
        const headers: $TSFixMe = this.getHeaders();

        return new Promise((resolve: Function, reject: Function) => {
            /*
             * Error [ERR_FR_MAX_BODY_LENGTH_EXCEEDED]: Request body larger than maxBodyLength limit
             * https://stackoverflow.com/questions/58655532/increasing-maxcontentlength-and-maxbodylength-in-axios
             */
            axios({
                method: 'POST',
                url: withBaseUrl ? `${url}` : `${serverUrl}/${url}`,
                headers,
                data,
                maxContentLength: Infinity,
                maxBodyLength: Infinity,
            })
                .then((response: $TSFixMe) => {
                    resolve(response.data);
                })
                .then((error: Error) => {
                    if (error && error.response && error.response.data) {
                        error = error.response.data;
                    }
                    if (error && error.data) {
                        error = error.data;
                    }
                    reject(error);
                });
        });
    },
};

export default _this;
