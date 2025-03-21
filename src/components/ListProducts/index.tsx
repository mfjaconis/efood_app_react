import CardProducts from "../CardProducts/index";
import { List, ListContainer } from "./styles";

function ListProducts() {
	return (
		<>
			<ListContainer>
				<div className="container">
					<List>
						<CardProducts
							title="Pizza Marguerita"
							description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
						/>
						<CardProducts
							title="Pizza Marguerita"
							description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
						/>
						<CardProducts
							title="Pizza Marguerita"
							description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
						/>
						<CardProducts
							title="Pizza Marguerita"
							description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
						/>
						<CardProducts
							title="Pizza Marguerita"
							description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
						/>
						<CardProducts
							title="Pizza Marguerita"
							description="A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!"
						/>
					</List>
				</div>
			</ListContainer>
		</>
	);
}

export default ListProducts;
