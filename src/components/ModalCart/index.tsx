import { ModalContainer, ModelCard } from "./style";

import { useState } from "react";
import FormDelivery from "../FormDelivery";
import ListCart from "../ListCart";

type ModalCartProps = {
	onClose: () => void;
};

function ModalCart({ onClose }: ModalCartProps) {
	const [listCart, setListCart] = useState(true);
	const [isForm, setIsform] = useState(false);

	const handleClickOutside = (_event: React.MouseEvent<HTMLDivElement>) => {
		onClose();
	};

	const handleClickOnForm = () => {
		setIsform(true);
		setListCart(false);
	};

	return (
		<ModalContainer onClick={handleClickOutside}>
			<ModelCard onClick={(event) => event.stopPropagation()}>
				{listCart && <ListCart onForm={handleClickOnForm} />}
				{isForm && <FormDelivery />}
			</ModelCard>
		</ModalContainer>
	);
}

export default ModalCart;
