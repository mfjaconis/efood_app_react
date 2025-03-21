import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
		</>
	);
}

export default App;
