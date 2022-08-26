import Review from '../../review/review-item';
import { Reviews } from '../../../types/review';


type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList(props: ReviewListProps): JSX.Element {
  const { reviews } = props;

  return (
    < div className="film-card__reviews film-card__row" >
      <div className="film-card__reviews-col">
        {
          reviews.map((review, i) => (
            <Review review={review} key={i} />
          ))
        }


      </div>
      <div className="film-card__reviews-col">
        <div className="review">
          <blockquote className="review__quote">
            <p className="review__text">The mannered, madcap proceedings are often delightful, occasionally silly, and here and there, gruesome and/or heartbreaking.</p>

            <footer className="review__details">
              <cite className="review__author">Matthew Lickona</cite>
              <time className="review__date" dateTime="2016-12-20">December 20, 2016</time>
            </footer>
          </blockquote>

          <div className="review__rating">7,2</div>
        </div>


      </div>
    </div >
  );
}

export default ReviewList;
