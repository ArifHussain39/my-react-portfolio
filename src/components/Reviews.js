import React from 'react';
import { Card, ListGroup, ListGroupItem, Col, Row } from 'react-bootstrap';

export const BuyerReviews = () => {
    const reviews = [
        {
            name: "John Doe",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            rating: 4,
        },
        {
            name: "Jane Smith",
            comment: "Pellentesque habitant morbi fames ac turpis egestas.",
            rating: 5,
        },
        {
            name: "Bob Johnson",
            comment: "Nullam vel felis vel velit laoreet dictum.",
            rating: 3,
        },
    ];

    return (
        <Row>
            {reviews.map((review, index) => (
                <Col key={index} lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Header>{review.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>{review.comment}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Rating: {review.rating}</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};



export const SellerReviews = () => {
    const reviews = [
        {
            name: "John Doe",
            comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            rating: 4,
        },
        {
            name: "Jane Smith",
            comment: "Pellentesque habitant malesuada fames ac turpis egestas.",
            rating: 5,
        },
        {
            name: "Bob Johnson",
            comment: "Nullam vel felis vel velit laoreet dictum.",
            rating: 3,
        },
    ];

    return (
        <Row>
            {reviews.map((review, index) => (
                <Col key={index} lg={4} md={6} sm={12}>
                    <Card>
                        <Card.Header>{review.name}</Card.Header>
                        <Card.Body>
                            <Card.Text>{review.comment}</Card.Text>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroupItem>Rating: {review.rating}</ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            ))}
        </Row>
    );
}