import styled from 'styled-components';

interface ItemTextProps {
  isStringHighlighted: boolean;
}

interface ItemProps {
  isItemSelected: boolean;
}

export const Container = styled.div``

export const Content = styled.div`
  display: flex;
  flex: 1;
  position: relative;
`

export const Input = styled.input`
  padding: 0 32px 0 16px;
  border-radius: 8px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  height: 45px;
  width: 100%;
  position: relative;
  font-size: 16px;
`

export const ClearIcon = styled.div`
  position: absolute;
  right: 6px;
  top: 11px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:before,
  &:after {
    content: '';
    height: 16px;
    width: 2px;
    position: absolute;
    background-color: ${props => props.theme.text};
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`

export const NoResultsFound = styled.div`
  width: 100%;
  height: 200px;
  border: 1px solid #ccc;
  background-color: ${props => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
`

export const AutocompleteResult = styled.div`
  display: flex;
  flex: 1;
  max-height: 450px;
  border: 1px solid #ccc;
  background-color: ${props => props.theme.white};
`

export const ContentAutocomplete = styled.div`
  overflow: auto;
  width: 100%;
`

export const Item = styled.div<ItemProps>`
  padding: 8px 16px;
  cursor: pointer;
  height: 38px;
  border-bottom: 1px solid ${props => props.theme.primary};
  width: 100%;

  background-color: ${props => 
      props.isItemSelected
        ? props.theme.primary
        : props.theme.white
    };

  &:hover {
    background: ${props => props.theme.primary};
  }
`

export const ItemText = styled.span<ItemTextProps>`
  width: 100%;
  letter-spacing: 0.3px;
  font-weight: ${props =>  
    props.isStringHighlighted 
      ? 'bold' 
      : 'normal'
    };

  color: ${props =>  
    props.isStringHighlighted 
      ? props.theme.text 
      : '#333'
    };
`