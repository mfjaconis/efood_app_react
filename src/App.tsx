import { RouterProvider, createBrowserRouter } from "react-router-dom";
import CardRestaurants from "./components/CardRestaurants";
import Header from "./components/Header";
import { GlobalCss } from "./styles";

const rotas = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<CardRestaurants />
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
		</>
	);
}

export default App;
