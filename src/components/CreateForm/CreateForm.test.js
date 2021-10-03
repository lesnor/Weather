import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../../store/configureStore';
import Createform from './CreateForm';

describe('Create Form', () => {
    let setWeather;
    beforeEach(() => {
        setWeather = jest.fn();
    });

    const renderComponent = (props) => render(
        <Provider store={store}>
            <Router history={createMemoryHistory()}>
                <Createform {...props}/>
            </Router>
        </Provider>
    );

    it('should render form', () => {
        renderComponent({setWeather});
        expect(screen.getByTestId('create-form')).toBeTruthy();
    });

    it('should set weather', () => {
        renderComponent({setWeather});
        fireEvent.click(screen.getByTestId('submit-form'));
        expect(setWeather).toBeCalled();
    });
});