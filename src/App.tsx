import { Provider } from "react-redux";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import { store } from "./store";
import { GlobalCss } from "./styles";

export type CardapioItem = {
	foto: string;
	preco: number;
	id: number;
	nome: string;
	descricao: string;
	porcao: string;
};

export type Restaurante = {
	id: number;
	titulo: string;
	destacado: boolean;
	tipo: string;
	avaliacao: number;
	descricao: string;
	capa: string;
	cardapio: {
		foto: string;
		preco: number;
		id: number;
		nome: string;
		descricao: string;
		porcao: string;
	};
};

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
		path: "/perfil/:id",
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
			<Provider store={store}>
				<GlobalCss />
				<RouterProvider router={rotas} />
				<Footer />
			</Provider>
		</>
	);
}

export default App;
