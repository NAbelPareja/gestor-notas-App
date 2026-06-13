import "./Home.css";
import imgHome from "../assets/imgHome.jpg"


export const Home = () => {
  return (
      <div className="prin">
        <div className="img-home">
          <img src={imgHome} alt="Home" />
        </div>
        <div className="home-text">
          <h1>Gestiona de manera <br /> eficiente tus <br /> notas o apuntes.</h1>
          <div className="home-btn">
          </div>
        </div>
      </div>
  );
};
