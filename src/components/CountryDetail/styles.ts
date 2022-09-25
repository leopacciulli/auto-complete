import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  align-items: center;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const Info = styled.div`
  span {
    font-size: 18px;
    font-weight: normal;
  }
`

export const Title = styled.div`
  font-size: 24px;
  font-weight: 500;
  color: ${props => props.theme.secondary};
`

export const Flag = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 120px;
`