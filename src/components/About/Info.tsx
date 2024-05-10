import { aboutInfos } from "../../constants/consts";

const Info = () => {
  return (
    <div className="about__info grid">
      {aboutInfos.map((item) => (
        <div key={item.id} className={"about__box"}>
          <i className={`bx ${item.img} about__icon`}></i>

          <h3 className="about__title">{item.title}</h3>
          <span className="about__subtitle">{item.subtitle}</span>
        </div>
      ))}
    </div>
  );
};

export default Info;
