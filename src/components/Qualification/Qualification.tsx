import { useState } from "react";
import "./Qualification.css";
import { qualifications } from "../../constants/consts";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          {qualifications.map((qualification) => (
            <div
              key={qualification.id}
              className={
                toggleState === Number(qualification.type)
                  ? "qualification__button button--flex qualification__active"
                  : "qualification__button button--flex"
              }
              onClick={() => toggleTab(Number(qualification.type))}
            >
              <i className={`uil ${qualification.img} qualification__icon`}></i>
              {qualification.title}
            </div>
          ))}
        </div>

        <div className="qualification__sections">
          {qualifications.map((qualification) => (
            <div
              className={
                toggleState === Number(qualification.type)
                  ? "qualification__content qualification__content-active"
                  : "qualification__content"
              }
            >
              {qualification.detail.map((item: any, index) => (
                <div className="qualification__data">
                  {(index + 1) % 2 == 0 && (
                    <>
                      <div></div>
                      <div>
                        <span className="qualification__rounder"></span>
                        <span className="qualification__line"></span>
                      </div>
                    </>
                  )}
                  <div>
                    <h3 className="qualification__title">{item.title}</h3>
                    <span className="qualification__subtitle">
                      {item.subtitle}
                    </span>
                    <div className="qualification__calendar">
                      <i className="uil uil-calendar-alt qualification__icon"></i>
                      {item.calendar}
                    </div>
                  </div>
                  {(index + 1) % 2 != 0 && (
                    <div>
                      <span className="qualification__rounder"></span>
                      <span className="qualification__line"></span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualification;
