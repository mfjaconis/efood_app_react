import CardRestaurants from "./../CardRestaurants/index";
import { List, ListContainer } from "./styles";

function ListProducts() {
	return (
		<>
			<ListContainer>
				<div className="container">
					<List>
						<CardRestaurants
							title="Hioki Sushi "
							categories="Destaque da semana"
							categories="Japonesa"
							rating="4.9"
							description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
						/>
						<CardRestaurants
							title="La Dolce Vita Trattoria "
							categories="Italiana"
							rating="4.9"
							description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
						/>
						<CardRestaurants
							title="La Dolce Vita Trattoria"
							categories="Italiana"
							rating="4.9"
							description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
						/>
						<CardRestaurants
							title="La Dolce Vita Trattoria "
							categories="Italiana"
							rating="4.9"
							description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
						/>
						<CardRestaurants
							title="La Dolce Vita Trattoria "
							categories="Italiana"
							rating="4.9"
							description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
						/>
						<CardRestaurants
							title="La Dolce Vita Trattoria "
							categories="Italiana"
							rating="4.9"
							description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
						/>
					</List>
				</div>
			</ListContainer>
		</>
	);
}

export default ListProducts;
