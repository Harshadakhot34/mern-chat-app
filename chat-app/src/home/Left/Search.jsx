import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { FaSearch } from "react-icons/fa";
import "./Left.css";
const Search = () => {
  return (
    <div>
      <div className="container mt-3">
        <InputGroup className="mb-4">
          <Form.Control
            placeholder="Search..."
            aria-label="Search"
            className="bg-black"
          />
          <Button variant="dark text-white">
            <FaSearch />
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};

export default Search;
