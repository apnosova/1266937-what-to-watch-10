import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './components/app/app';
import { movies } from './mocks/movies';
import { store } from './store';

const Data = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        title={Data.title}
        genre={Data.genre}
        year={Data.year}
        movies={movies}
      />
    </Provider>
  </React.StrictMode>,
);
