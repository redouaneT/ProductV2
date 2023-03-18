import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Contact = (props) => {
	return (
		<>
			<section className="contact-section">
				<Container>
					<Row>
						<Col md={12} className="text-center">
							<h2>Contact Us</h2>
							<p className="lead">
								Get in touch with us for any questions or feedback.
							</p>
						</Col>
					</Row>
					<Row>
						<Col md={6} className="mx-auto">
							<Form>
								<Form.Group controlId="name">
									<Form.Control type="text" placeholder="Name" />
								</Form.Group>
								<Form.Group controlId="email">
									<Form.Control type="email" placeholder="Email" />
								</Form.Group>
								<Form.Group controlId="message">
									<Form.Control as="textarea" rows={3} placeholder="Message" />
								</Form.Group>
								<Button
									className="btn btn-custom btn-info-custom"
									type="submit"
									variant="primary"
								>
									Submit
								</Button>
							</Form>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Contact;
