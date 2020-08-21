import React from "react";
import PropTypes from 'prop-types';

import { TextField as MUITextField } from "@material-ui/core";

import { StyledTextFieldWrapper, StyledWrapper, StyledBox } from './styles';

const TextInput = ({
  id,
  type,
  name,
  label,
  IconStart,
  IconEnd,
  inputError,
  isDisplayError,
  reference,
  ...props
}) => {

  return (
    <StyledWrapper>
      <StyledTextFieldWrapper error={inputError} displayError={isDisplayError}>
        {IconStart}
        <MUITextField
          label={label}
          id={id}
          type={type}
          name={name}
          inputRef={reference}
          {...props}
        />
        {IconEnd}        
      </StyledTextFieldWrapper>
      {inputError && isDisplayError && <StyledBox>{inputError}</StyledBox>}
    </StyledWrapper>
  );
}

TextInput.defaultProps = {
  id: null,
  type: null,
  name: null,
  reference: null,
  inputError: null,
  isDisplayError: true,
  label: null,
  IconStart: null,
  IconEnd: null
};

TextInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  reference: PropTypes.func,
  inputError: PropTypes.string,
  isDisplayError: PropTypes.bool,
  label: PropTypes.string,
  IconStart: PropTypes.node,
  IconEnd: PropTypes.node
};

export default TextInput;
