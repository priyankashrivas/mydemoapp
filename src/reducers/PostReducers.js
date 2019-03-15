import _ from 'lodash'
import {
    CREATE_POST,
    POST_LIST,
    EDIT_POST,
    DELETE_POST


} from '../actions/types';

export default (state = {}, action) => {
    switch (action.type) {
        case POST_LIST:
          //return action.payload;
           return { ...state, ..._.mapKeys(action.payload, 'id') };
        case CREATE_POST:
            return { ...state, [action.payload.id]: action.payload };
        case EDIT_POST:
            return { ...state, [action.payload.id]: action.payload };
        case DELETE_POST:
            return _.omit(state, action.payload);
        default:
            return state;
    }

}