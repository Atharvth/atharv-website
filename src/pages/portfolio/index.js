import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";
import PortfolioItem from "./PortfolioItem"; // Ensure the path is correct

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Elite Roster | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Elite Roster</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="mb-5">
          {dataportfolio.map((data, i) => (
            <Col key={i} md={4} className="mb-4">
              <PortfolioItem data={data} />
            </Col>
          ))}
        </Row>
      </Container>
    </HelmetProvider>
  );
};
