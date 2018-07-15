import commentReducer from 'reducers/comments';
import {SAVE_COMMENT} from 'actions/types';

it('handle action of type SAVE_COMMENT',() => {
    const action = {
        type : SAVE_COMMENT,
        payload:'New Comment'
    };

    const newState = commentReducer([],action);

    expect(newState).toEqual(['New Comment']);
});

it('handles actions with unknown types',() => {
    const newState = commentReducer([],{});
    expect(newState).toEqual([]);
});