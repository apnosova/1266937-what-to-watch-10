import { Link } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './not-found-screen.css';
import { AppRoute } from '../../constants';

function NotFoundScreen(): JSX.Element {
  return (
    <div className="page-content not-found ">

      <Header />

      <section className="not-found__section">
        <h1>
          404. Page not found
        </h1>
        <Link className="btn" to={`${AppRoute.Root}`}>Вернуться на главную
        </Link>
      </section>

      <Footer />

    </div >
  );
}

export default NotFoundScreen;
