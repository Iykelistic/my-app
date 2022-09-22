import React from 'react';
import BirthdayCake from "../assets/images/Birthday cake.png";
import { BiCalendar } from 'react-icons/bi';
import { GrNext } from 'react-icons/gr';
import { GoLocation } from "react-icons/go";

const Event = () => {
    return (
        <div className="event__container">
            <img src={BirthdayCake} alt="Birthday cake" className="event__container__image" />

            <div className="event__container__content">
                <h1 className="event__container__content__title">Birthday Bash</h1>
                <p className="event__container__content__text">Hosted by <span className="event__span">Elysia</span></p>
            </div>

            <div className="event__content__details">
                <div className="event__content__details__date">
                    <BiCalendar className="event__content__details__date__icon" />
                </div>
                <div className="event__content__details__text">
                    <p className="event__content__details__text__date">18 August 6:00PM <br></br><br></br><span className="event__span">to 19 August 1:00PM UTC + 10</span></p>
                </div>
                <div className="event__content__details__arrow">
                    <GrNext className="event__content__details__arrow__icon" />
                </div>
            </div>

            <div className="event__content__details">
                <div className="event__content__details__date_i">
                    <GoLocation className="event__content__details__date__icon" />
                </div>
                <div className="event__content__details__text">
                    <p className="event__content__details__text__date">Street Name <br></br><br></br><span className="event__span">Suburb, State, Postcode</span></p>
                </div>
                <div className="event__content__details__arrow">
                    <GrNext className="event__content__details__arrow__icon" />
                </div>
            </div>
        </div>
    );
}

export default Event;
