import React, { useEffect } from "react";
import logoPlace from "../../assets/image/location.png";
import logoUser from "../../assets/image/user.png";
import { useSelector, useDispatch } from "react-redux";
import styles from "./card.module.css";
import { getEventCreator } from "../../redux/actions/event";

const Card = () => {
  const { event } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getEventCreator("", 100, 1));
  }, []);
  return (
    <div className={styles.container}>
      <div className='container'>
        <div className='row'>
          {event.map((e) => {
            return (
              <div className='col-md-4 col-12 mt-3 '>
                <div className='card' className={styles.shadow}>
                  <div className={styles.imagecontent}>
                    <img
                      src={`http://localhost:1000${e.image}`}
                      className='card-img-top'
                      className={styles.image}
                      alt='Event image'
                    />
                  </div>
                  <ul class='list-group list-group-flush'>
                    <li class='list-group-item'>
                      <div className='align-items-center'>
                        <img
                          src={logoPlace}
                          alt='placeholder'
                          className={styles.logolocation}
                        />
                        <span className='pl-1' className={styles.textLocation}>
                          {e.location ? e.location : "No location"}
                        </span>
                      </div>
                      <div>
                        <h3>{e.title ? e.title : "No title"}</h3>
                        <p>{e.date ? e.date : "No date"}</p>
                      </div>
                    </li>
                    <li class='list-group-item'>
                      <div className='row d-flex'>
                        {e.participant.split(",").map((p) => {
                          return (
                            <div className='col-md-4 col-4 d-flex'>
                              <div className='d-flex flex-row align-items-center'>
                                <img
                                  src={logoUser}
                                  alt='placeholder'
                                  className={styles.logoUser}
                                />
                                <span className={styles.textName}>{p}</span>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </li>
                    <li className='list-group-item' className={styles.bgNote}>
                      <h6>Note:</h6>
                      <p>{e.note}</p>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Card;
