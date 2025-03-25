import { ModalContainer, ModalContent } from "./style";

type ModalProductsProps = {
	product: {
		nome: string;
		descricao: string;
		foto: string;
	};
	onClose: () => void;
};

function ModalProducts({ product, onClose }: ModalProductsProps) {
	return (
		<ModalContainer>
			<ModalContent>
				<img src={product.foto} alt={product.nome} />
				<div>
					<h2>{product.nome}</h2>
					<p>{product.descricao}</p>
					<p>Serve: de 2 a 3 pessoas</p>
				</div>
				<button onClick={onClose}>Fechar</button>
			</ModalContent>
		</ModalContainer>
	);
}

export default ModalProducts;
