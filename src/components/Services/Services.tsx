import { useState } from "react";
import "./Services.css";
import { services } from "../../constants/consts";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index: number) => {
    setToggleState(index);
  };

  const renderContent = (service: any) => {
    return (
      <div key={service.id} className="services__content">
        <div>
          <i className={`uil ${service.img} services__icon`}></i>
          <h3 className="services__title">
            {service.title.map((item: any) => (
              <div key={item.id}>{item.text}</div>
            ))}
          </h3>
        </div>
        <span
          className="services__button"
          onClick={() => toggleTab(service.type)}
        >
          View More
          <i className="uil uil-arrow-right services__button-icon"></i>
        </span>

        <div
          className={
            toggleState === service.type
              ? "services__modal active-modal"
              : "services__modal"
          }
        >
          <div className="services__modal-content">
            <i
              className="uil uil-times services__modal-close"
              onClick={() => toggleTab(0)}
            ></i>
            <h3 className="services__modal-title">{service.modal_title}</h3>
            <p className="services__modal-description">{service.desc}</p>

            <ul key={service.id} className="services__modal-services grid">
              {service.modal_info.map((modal: any) => (
                <li key={modal.id} className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">{modal.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Create + Collaborate</span>

      <div className="services__container container grid">
        {services.map((service) => renderContent(service))}
      </div>
    </section>
  );
};

export default Services;
