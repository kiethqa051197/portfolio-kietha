import { useEffect, useState } from "react";
import { projectsData, projectsNav } from "../../constants/consts";
import WorksItems from "./WorksItems";

function Works() {
  const [item, setItem] = useState({ name: "All" });
  const [projects, setProjects] = useState<any>([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "All") {
      setProjects(projectsData);
    } else {
      const newProjects = projectsData.filter((project) => {
        return project.category == item.name;
      });
      setProjects(newProjects);
    }
  }, [item]);

  return (
    <div>
      <div className="work__filters">
        {projectsNav.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              setItem({ name: item.name });
              setActive(index);
            }}
            className={`${active === index ? "active-work" : ""} work__item`}
          >
            {item.name}
          </span>
        ))}
      </div>

      <div className="work__container container grid">
        {projects.map((item: any) => (
          <WorksItems item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default Works;
