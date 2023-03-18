const Modal = (props) => {
	const [showModal, setShowModal] = React.useState(false);

	const handleCloseModal = () => setShowModal(false);
	const handleShowModal = () => setShowModal(true);
	return (
		<Modal show={showModal} onHide={handleCloseModal}>
			<Modal.Header closeButton>
				<Modal.Title>Add New Product</Modal.Title>
			</Modal.Header>
			<Modal.Body>
				<Modal.Body>
					<Form onSubmit={handleAddProduct}>
						<Form.Group controlId="productName">
							<Form.Label>Name</Form.Label>
							<Form.Control
								type="text"
								name="name"
								placeholder="Enter product name"
							/>
						</Form.Group>
						<Form.Group controlId="productDescription">
							<Form.Label>Description</Form.Label>
							<Form.Control
								type="text"
								name="description"
								placeholder="Enter product description"
							/>
						</Form.Group>
						<Form.Group controlId="productPrice">
							<Form.Label>Price</Form.Label>
							<Form.Control
								type="number"
								name="price"
								placeholder="Enter product price"
							/>
						</Form.Group>
						<Form.Group controlId="productCategory">
							<Form.Label>Category</Form.Label>
							<Form.Control as="select" name="category">
								<option>Select a category</option>
								<option>Category 1</option>
								<option>Category 2</option>
								<option>Category 3</option>
							</Form.Control>
						</Form.Group>
						<Modal.Footer>
							<Button variant="secondary" onClick={handleCloseModal}>
								Close
							</Button>
							<Button type="submit" variant="primary">
								Save Changes
							</Button>
						</Modal.Footer>
					</Form>
				</Modal.Body>
			</Modal.Body>
		</Modal>
	);
};
export default Modal;
