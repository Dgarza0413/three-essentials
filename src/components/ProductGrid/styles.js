import styled from '@emotion/styled'

import { breakpoints } from '../../utils/styles'


export const Grid = styled.div`
  margin: 0% 10%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 2rem;

  @media (max-width: ${breakpoints.m}px){
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: ${breakpoints.s}px){
    grid-template-columns: repeat(2, 1fr);
  }
`

export const Product = styled.div`
  display: flex;
  min-height: 100%;
  flex-direction: column;

  @media (max-width: ${breakpoints.s}px){
    min-height: 0%;
  }
`

export const Hover = styled.div`
  &:hover {
    color: grey;
    opacity: 0.5;
  }
`

export const Title = styled.span`
  font-weight: 300;
  font-size: 1.2rem;
  text-align: center;
`

export const PriceTag = styled.span`
  font-weight: 300;
  font-size: 1rem;
  text-align: center;
  margin-top: 15px;
  :before {
    content: '- '
  }
`