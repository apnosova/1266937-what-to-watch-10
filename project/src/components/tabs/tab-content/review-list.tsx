import ReviewItem from '../../review-item/review-item';
import { Reviews, Review } from '../../../types/review';
import { getEqualCols } from '../../../utils';


type ReviewListProps = {
  reviews: Reviews
}


function ReviewList(props: ReviewListProps): JSX.Element {
  const { reviews } = props;

  const cols = getEqualCols(reviews, 2, [[], []]);


  return (
    < div className="film-card__reviews film-card__row" >

      {
        cols.map((col, i) => (
          <div className="film-card__reviews-col" key={col[0].id}>

            {
              col.map((review: Review) => (
                <ReviewItem review={review} key={review.id} />
              ))
            }

          </div>
        ))
      }

    </div >
  );
}

export default ReviewList;
