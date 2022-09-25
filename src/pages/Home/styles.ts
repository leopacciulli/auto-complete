import styled from 'styled-components';

export const Container = styled.div`
  max-width: 700px;
  margin: 40px auto;
`

export const Title = styled.h2`
  color: ${props => props.theme.secondary};
  font-size: 2rem;
  font-weight: 400;
`

export const Content = styled.div`
  margin-top: 16px;
`

export const LoaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
`

export const Loader = styled.div`
  border: 16px solid #ddd;
  border-radius: 50%;
  border-top: 16px solid ${props => props.theme.secondary};
  width: 120px;
  height: 120px;
  animation: spin 1.5s linear infinite;

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`