import React from 'react';
import { MdCelebration } from 'react-icons/md';
import LandingPage from "../assets/images/Landing page image.svg"
import { Link } from 'react-router-dom';


const Details = () => {
    return (
        <>
            <div className="details__container">
                <div className="details__content">
                    <img src={LandingPage} alt="Birthday cake" className="details__content__image" />
                    <Link to="/create" className="details__link_i">
                        <div className="details__content__link">
                            <MdCelebration className="details__content__button__icon" />
                            <p className="details__content__button__text">Create my event</p>
                        </div>
                    </Link>

                </div>
            </div>
        </>
    );
}

export default Details;
