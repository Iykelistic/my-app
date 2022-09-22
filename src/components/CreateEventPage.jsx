import React from 'react';
import { Link } from 'react-router-dom';

const CreateEventPage = () => {
    return (
        <div className='create__container'>
            <div className='create__content'>
                <h1 className='create__content__title'>Create your event</h1>
            </div>

            <div className='create__form'>
                <form className='create__form__content'>
                    <div className='create__form__content__input'>
                        <label htmlFor='name' className='create__form__content__input__label'>Event Name</label>
                        <input type='text' name='name' id='name' className='create__form__content__input__input' placeholder='Event Name' />

                        <label htmlFor='date' className='create__form__content__input__label'>Host Name</label>
                        <input type='text' name='host' id='host' className='create__form__content__input__input' placeholder='Host Name' />

                        <label htmlFor='date' className='create__form__content__input__label'>Start Date</label>
                        <input type='date' name='date' id='date' className='create__form__content__input__input' />

                        <label htmlFor='date' className='create__form__content__input__label'>End Date</label>
                        <input type='date' name='date' id='date' className='create__form__content__input__input' />

                        <label htmlFor='location' className='create__form__content__input__label'>Location</label>
                        <input type='text' name='location' id='location' className='create__form__content__input__input' placeholder="Event Location" />

                        <label htmlFor='description' className='create__form__content__input__label'>Event Photo</label>
                        <input type='file' name='photo' id='photo' className='create__form__content__input__input' />

                        <Link to="/event" className="details__link_i">
                            <div className="details__content__link">
                                {/*<MdCelebration className="details__content__button__icon" />*/}
                                <p className="details__content__button__text">Next</p>
                            </div>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateEventPage;
