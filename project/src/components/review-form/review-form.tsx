import { Fragment, useState, ChangeEvent } from 'react';
import { useAppDispatch } from '../../hooks/hooks';
import { useParams } from 'react-router-dom';
import { DEFAULT_RATING } from '../../constants';
import { postCommentAction } from '../../store/api-actions';
import { FormEvent } from 'react';


function ReviewForm(): JSX.Element {
  const [commentData, setCommentData] = useState({
    rating: DEFAULT_RATING,
    comment: '',
    formValid: false,
  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setCommentData({ ...commentData, [name]: value });
  };

  const ratings = Array.from({ length: 10 }, (_, i) => 1 + i).reverse();

  const dispatch = useAppDispatch();

  const params = useParams();
  const filmId = Number(params.id);

  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    dispatch(postCommentAction([filmId, commentData]));
  };


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
                onChange={fieldChangeHandle}
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
          onChange={fieldChangeHandle}
          minLength={50}
          maxLength={400}
          required
        >
        </textarea>
        <div className="add-review__submit">
          <button className="add-review__btn" type="submit">Post</button>
        </div>

      </div>
    </form >
  );
}


export default ReviewForm;
