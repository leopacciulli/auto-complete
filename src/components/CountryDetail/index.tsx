import { Container, Content, Info, Flag, Title } from './styles';

interface CountryDetailProps {
  country: string;
  region: string;
  flag: string;
}

export const CountryDetail = ({ country, region, flag }: CountryDetailProps) => {
  return (
    <Container>
      <Content>
        <Info>
          <Title>Country: <span>{country}</span></Title>
        </Info>
        <Info>
          <Title>Region: <span>{region}</span></Title>
        </Info>
      </Content>
      <Flag>{flag}</Flag>
    </Container>
  )
}