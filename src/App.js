import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "components/Header/Header";
import Footer from "components/Footer/Footer";
import Contact from "pages/Contact/Contact";
import Product from "pages/Product/Product";
import Home from "pages/Home/Home";

function App() {
	return (
		<BrowserRouter>
			<div className="page-wrapper">
				<Header />
				<main className="content">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/contact" element={<Contact />} />
						<Route path="/product" element={<Product />} />
					</Routes>
				</main>
			</div>
			<Footer />
		</BrowserRouter>
	);
}
export default App;
