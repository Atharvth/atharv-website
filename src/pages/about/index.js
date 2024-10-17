import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
    aboutme,
    experience,
    projects,
    education,
    skills,
    languages,
    meta,
} from "../../content_option";

export const About = () => {
    return (
        <HelmetProvider>
            <Container className="About-header">
                <Helmet>
                    <meta charSet="utf-8" />
                    <title> About Me | {meta.title}</title>
                    <meta name="description" content={meta.description} />
                </Helmet>

                {/* About Me Section */}
                <Row className="mb-5 mt-3 pt-md-3">
                    <Col lg="8">
                        <h1 className="display-4 mb-4">{aboutme.title}</h1>
                        <hr className="t_border my-4 ml-0 text-left" />
                        <p>{aboutme.description}</p>
                    </Col>
                </Row>

                {/* Experience Section */}
                <Row className="sec_sp">
                    <Col lg="12">
                        <h3 className="color_sec py-4">Experience</h3>
                    </Col>
                    <Col lg="12">
                        {experience.map((exp, index) => (
                            <div className="mb-4" key={index}>
                                <h5 className="mb-0">{exp.jobtitle}</h5>
                                <p className="mb-0">{exp.where}</p>
                                <p className="mb-2">{exp.date}</p>
                                <ul>
                                    {exp.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Col>
                </Row>

                {/* Projects Section */}
                <Row className="sec_sp">
                    <Col lg="12">
                        <h3 className="color_sec py-4">Projects</h3>
                    </Col>
                    <Col lg="12">
                        {projects.map((project, index) => (
                            <div className="mb-4" key={index}>
                                <h5 className="mb-0">{project.name}</h5>
                                <p className="mb-2">{project.date}</p>
                                <ul>
                                    {project.description.map((item, idx) => (
                                        <li key={idx}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Col>
                </Row>

                {/* Education Section */}
                <Row className="sec_sp">
                    <Col lg="12">
                        <h3 className="color_sec py-4">Education</h3>
                    </Col>
                    <Col lg="12">
                        {education.map((edu, index) => (
                            <div className="mb-4" key={index}>
                                <h5 className="mb-0">{edu.degree}</h5>
                                <p className="mb-0">{edu.institution}</p>
                                <p className="mb-2">{edu.date}</p>
                                <ul>
                                    {edu.details.map((detail, idx) => (
                                        <li key={idx}>{detail}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </Col>
                </Row>

                {/* Skills Section */}
                <Row className="sec_sp">
                    <Col lg="12">
                        <h3 className="color_sec py-4">Skills</h3>
                    </Col>
                    <Col lg="12">
                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={index}>{skill}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>

                {/* Languages Section */}
                <Row className="sec_sp">
                    <Col lg="12">
                        <h3 className="color_sec py-4">Languages</h3>
                    </Col>
                    <Col lg="12">
                        <ul className="languages-list">
                            {languages.map((language, index) => (
                                <li key={index}>{language}</li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Container>
        </HelmetProvider>
    );
};
