import axios from 'axios';

import {FETCH_ARTICLES, FETCH_RANDOM_ARTICLE, ROOT_API} from '../constant/constant';



export function fetchArticles(title, numArticles) {
    return (dispatch) => {
        axios.get(`${ROOT_API}w/api.php?action=opensearch&search=${title}&limit=${numArticles}&namespace=0&origin=*`).then(res => {
            dispatch({
                type: FETCH_ARTICLES,
                payload: res
            });
        });
    };
}
export function fetchRandomArticle() {
    return dispatch => {
        window.open(`${ROOT_API}wiki/special:random`, '_blank');
    }
}