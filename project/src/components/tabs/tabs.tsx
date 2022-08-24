import { Movie } from '../../types/movie';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabItem, DEFAULT_TAB } from '../../constants';
import TabContentOverview from './tab-content/tab-content-overview';
import TabContentDetails from './tab-content/tab-content-details';
import TabContentReviews from './tab-content/tab-content-reviews';

type TabsProps = {
  movie: Movie;
}

function Tabs(props: TabsProps): JSX.Element {
  const { movie } = props;

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

      {activeTab === DEFAULT_TAB && <TabContentOverview movie={movie} />}
      {activeTab === TabItem.Details && <TabContentDetails movie={movie} />}
      {activeTab === TabItem.Reviews && <TabContentReviews />}

    </div>
  );
}


export default Tabs;
