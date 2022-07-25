import { Link } from 'react-router-dom';

function NotFoundScreen(): JSX.Element {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      backgroundImage: 'linear-gradient(-180deg,#180202 0%,#000 100%)',
    }}
    >
      <header className="page-header" style={{ margin: 0, }}>
        <div className="logo">
          <a className="logo__link" href="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <ul className="user-block">
          <li className="user-block__item">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </li>
          <li className="user-block__item">
            <a className="user-block__link" href="/">Sign out</a>
          </li>
        </ul>
      </header>

      <section style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1 0 auto',
        padding: '80px',
        color: '#d9ca74',
      }}
      >
        <h1 style={{
          margin: 0,
          marginBottom: '40px'
        }}
        >
          404. Page not found
        </h1>
        <Link className="btn" to="/" style={{
          border: '1px solid rgba(217,202,116,.2)',
          background: 'none',
          fontSize: '22px',
          lineHeight: '26px',
          color: '#d9ca74'
        }}
        >Вернуться на главную
        </Link>
      </section>

      <footer className="page-footer" style={{ padding: '40px', }}>
        <div className="logo">
          <a className="logo__link logo__link--light" href="/">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div >
  );
}

export default NotFoundScreen;
