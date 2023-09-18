import PropTypes from "prop-types";

const ColoredCard = ({ bgColor, textColor, text }) => {
  return (
    <div className={`${bgColor} p-4 rounded flex justify-center`}>
      <p className={`${textColor}`}>{text}</p>
    </div>
  );
};

export default ColoredCard;

ColoredCard.propTypes = {
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
  text: PropTypes.string,
};
