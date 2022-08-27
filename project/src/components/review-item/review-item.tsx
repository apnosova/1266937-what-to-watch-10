import { Review } from '../../types/review';
import { formatDate } from '../../utils';

type CommentProps = {
  review: Review;
}


function ReviewItem(props: CommentProps): JSX.Element {
  const { review } = props;
  const { comment, date, rating, user } = review;
  const { name } = user;


  return (
    <div className="review">
      <blockquote className="review__quote">
        <p className="review__text">{comment}.</p>

        <footer className="review__details">
          <cite className="review__author">{name}</cite>
          <time className="review__date" dateTime="2016-12-24">{formatDate(date)}</time>
        </footer>
      </blockquote>

      <div className="review__rating">{rating}</div>
    </div>
  );
}


export default ReviewItem;
