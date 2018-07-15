import React from 'react';
import {mount} from 'enzyme';

import CommentList from 'components/CommentList';
import Root from 'Root';


let wrapper;
beforeEach(() => {

    const initialState = {
        comments : ['Comment 1','Comment 2','Comment 3']
    };

    wrapper = mount(
        <Root initialState={initialState}>
            <CommentList />
        </Root>
    );
});

it('create on LI per comment',() => 
{
    expect(wrapper.find('li').length).toEqual(3);
});

it('shows the text for each component',() => {
    expect(wrapper.render().text()).toContain('Comment 1');
});