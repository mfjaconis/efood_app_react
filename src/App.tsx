import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ListRestaurants from "./components/ListRestaurants";
import { GlobalCss } from "./styles";

const rotas = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<ListRestaurants />
			</>
		),
	},
]);

function App() {
	return (
		<>
			<GlobalCss />
			<Header />
			<RouterProvider router={rotas} />
			<Footer />
		</>
	);
}

export default App;
