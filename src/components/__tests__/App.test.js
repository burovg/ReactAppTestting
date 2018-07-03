import React from 'react';
import {shallow} from 'enzyme';
import App from '../App';
import CommentBox from '../CommentBox';

//import App from '../App';

it('show the test',() => {
    const wrapper = shallow(<App />);
    expect(wrapper.find(CommentBox).length).toEqual(111);
});