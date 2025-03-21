import type { JSX } from "react";
import { TagContainer } from "./style";

type Props = {
	children: JSX.Element | string;
};

function Tag({ children }: Props) {
	return (
		<>
			<TagContainer>{children}</TagContainer>
		</>
	);
}

export default Tag;
