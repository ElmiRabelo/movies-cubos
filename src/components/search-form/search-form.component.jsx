import React, { useState } from "react";
import PropTypes from "prop-types";
import { Container } from "./search-form.styles";

//renderiza o input de busca - invoca submitHandler, reposanvel por fazer o MoviesRequest
const SearchForm = ({ placeholder, submitHandler }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    submitHandler(inputValue);
    setInputValue("");
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
      </form>
    </Container>
  );
};

SearchForm.propTypes = {
  placeholder: PropTypes.string.isRequired,
  submitHandler: PropTypes.func.isRequired
};

export default SearchForm;
