import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./addevent.module.css";
import "./addevent.module.css";
import { addEventCreator, resetStatusCreator } from "../../redux/actions/event";
import { ToastContainer, toast } from "react-toastify";

const notifyError = () =>
  toast.error("Failed add event", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
const notifySuccess = () =>
  toast.success("Success add event", {
    position: "bottom-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });

export default function AddEvent() {
  const { statusAdd, isAddPending } = useSelector((state) => state.event);
  const dispatch = useDispatch();
  const [event, setEvent] = useState({
    title: "",
    location: "",
    participant: "",
    date: "",
    note: "",
    image: "",
  });
  const inputRef = React.useRef();
  const handleChangeFile = (e) => {
    let files = e.target.files[0];
    setEvent({
      ...event,
      image: files,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let { title, location, participant, date, note, image } = event;
    let formData = new FormData();
    formData.append("title", title);
    formData.append("location", location);
    formData.append("participant", participant);
    formData.append("date", date);
    formData.append("note", note);
    formData.append("image", image);
    dispatch(addEventCreator(formData));
  };

  useEffect(() => {
    if (statusAdd === 200) {
      notifySuccess();
      setEvent({
        title: "",
        location: "",
        participant: "",
        date: "",
        note: "",
        image: "",
      });
      setTimeout(() => {
        dispatch(resetStatusCreator);
      }, 3000);
    } else if (statusAdd === 500) {
      notifyError();
      setTimeout(() => {
        dispatch(resetStatusCreator);
      }, 3000);
    }
  }, [statusAdd]);
  return (
    <>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <form>
        <div className={styles.container}>
          <div className={styles.containerform}>
            <div className={styles.formbox}>
              <div className={styles.line}>
                <i className='fa fa-plus' aria-hidden='true'>
                  Add Event
                </i>
              </div>
              <div className={styles.line}>
                <input
                  placeholder='Title'
                  className={styles.input}
                  required
                  onChange={(e) =>
                    setEvent({ ...event, title: e.target.value })
                  }
                />
                <input
                  placeholder='Location'
                  className={styles.input}
                  required
                  onChange={(e) =>
                    setEvent({ ...event, location: e.target.value })
                  }
                />
              </div>

              <div className={styles.line}>
                <input
                  placeholder='Participant'
                  className={styles.input}
                  required
                  onChange={(e) =>
                    setEvent({ ...event, participant: e.target.value })
                  }
                />
                <input
                  placeholder='Date'
                  type='date'
                  className={styles.input}
                  required
                  onChange={(e) => setEvent({ ...event, date: e.target.value })}
                />
              </div>

              <div className={styles.line}>
                <textarea
                  placeholder='Note'
                  className={styles.textarea}
                  required
                  maxLength={50}
                  onChange={(e) => setEvent({ ...event, note: e.target.value })}
                />
              </div>

              <div className={styles.line}>
                <input
                  placeholder='Upload Picture'
                  className={styles.inputhidden}
                  type='file'
                  ref={inputRef}
                  required
                  onChange={(e) => handleChangeFile(e)}
                />
                <button
                  className={styles.btnadd}
                  onClick={() => {
                    inputRef.current.click();
                  }}>
                  Upload Picture
                </button>
              </div>

              <div className={styles.linebtn}>
                <button
                  style={{ outline: "none" }}
                  className={styles.btn}
                  onClick={(e) => handleSubmit(e)}>
                  {isAddPending ? (
                    <i className='fa fa-spinner fa-spin fa-2x fa-fw'></i>
                  ) : (
                    "Add Event"
                  )}
                </button>
              </div>
            </div>
            <div className={styles.imagebox}></div>
          </div>
        </div>
      </form>
    </>
  );
}
