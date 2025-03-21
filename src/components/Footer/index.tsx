import FacebookIcon from "../../assets/images/facebook.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import Logo from "../../assets/images/logo.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import {
	FooterContainer,
	ImageLogo,
	Paragraph,
	SocialContainer,
} from "./styles";

function Footer() {
	return (
		<FooterContainer>
			<ImageLogo src={Logo} alt="Logo Efood" />
			<SocialContainer>
				<a
					href="https://www.instagram.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={InstagramIcon} alt="Instagram" />
				</a>
				<a
					href="https://www.facebook.com/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={FacebookIcon} alt="Facebook" />
				</a>
				<a href="https://x.com/" target="_blank" rel="noopener noreferrer">
					<img src={TwitterIcon} alt="Twitter" />
				</a>
			</SocialContainer>
			<Paragraph>
				A efood é uma plataforma para divulgação de estabelecimentos, a
				responsabilidade pela entrega, qualidade dos produtos é toda do
				estabelecimento contratado.{" "}
			</Paragraph>
		</FooterContainer>
	);
}

export default Footer;
