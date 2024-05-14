interface IWorksItem {
  item: any;
}

const WorksItems = (props: IWorksItem) => {
  return (
    <div className="work__card" key={props.item.id}>
      <img src={props.item.img} alt="" className="work__img" />
      <h3 className="work__title">{props.item.title}</h3>
      <a href={props.item.url} target="_blank" className="work__button">
        Demo
        <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorksItems;
