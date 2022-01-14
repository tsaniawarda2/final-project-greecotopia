import React from "react";
import styled from "styled-components";
import { mobile, tablet } from "../assets/styles/responsive";

const Banner = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800;900&display=swap");
  @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap");

  /* Text */
  & h1 {
    font-family: "Rubik", sans-serif;
  }
  & h3 {
    font-family: "Poppins", sans-serif;
  }

  width: 100%;
  height: 82vh;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 50% 100%, 0 80%);
  position: relative;
  background: linear-gradient(
      to top,
      rgb(0 0 0 / 24%) 34%,
      rgb(255 255 255 / 50%) 78%
    ),
    url(${(props) => props.bg});
  background-size: cover;
  background-position: center 66%;
  background-blend-mode: multiply;
  background-attachment: fixed;
  ${mobile({ height: "70vh" })};
  ${tablet({ height: "68vh", backgroundPosition: "center 2%" })};
}
`;
const ContentBan = styled.div`
  display: block;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 32%;
  left: 50%;
  color: #232825;
  text-align: center;
  ${mobile({ top: "44%" })};
  ${tablet({ top: "38%" })};
`;
const YvmBan = styled.h3`
  font-size: 16px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
`;
const TitleBan = styled.h1`
  font-size: 42px;
  font-weight: 900;
  letter-spacing: 28px;
  text-shadow: 4px 4px 2px rgb(140 140 140 / 85%);
  margin: 14px 0px 10px;
  text-transform: uppercase;

  padding-left: 36px;
`;
const DescBan = styled.h3`
  font-size: 12px;
  font-weight: 500;
`;

export default function Banners({ item }) {
  return (
    <>
      <Banner bg={item?.banner_url}>
        <ContentBan>
          <YvmBan>Your Voice Matter</YvmBan>
          <TitleBan>{item?.title}</TitleBan>
          <DescBan>{item?.description}</DescBan>
        </ContentBan>
      </Banner>
    </>
  );
}
