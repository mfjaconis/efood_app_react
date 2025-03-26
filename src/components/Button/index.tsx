import type { JSX } from "react";

import { ButtonStyled } from "./style";

export type Props = {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	children: JSX.Element | any;
	modal?: boolean;
	onClick: () => void;
};

function Button({ children, onClick, modal }: Props) {
	return (
		<>
			<ButtonStyled modal={modal} onClick={onClick}>
				{children}
			</ButtonStyled>
		</>
	);
}

export default Button;
