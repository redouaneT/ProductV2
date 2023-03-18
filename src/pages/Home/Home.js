import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

const Home = (props) => {
	return (
		<>
			<section className="hero-section">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-12">
							<h1>Discover the Future of Innovation</h1>
							<p className="lead">
								We're excited to bring you a cutting-edge product that will
								revolutionize the way you live, work, and play. Stay tuned for
								the big reveal!
							</p>
							<Link to="/product" className="btn btn-primary">
								See our products
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className="features-section">
				<Container>
					<Row>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Card.Title>Easy to Use</Card.Title>
									<Card.Text>
										Our e-commerce platform is designed for ease of use,
										allowing you to effortlessly browse and purchase products,
										even if you have no technical experience.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Card.Title>Flexible Product Selection</Card.Title>
									<Card.Text>
										We are continuously expanding our product range to cater to
										your needs and preferences, ensuring a diverse and
										personalized shopping experience.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
						<Col md={4}>
							<Card>
								<Card.Body>
									<Card.Title>Affordable Options</Card.Title>
									<Card.Text>
										We strive to provide high-quality products at competitive
										prices, making our platform accessible for customers with
										different budgets.
									</Card.Text>
								</Card.Body>
							</Card>
						</Col>
					</Row>
				</Container>
			</section>
		</>
	);
};

export default Home;
