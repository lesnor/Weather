import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../../../store/configureStore';
import Loader from './Loader';

describe('Loader', () => {
    const renderComponent = (props) => render(
        <Provider store={store}>
            <Router history={createMemoryHistory()}>
                <Loader {...props}/>
            </Router>
        </Provider>
    );

    it('should render my link', () => {
        renderComponent();
        expect(screen.getByTestId('loader')).toBeTruthy();
    });
});