import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import { GlobalCss } from "./styles";

const rotas = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Home />
			</>
		),
	},
	{
		path: "/perfil",
		element: (
			<>
				<Perfil />
			</>
		),
	},
]);

function App() {
	return (
		<>
			<GlobalCss />
			<RouterProvider router={rotas} />
			<Footer />
		</>
	);
}

export default App;
