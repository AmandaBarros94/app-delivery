import React from 'react';
import PropTypes from 'prop-types';

function PrimaryButton({ text, onClick, isSubmit, disable, dataId }) {
  return (
    <button
      type={ isSubmit ? 'submit' : 'button' }
      onClick={ onClick }
      disabled={ disable }
      data-testid={ dataId }
    >
      {text}
    </button>
  );
}

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  isSubmit: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  dataId: PropTypes.string.isRequired,
};

export default PrimaryButton;
