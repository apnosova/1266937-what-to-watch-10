import React, { useState, ChangeEvent } from 'react';


function ReviewForm(): JSX.Element {

  const [formData, setFormData] = useState({
    rating: 1,
    reviewText: '',

  });

  const fieldChangeHandle = (evt: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = evt.target;
    setFormData({ ...formData, [name]: value });
  };

  const ratings = Array.from({ length: 10 }, (v, i) => 1 + i).reverse();

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {ratings.map((item: number) => (
            <React.Fragment key={`star-${item}`}>
              <input className="rating__input"
                id={`star-${item}`}
                type="radio"
                name="rating"
                value={item}
                onChange={fieldChangeHandle}

              />
              <label className="rating__label" htmlFor={`star-${item}`}>{`Rating ${item}`}</label>
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea className="add-review__textarea"
          name="reviewText"
          id="review-text"
          placeholder="Review text"
          value={formData.reviewText}
          onChange={fieldChangeHandle}
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

