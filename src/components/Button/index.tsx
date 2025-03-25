import type { JSX } from "react";

import { ButtonStyled } from "./style";

export type Props = {
	children: JSX.Element | string;
	onClick: () => void;
};

function Button({ children, onClick }: Props) {
	return (
		<>
			<ButtonStyled onClick={onClick}>{children}</ButtonStyled>
		</>
	);
}

export default Button;
