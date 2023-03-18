import React from "react";
import { useState } from "react";
import {
	Container,
	Row,
	Col,
	Card,
	Button,
	Modal,
	Form,
} from "react-bootstrap";

const Product = () => {
	// const productsData = [
	// 	{
	// 		id: 1,
	// 		name: "Product 1",
	// 		description: "This is a description for Product 1.",
	// 		price: 19.99,
	// 		category: "Category 1",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Product 2",
	// 		description: "This is a description for Product 2.",
	// 		price: 29.99,
	// 		category: "Category 2",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Product 3",
	// 		description: "This is a description for Product 3.",
	// 		price: 39.99,
	// 		category: "Category 1",
	// 	},
	// 	{
	// 		id: 4,
	// 		name: "Product 4",
	// 		description: "This is a description for Product 4.",
	// 		price: 49.99,
	// 		category: "Category 3",
	// 	},
	// ];

	// const [products, setProducts] = React.useState(productsData);
	const [products, setProducts] = React.useState([]);
	const [showModal, setShowModal] = React.useState(false);
	const [action, setAction] = React.useState("null");
	const [name, setName] = useState("");
	const [description, setDescription] = useState("");
	const [price, setPrice] = useState("");
	const [category, setCategory] = useState("");
	const [currentProductId, setCurrentProductId] = useState(null);

	React.useEffect(() => {
		fetch("http://localhost:5000/products")
			.then((response) => response.json())
			.then((data) => setProducts(data));
	}, []);

	const handleCloseModal = () => {
		setName("");
		setDescription("");
		setPrice("");
		setCategory("");
		setShowModal(false);
	};
	const handleShowModal = () => setShowModal(true);

	const handleAddProduct = async (e) => {
		e.preventDefault();
		const newProduct = {
			id: Date.now(),
			name: name,
			description: description,
			price: price,
			category: category,
		};

		// Add the new product to the JSON server
		await fetch("http://localhost:5000/products", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newProduct),
		});

		// Fetch the updated products list
		const response = await fetch("http://localhost:5000/products");
		const data = await response.json();
		setProducts(data);

		// Clear the form
		setName("");
		setDescription("");
		setPrice("");
		setCategory("");
	};
	const handleUpdateProduct = async (e) => {
		e.preventDefault();
		const updatedProduct = {
			id: currentProductId,
			name: name,
			description: description,
			price: price,
			category: category,
		};

		// Update the product on the JSON server
		await fetch(`http://localhost:5000/products/${currentProductId}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updatedProduct),
		});

		// Fetch the updated products list
		const response = await fetch("http://localhost:5000/products");
		const data = await response.json();
		setProducts(data);
	};

	const handleDeleteProduct = async (id) => {
		// Delete the product from the JSON server
		await fetch(`http://localhost:5000/products/${id}`, {
			method: "DELETE",
		});

		// Fetch the updated products list
		const response = await fetch("http://localhost:5000/products");
		const data = await response.json();
		setProducts(data);
	};
	const handleUpdateProductClick = (productId) => {
		const product = products.find((product) => product.id === productId);
		if (product) {
			setAction("update");
			setName(product.name);
			setDescription(product.description);
			setPrice(product.price);
			setCategory(product.category);
			setCurrentProductId(product.id);
			handleShowModal();
		}
	};
	const handleAddProductClick = () => {
		setAction("add");
		handleShowModal();
	};

	return (
		<>
			<section className="contact-section">
				<Container>
					<Row className="mb-4">
						<Col>
							<h1>Products</h1>
						</Col>
						<Col className="text-right">
							<button
								type="button"
								className="btn btn-custom btn-primary-custom"
								onClick={handleAddProductClick}
							>
								Add Product
							</button>
						</Col>
					</Row>
					<Row>
						{products.map((product) => (
							<Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
								<Card key={product.id} className="h-100">
									<Card.Img
										variant="top"
										src="https://source.unsplash.com/random?featured&query=product"
										className="product-image"
									/>

									<Card.Body>
										<Card.Title>{product.name}</Card.Title>
										<Card.Text>
											{product.description}
											<br />
											Price: ${product.price}
											<br />
											Category: {product.category}
										</Card.Text>
										<button
											onClick={() => handleUpdateProductClick(product.id)}
											type="button"
											className="btn btn-custom btn-info-custom"
										>
											Update
										</button>
										<button
											onClick={() => handleDeleteProduct(product.id)}
											type="button"
											className="btn btn-custom btn-danger-custom"
										>
											Delete
										</button>
									</Card.Body>
								</Card>
							</Col>
						))}
					</Row>
				</Container>
				<Modal show={showModal} onHide={handleCloseModal} action={action}>
					<Modal.Header closeButton>
						<Modal.Title>
							{action === "add" ? "Add New Product" : "Update Product"}
						</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<Modal.Body>
							<Form onSubmit={handleAddProduct}>
								<Form.Group controlId="productName">
									<Form.Label>Name</Form.Label>
									<Form.Control
										type="text"
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										placeholder="Enter product name"
									/>
								</Form.Group>
								<Form.Group controlId="productDescription">
									<Form.Label>Description</Form.Label>
									<Form.Control
										type="text"
										name="description"
										value={description}
										onChange={(e) => setDescription(e.target.value)}
										placeholder="Enter product description"
									/>
								</Form.Group>
								<Form.Group controlId="productPrice">
									<Form.Label>Price</Form.Label>
									<Form.Control
										type="number"
										name="price"
										value={price}
										onChange={(e) => setPrice(e.target.value)}
										placeholder="Enter product price"
									/>
								</Form.Group>
								<Form.Group controlId="productCategory">
									<Form.Label>Category</Form.Label>
									<Form.Control
										as="select"
										name="category"
										value={category}
										onChange={(e) => setCategory(e.target.value)}
									>
										<option value="">Select a category</option>
										<option value="Category 1">Category 1</option>
										<option value="Category 2">Category 2</option>
										<option value="Category 3">Category 3</option>
									</Form.Control>
								</Form.Group>

								<Modal.Footer>
									<Button
										className="btn btn-custom btn-danger-custom"
										variant="secondary"
										onClick={handleCloseModal}
									>
										Close
									</Button>
									<Button
										className="btn btn-custom btn-info-custom"
										type="submit"
										variant="primary"
										onClick={(e) => {
											if (action === "add") {
												handleAddProduct(e);
											} else {
												handleUpdateProduct(e);
											}
										}}
									>
										{action === "add" ? "Add Product" : "Update Product"}
									</Button>
								</Modal.Footer>
							</Form>
						</Modal.Body>
					</Modal.Body>
				</Modal>
			</section>
		</>
	);
};

export default Product;
