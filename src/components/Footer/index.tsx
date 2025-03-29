import FacebookIcon from "../../assets/images/facebook.svg";
import InstagramIcon from "../../assets/images/instagram.svg";
import Logo from "../../assets/images/logo.svg";
import TwitterIcon from "../../assets/images/twitter.svg";
import {
	FooterContainer,
	FooterSection,
	ImageLogo,
	LinkSocial,
	Paragraph,
	SocialContainer,
} from "./styles";

function Footer() {
	return (
		<FooterContainer>
			<div className="container">
				<FooterSection>
					<ImageLogo src={Logo} alt="Logo Efood" />
					<SocialContainer>
						<LinkSocial
							href="https://www.instagram.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={InstagramIcon} alt="Instagram" />
						</LinkSocial>
						<LinkSocial
							href="https://www.facebook.com/"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img src={FacebookIcon} alt="Facebook" />
						</LinkSocial>
						<LinkSocial href="https://x.com/" target="_blank" rel="noopener noreferrer">
							<img src={TwitterIcon} alt="Twitter" />
						</LinkSocial>
					</SocialContainer>
					<Paragraph>
						A efood é uma plataforma para divulgação de estabelecimentos, a
						responsabilidade pela entrega, qualidade dos produtos é toda do
						estabelecimento contratado.{" "}
					</Paragraph>
				</FooterSection>
			</div>
		</FooterContainer>
	);
}

export default Footer;
