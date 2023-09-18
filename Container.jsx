import PropTypes from "prop-types";

function Container({ children }) {
  return <div className="w-10/12 mx-auto">{children} </div>;
}

export default Container;

Container.propTypes = {
  children: PropTypes.element,
};
