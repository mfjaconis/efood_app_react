import type { JSX } from "react";

import { ButtonStyled } from "./style";

export type Props = {
	children: JSX.Element | string;
};

function Button({ children }: Props) {
	return (
		<>
			<ButtonStyled>{children}</ButtonStyled>
		</>
	);
}

export default Button;
