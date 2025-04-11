import { useGetMenuRestaurantsQuery } from "../../services/api";
import CardRestaurants from "../CardRestaurants/index";
import { List, ListContainer } from "./styles";

function ListRestaurants() {
	const {
		data: restaurants,
		isLoading,
		isError,
	} = useGetMenuRestaurantsQuery();

	if (isLoading) {
		return <div>Carregando...</div>;
	}

	if (isError) {
		return <div>Ocorreu um erro ao carregar os dados.</div>;
	}

	if (!restaurants) {
		return <div>Não há restaurantes disponíveis.</div>;
	}

	return (
		<ListContainer>
			<div className="container">
				<List>
					{restaurants.map((restaurant) => {
						return (
							<CardRestaurants
								key={restaurant.id}
								capa={restaurant.capa}
								titulo={restaurant.titulo}
								avaliacao={restaurant.avaliacao}
								tipo={restaurant.tipo}
								descricao={restaurant.descricao}
								id={restaurant.id}
								destacado={restaurant.destacado}
								cardapio={restaurant.cardapio}
							/>
						);
					})}
				</List>
			</div>
		</ListContainer>
	);
}

export default ListRestaurants;
