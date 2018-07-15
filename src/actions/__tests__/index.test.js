import {saveComment} from 'actions';
import {SAVE_COMMENT} from 'actions/types';

describe('saveComment',() => {
    it('check action type',() => {
        const action = saveComment();
        expect(action.type).toEqual(SAVE_COMMENT);
    });

    it('checks payload',() => {
        const action = saveComment('New comment');
        expect(action.payload).toEqual('New comment');
    });
});