import _ from 'lodash';
import {FETCH_ARTICLES} from '../constant/constant';


export default function(state = [], action) {
    switch(action.type) {
        case FETCH_ARTICLES:
            const data = action.payload.data;
            return _.zip(data[1], data[2], data[3]);
        default:
            return state;
    }
    
}