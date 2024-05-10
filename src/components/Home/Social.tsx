import { socials } from "../../constants/consts";

const Social = () => {
  return (
    <div className="home__social">
      {socials.map((item) => (
        <a
          key={item.id}
          href={item.url}
          className="home__social-icon"
          target="_blank"
        >
          <i className={`uil ${item.img}`}></i>
        </a>
      ))}
    </div>
  );
};

export default Social;
