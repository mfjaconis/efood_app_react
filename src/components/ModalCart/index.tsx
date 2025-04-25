import { ModalContainer, ModelCard } from "./style";

import { useState } from "react";
import FormDelivery from "../FormDelivery";
import FormPayment from "../FormaPayment";
import ListCart from "../ListCart";
import Order from "../Order";

type ModalCartProps = {
	onClose: () => void;
};

function ModalCart({ onClose }: ModalCartProps) {
	const [listCart, setListCart] = useState(true);
	const [isForm, setIsform] = useState(false);
	const [isPayment, setIsPayment] = useState(false);
	const [isOrder, setIsOrder] = useState(false);

	const handleClickOutside = (_event: React.MouseEvent<HTMLDivElement>) => {
		onClose();
	};

	const handleClickOnForm = () => {
		setIsform(true);
		setListCart(false);
	};

	const handleClickOnBackListCart = () => {
		setIsform(false);
		setListCart(true);
	}

	const handleClickOnSubmitFormPayment = () => {
		setIsform(false);
		setIsPayment(true);
	}

	const handleClickOnBackFormDelivery = () => {
		setIsform(true);
		setIsPayment(false);
	}

	const handleClickOnSubmitOrder = () => {
		setIsPayment(false);
		setIsOrder(true);
	}

	return (
		<ModalContainer onClick={handleClickOutside}>
			<ModelCard onClick={(event) => event.stopPropagation()}>
				{listCart && <ListCart onForm={handleClickOnForm} />}
				{isForm && <FormDelivery onBack={handleClickOnBackListCart} onSubmit={handleClickOnSubmitFormPayment} />}
				{isPayment && <FormPayment onBack={handleClickOnBackFormDelivery} onSubmit={handleClickOnSubmitOrder} />}
				{isOrder && <Order />}
			</ModelCard>
		</ModalContainer>
	);
}

export default ModalCart;
