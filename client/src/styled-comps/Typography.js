import React from "react";
import styled from "styled-components";
import theme from "./theme";

export const Heading = styled.h1`
font-family: 'Bitter', serif;
color: ${theme.lightFont}
`
export const H1 = styled(Heading)`
font-size: 20px;
`
export const H2 = styled(Heading)`
font-size: 16px;
`
export const H3 = styled(Heading)`
font-size: 14px;
`
export const H4 = styled(Heading)`
font-size: 12px;
`
export const Body = styled.p`
font-family: 'Source Sans Pro', sans-serif;
`
export const P = styled(Body)`
font-size: 14px;
`
export const BigP = styled(Body)`
font-size: 16px;
`
export const LittleP = styled(Body)`
font-size: 12px;
`
