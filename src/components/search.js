import React, { useEffect, useState } from "react";
import { Button, Row, Col, InputGroup, FormControl } from "react-bootstrap";

const Search = ({ setKeyword, request, isLoading, setLoading }) => {
  const [value, setValue] = useState("");

  useEffect(() => {
    setKeyword(value);
  }, [value]);

  const handleClick = () => {
    request();
    setLoading(true);
  };
  return (
    <Row>
      <Col className="search">
        <InputGroup>
          <FormControl
            placeholder="Find a recipe"
            aria-label="search"
            aria-describedby="basic-addon1"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <InputGroup.Append>
            <Button variant="primary" onClick={handleClick}>
              {isLoading ? "Searching..." : "Get Recipes"}
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Col>
    </Row>
  );
};

export default Search;
