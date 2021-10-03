import Card from './Card';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import store from '../../store/configureStore';

describe('Card', () => {
  const renderComponent = (props) => render(
    <Provider store={store}>
      <Router history={createMemoryHistory()}>
        <Card {...props}/>
      </Router>
    </Provider>
  )
  const getMockProps = (temp) => ({
    cityInfo: {
      main: {
        temp: temp
      },
      name: 'name',
      id: 'id',
      weather: [{icon: 'icon'}]
    },
    handleRemoveCity: jest.fn(),
    updateCityInfo: jest.fn()
  });

  it('should render card', () => {
    renderComponent(getMockProps(280));
    expect(screen.getByTestId('card-wrapper')).toBeTruthy();
  });

  it('should display correct temperature', () => {
    renderComponent(getMockProps(280));
    expect(screen.getByTestId('current-temp').textContent).toBe('6.9');
  });

  it('should display hot style', () => {
    renderComponent(getMockProps(300));
    expect(screen.getByTestId('card-wrapper').classList.contains('hot-form')).toBeTruthy();
  });

  it('should display warm style', () => {
    renderComponent(getMockProps(280));
    expect(screen.getByTestId('card-wrapper').classList.contains('warmly-form')).toBeTruthy();
  });

  it('should display cold style', () => {
    renderComponent(getMockProps(260));
    expect(screen.getByTestId('card-wrapper').classList.contains('cold-form')).toBeTruthy();
  });

  it('should trigger city removal', () => {
    const mockProps = getMockProps(1);
    renderComponent(mockProps);
    fireEvent.click(screen.getByTestId('remove'));
    expect(mockProps.handleRemoveCity).toBeCalled();
  });
});