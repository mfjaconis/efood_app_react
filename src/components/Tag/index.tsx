import type { JSX } from "react";
import { Link } from "react-router-dom";
import { TagContainer } from "./style";

export type Props = {
	children: JSX.Element | string;
	to?: string;
};

function Tag({ children, to }: Props) {
	return (
		<>
			<TagContainer>
				{to ? <Link to={to}>{children}</Link> : children}
			</TagContainer>
		</>
	);
}

export default Tag;
