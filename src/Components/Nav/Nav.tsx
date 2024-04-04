import "./Nav.scss";
import arrow from "../../assets/images/up-arrow.svg";

const Nav = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="nav">
      <img
        src={arrow}
        alt="up arrow"
        className="nav__image"
        onClick={scrollToTop}
      />
    </div>
  );
};

export default Nav;
