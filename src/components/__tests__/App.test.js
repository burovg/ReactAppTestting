import React from 'react';
import {shallow} from 'enzyme';
import App from 'components/App';
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';
import Root from 'Root';


//import App from '../App';

let wrapper;

beforeEach(() => {
    wrapper = shallow(
        <Root>
            <App />
        </Root>
    );
});

it('show the test',() => {
    expect(wrapper.find(CommentBox).length).toEqual(0);
});

it('show comment list',() => {
    expect(wrapper.find(CommentList).length).toEqual(0);
});