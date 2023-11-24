import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import P1 from '../assets/imgs/hero-bg.png';

const Projects = () => {
  const projectsData = [
    {
      title: 'Project 1',
      description: 'This is the description of Project 1.',
    },
    {
      title: 'Project 2',
      description: 'This is the description of Project 2.',
    },
    {
      title: 'Project 3',
      description: 'This is the description of Project 3.',
    },
    {
      title: 'Project 4',
      description: 'This is the description of Project 4.',
    },
    {
      title: 'Project 5',
      description: 'This is the description of Project 5.',
    },
    {
      title: 'Project 6',
      description: 'This is the description of Project 6.',
    },
  ];


  return (
    <section className="py-5">
      <Container>
        <h2 className="text-center text-white">Projects</h2>
        <Row>
          {projectsData.map((project, index) => (
            <Col key={index} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Img
                    variant="top"
                    src={P1}
                    alt="Project 1"
                    className="img-fluid"
                  />
                  <Card.Text>{project.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
