import PropTypes from 'prop-types';

const Button = ({ children, variant = 'primary', onClick, className = '' }) => {
  return (
    <button
      className={`button button--${variant} ${className}`}
      onClick={onClick}
    >
      <span className="button__text">{children}</span>
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['primary', 'outline']),
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
