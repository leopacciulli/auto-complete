// Just to remove/prevent accents from a string
import { remove } from 'remove-accents';

const removeSpecialChars = (str: string) => {
  const specialCharsRegex = /[.*+?^${}()|[\]\\]/g;
  return str.replace(specialCharsRegex, '\\$&');
};

export const matchString = (stringToMatch: string, inputText: string) => {
  const blankRegex = /\s+/;
  const stringWithoutAccent = Array.from(stringToMatch).map(string => remove(string));
  let cleanedString = stringWithoutAccent.join('');

  const textWithoutAccent = remove(inputText);

  return textWithoutAccent
    .trim()
    .split(blankRegex)
    .filter((word: string) => word.length > 0)
    .reduce((result: number[][], word: string) => {
      const wordLen = word.length;
      const prefix = '';
      const regex = new RegExp(prefix + removeSpecialChars(word), 'i');
      let occurrence;
      let index;

      occurrence = regex.exec(cleanedString);

      while (occurrence) {
        index = occurrence.index;

        const cleanedLength = stringWithoutAccent
          .slice(index, index + wordLen)
          .join('').length;
        const offset = wordLen - cleanedLength;

        const initialOffset =
          index - stringWithoutAccent.slice(0, index).join('').length;

        const indexes = [
          index + initialOffset,
          index + wordLen + initialOffset + offset,
        ];

        if (indexes[0] !== indexes[1]) {
          result.push(indexes);
        }

        cleanedString =
          cleanedString.slice(0, index) +
          new Array(wordLen + 1).join(' ') +
          cleanedString.slice(index + wordLen);

        occurrence = regex.exec(cleanedString);
      }

      return result;
    }, [])
    .sort((match1, match2) => match1[0] - match2[0]);
};

export const parseString = (text: string, matches: number[][]) => {
  const result = [];

  if (matches.length === 0) {
    result.push({
      text,
      highlight: false,
    });
  } else if (matches[0][0] > 0) {
    result.push({
      text: text.slice(0, matches[0][0]),
      highlight: false,
    });
  }

  matches.forEach((match, i) => {
    const startIndex = match[0];
    const endIndex = match[1];

    result.push({
      text: text.slice(startIndex, endIndex),
      highlight: true,
    });

    if (i === matches.length - 1) {
      if (endIndex < text.length) {
        result.push({
          text: text.slice(endIndex, text.length),
          highlight: false,
        });
      }
    } else if (endIndex < matches[i + 1][0]) {
      result.push({
        text: text.slice(endIndex, matches[i + 1][0]),
        highlight: false,
      });
    }
  });

  return result;
};
