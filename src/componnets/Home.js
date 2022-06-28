import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import axios from "axios";

function Home() {
  const [url, setUrl] = useState("");
  const baseUrl = "http://localhost:5000/api/url/shorten";
  const [urlData, setUrlData] = useState("Shorten Url");
  const options = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios({
      method: "post",
      url: baseUrl,
      data: {
        longUrl: url,
      },
      // options,
    })
      .then(({ data }) => setUrlData(data.shortUrl))
      .catch((error) => console.log(error));

    setUrl("");
  };
  return (
    <div>
      <Container>
        <h1 className="text-center">Welcome!!! </h1>
        <h1 className="text-center mt-5">This is my url Shortner </h1>
        <h2 className="text-center">
          Enter your Long Messy url in the below Input
        </h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Url Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter URL"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
            <Form.Text className="text-muted">
              Put your Long url over here to get shorten.
            </Form.Text>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Form className="mt-4">
          <fieldset disabled>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="disabledTextInput">Shorten Url</Form.Label>
              <Form.Control
                id="disabledTextInput"
                placeholder="Disabled input"
                value={urlData}
                onChange={(e) => setUrlData(e.target.value)}
              />
            </Form.Group>
          </fieldset>
        </Form>
      </Container>
    </div>
  );
}

export default Home;
