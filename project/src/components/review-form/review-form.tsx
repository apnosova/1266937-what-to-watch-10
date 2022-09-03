import { Fragment, useState, ChangeEvent, FormEvent } from 'react';
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { DEFAULT_RATING } from '../../constants';
import { postCommentAction } from '../../store/api-actions';
import { getPostingStatus } from '../../store/review-process/selectors';
import { CommentLength } from '../../constants';


function ReviewForm(): JSX.Element {
  const [commentData, setCommentData] = useState({
    rating: DEFAULT_RATING,
    comment: ' ',
  });

  const { rating, comment } = commentData;

  const isFormValid = rating && comment.length >= CommentLength.MIN && comment.length <= CommentLength.MAX;

  const handleFieldChange = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const isDataPosting = useAppSelector(getPostingStatus);

  const dispatch = useAppDispatch();

  const params = useParams();
  const filmId = Number(params.id);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postCommentAction([filmId, commentData]));
  };

  const ratings = Array.from({ length: 10 }, (_, i) => 1 + i).reverse();


  return (
    <form className="add-review__form"
      action="#"
      onSubmit={handleSubmit}
    >
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((item: number) => (
            <Fragment key={`star-${item}`}>
              <input className="rating__input"
                id={`star-${item}`}
                type="radio"
                name="rating"
                value={item}
                onChange={handleFieldChange}
                required
                disabled={isDataPosting}
              />
              <label className="rating__label" htmlFor={`star-${item}`}>{`Rating ${item}`}</label>
            </Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="comment"
          id="comment"
          placeholder="Review text"
          value={commentData.comment}
          onChange={handleFieldChange}
          minLength={50}
          maxLength={400}
          required
          disabled={isDataPosting}
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit" disabled={!isFormValid || isDataPosting}>Post</button>
        </div>

      </div>
    </form >
  );
}


export default ReviewForm;
