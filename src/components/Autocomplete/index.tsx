import { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { getCountriesByText } from '../../services/api';
import { Country } from '../../services/types';
import { matchString, parseString } from '../../utils/utils';
import { NoResultsFound, AutocompleteResult, ClearIcon, Container, Content, ContentAutocomplete, Input, Item, ItemText } from './styles';

interface AutocompleteProps {
  placeholder?: string;
  onSelectItem: (country: Country) => void;
  onClearAutocomplete: () => void;
}

export const Autocomplete = ({ placeholder = 'Search...', onClearAutocomplete, onSelectItem }: AutocompleteProps) => {
  const [textInput, setTextInput] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showAutocomplete, setShowAutocomplete] = useState(false);
  const [optionSelected, setOptionSelected] = useState<Country>({} as Country);
  const [optionsAutocomplete, setOptionsAutocomplete] = useState<Country[]>([]);

  useEffect(() => {
    const fetchOptions = async () => {
      // Hack to simulate the loading while is searching from API
      setOptionsAutocomplete([{
        id: 0,
        name: 'Searching...'
      }])
      
      const result = await getCountriesByText(textInput);
      setLoading(false);
      setOptionsAutocomplete(result);
    };

    if (isSearching && textInput) {
      fetchOptions();
    }
  }, [isSearching, textInput]);

  const handleClearAutocomplete = useCallback(() => {
    setLoading(false);
    setIsSearching(false);
    setOptionsAutocomplete([]);
    setOptionSelected({} as Country);
    setShowAutocomplete(false);
    setTextInput('');
    onClearAutocomplete();
  }, []);

  const handleFocusAutocomplete = useCallback(() => {
    if (textInput) {
      setIsSearching(true);
      setShowAutocomplete(true);
    }
  }, [textInput]);

  const handleOnSearchAutocomplete = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.value === '') {
      handleClearAutocomplete();
    }

    if (event.target.value) {
      setTextInput(event.target.value);
      setLoading(true);
      setIsSearching(true);
      setShowAutocomplete(true);
    }
  }, []);

  const handleSelectItem = useCallback((country: Country) => {
    setIsSearching(false);
    setShowAutocomplete(false);
    setTextInput(country.name);
    setOptionSelected(country);
    onSelectItem(country);
  }, []);

  const renderItems = (country: Country) => {
    const matches = matchString(country.name, textInput);
    const items = parseString(country.name, matches);
    const isItemSelected = country.name === optionSelected?.name;

    return (
      <Item
        key={country.id}
        onClick={() => handleSelectItem(country)}
        isItemSelected={isItemSelected}
      >
        {items.map((item, index) => (
          <ItemText key={index} isStringHighlighted={loading ? false : item.highlight} >
            {item.text}
          </ItemText>
        ))}
      </Item>
    );
  };

  return (
    <Container>
      <Content>
        <Input
          value={textInput}
          placeholder={placeholder}
          onChange={handleOnSearchAutocomplete}
          onFocus={handleFocusAutocomplete}
        />
        {(optionSelected.name || (!optionsAutocomplete.length && textInput)) && (
          <ClearIcon onClick={handleClearAutocomplete} />
        )}
      </Content>

      {!optionsAutocomplete.length && textInput
        ? (
          <NoResultsFound>No results found</NoResultsFound>
        ) 
        : showAutocomplete && textInput && (
          <AutocompleteResult>
            <ContentAutocomplete>{optionsAutocomplete.map(item => renderItems(item))}</ContentAutocomplete>
          </AutocompleteResult>
        )
      }
    </Container>
  )
}