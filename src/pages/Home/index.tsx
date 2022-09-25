import { useState } from 'react';
import { Autocomplete } from '../../components/Autocomplete';
import { CountryDetail } from '../../components/CountryDetail';
import { getCountryByName } from '../../services/api';
import { Country, SelectedCountry } from '../../services/types';
import { Container, Title, Content, LoaderContainer, Loader } from './styles';

export const Home = () => {
  const [countryDetail, setCountryDetail] = useState<SelectedCountry>({} as SelectedCountry);
  const [loading, setLoading] = useState(false);


  const handleSelectItem = async (country: Country) => {
    setLoading(true);

    const responseCountryDetail = await getCountryByName(country.name);
    setCountryDetail(responseCountryDetail);
    setLoading(false);
  }

  return (
    <Container>
      <Title>Search for your country</Title>

      <Content>
        <Autocomplete
          onSelectItem={handleSelectItem}
          onClearAutocomplete={() => setCountryDetail({} as SelectedCountry)}
        />

        {loading ? (
            <LoaderContainer>
              <Loader />
            </LoaderContainer>
          ) : (
            countryDetail.name && (
              <CountryDetail
                country={countryDetail.name.common}
                region={countryDetail.subregion}
                flag={countryDetail.flag}
              />
            )
          )
        }
      </Content>
    </Container>
  )
}
