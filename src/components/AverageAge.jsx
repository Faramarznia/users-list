import PropTypes from "prop-types";

const AverageAge = ({ average }) => {
  return (
    <div>{console.log(average)}
      <div className="break"></div>
      <div className="card">
        میانگین سن ادمین ها:‌ <span data-testid="average-age">{average}</span>
      </div>
    </div>
  );
};
AverageAge.propTypes = {
  average: PropTypes.number.isRequired,
};
export default AverageAge;
