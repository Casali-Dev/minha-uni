import Image from "next/image";

import { Container, ImageContainer } from "./style";

import logoImg from "../../../public/minhauni.svg";

export function Header() {
  return (
    <Container>
      <ImageContainer>
        <Image src={logoImg} layout="intrinsic" />
      </ImageContainer>
      <h2>Aqui você descobre qual universidade é a sua cara!</h2>
    </Container>
  );
}
