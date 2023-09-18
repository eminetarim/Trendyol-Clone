import PropTypes from "prop-types";

const CircularCard = ({ text, src }) => {
  return (
    <div className="space-y-2 flex flex-col items-center group cursor-pointer">
      <img
        className="group-hover:border group-hover:border-orange rounded-full w-16 h-16"
        src={src}
        alt="circular card"
      />
      <p className="group-hover:text-orange">{text}</p>
    </div>
  );
};

export default CircularCard;

CircularCard.propTypes = {
  text: PropTypes.string,
  src: PropTypes.string,
};
