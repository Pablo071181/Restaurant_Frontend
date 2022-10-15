import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";
  
const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>Acerca de Nosotros</Heading>
            <FooterLink href="#">Nuestra Historia</FooterLink>
            <FooterLink href="#">Nuestros Locales</FooterLink>
            <FooterLink href="#">Especialidades</FooterLink>
          </Column>
          <Column>
            <Heading>Servicios</Heading>
            <FooterLink href="#">Delivery</FooterLink>
            <FooterLink href="#">Reservaciones</FooterLink>
            <FooterLink href="#">Promociones</FooterLink>
          </Column>
          <Column>
            <Heading>Contáctanos</Heading>
            <FooterLink href="#">Email</FooterLink>
            <FooterLink href="#">Whatsapp</FooterLink>
          </Column>
          <Column>
            <Heading>Síguenos</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>
                  Facebook
                </span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>
                  Instagram
                </span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;