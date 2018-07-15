import React from 'react';
import {mount} from 'enzyme';

import Root from 'Root';
import App from 'components/App';
import moxios from 'moxios';


beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{name:"Comment #1"},{name : "Comment #2"}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('draw app and click it',(done) => {
    const wrapped = mount(
        <Root>
            <App/>
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');
    wrapped.find('.fetch-comments');
    moxios.wait(() => {
        wrapped.update();
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});