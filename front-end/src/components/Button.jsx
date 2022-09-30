import propTypes from 'prop-types';

export default function Button({
  buttonType = 'button',
  disabled = false,
  action = null,
  testId = null,
  innerText,
}) {
  return (
    <button
      type={ buttonType === 'submit' ? 'submit' : 'button' }
      data-testid={ testId }
      disabled={ disabled }
      onClick={ buttonType === 'button' ? action : null }
    >
      {innerText}
    </button>
  );
}

Button.propTypes = {
  buttonType: propTypes.string,
  disabled: propTypes.bool,
  action: propTypes.func,
  testId: propTypes.string,
  innerText: propTypes.string.isRequired,
};

Button.defaultProps = {
  buttonType: 'button',
  disabled: false,
  action: null,
  testId: null,
};
