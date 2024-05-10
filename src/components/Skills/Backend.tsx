import { skills } from "../../constants/consts";

const be_skill = skills[1];

const render_skillbox = (group: any) => {
  return (
    <div key={group} className="skills__group">
      {be_skill.skill
        .filter((gr) => gr.group === group)
        .map((item) => (
          <div key={item.id} className="skills__data">
            <i className={`bx bx-badge-check`}></i>
            <div key={item.id}>
              <h3 className="skills__name">{item.name}</h3>
              <span className="skills__level">{item.level}</span>
            </div>
          </div>
        ))}
    </div>
  );
};

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">{be_skill.title}</h3>
      <div className="skills__box">
        {render_skillbox("1")}
        {render_skillbox("2")}
      </div>
    </div>
  );
};

export default Frontend;
