import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../../../store/configureStore';
import MyLink from './MyLink';

describe('My Link', () => {
    const renderComponent = (props) => render(
        <Provider store={store}>
            <Router history={createMemoryHistory()}>
                <MyLink {...props}/>
            </Router>
        </Provider>
    );

    it('should render my link', () => {
        renderComponent({to: 'to'});
        expect(screen.getByTestId('my-link')).toBeTruthy();
    });
});