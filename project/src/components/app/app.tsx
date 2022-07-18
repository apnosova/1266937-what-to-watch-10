import MainScreen from '../../pages/main-screen/main-screen';

type AppScreenProps = {
  numberOfMovies: number,
  title: string,
  genre: string,
  year: number,
}

function App({ numberOfMovies, title, genre, year }: AppScreenProps): JSX.Element {
  return (
    <MainScreen
      numberOfMovies={numberOfMovies}
      title={title}
      genre={genre}
      year={year}
    />
  );
}

export default App;
