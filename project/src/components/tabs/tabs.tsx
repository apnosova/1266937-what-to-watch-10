import { Movie } from '../../types/movie';
import { Reviews } from '../../types/review';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabItem, DEFAULT_TAB } from '../../constants';
import Overview from './tab-content/overview';
import Details from './tab-content/details';
import ReviewList from './tab-content/review-list';

type TabsProps = {
  movie: Movie;
  reviews: Reviews;
}

function Tabs(props: TabsProps): JSX.Element {
  const { movie, reviews } = props;

  const [activeTab, setActiveTab] = useState(DEFAULT_TAB);

  const handleTabClick = (tabItem: string) => {
    setActiveTab(tabItem);
  };


  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            (Object.keys(TabItem) as Array<keyof typeof TabItem>).map((key) => (
              <li className={`film-nav__item ${activeTab === key ? 'film-nav__item--active' : ' '}`}
                key={key}
                onClick={() => handleTabClick(key)}
              >
                <Link to={`?${key}`} className="film-nav__link" >{key}</Link>
              </li>
            ))
          }
        </ul>
      </nav>

      {activeTab === DEFAULT_TAB && <Overview movie={movie} />}
      {activeTab === TabItem.Details && <Details movie={movie} />}
      {activeTab === TabItem.Reviews && <ReviewList reviews={reviews} />}

    </div>
  );
}


export default Tabs;
