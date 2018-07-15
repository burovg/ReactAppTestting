import React from 'react';
import {mount} from 'enzyme';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from 'reducers';
import CommentBox from 'components/CommentBox.js'
import Root from 'Root';

let wrapper;

beforeEach(() => {
    wrapper = mount(
        <Root>
            <CommentBox />
        </Root>
    );
});

afterEach(() => {
    wrapper.unmount();
});

it('has a text are and two buttons',() => {
    //const wrapper = mount(<CommentBox />);
    expect(wrapper.find('textarea').length).toEqual(1);
    expect(wrapper.find('button').length).toEqual(2);
});

it('User may change value of textarea',() => {
    wrapper.find('textarea').simulate('change',{
        target : {value : 'new comment'}
    });
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('new comment');
});

it('submitting form causes text area be cleaned',() => {
    wrapper.find('textarea').simulate('change',{
        target : {value : 'new comment'}
    });
    wrapper.update();
    wrapper.find('form').simulate('submit');
    wrapper.update();
    expect(wrapper.find('textarea').prop('value')).toEqual('');
});