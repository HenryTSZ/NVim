import * as vscode from 'vscode';
import { VimState } from '../../../state/vimState';
import { configuration } from './../../../configuration/configuration';

export interface Match {
  range: vscode.Range;
  text: string;
}

export function createSearchMatches(
  rawSearchString: string,
  document: vscode.TextDocument,
  vimState: VimState,
): Match[] {
  const matches: Match[] = [];
  if (!rawSearchString.length) return matches;
  const documentText = document.getText();
  const flags = configuration.flash.ignorecase ? 'gi' : 'g';
  const searchString = rawSearchString.split('').map(escapeString).join('');
  const regex = new RegExp(searchString, flags);

  let match;
  while ((match = regex.exec(documentText))) {
    const startPosition = document.positionAt(match.index);
    const endPosition = document.positionAt(match.index + match[0].length);
    const range = new vscode.Range(startPosition, endPosition);
    const text = document.getText(range);
    matches.push({
      range,
      text,
    });
  }

  if (matches.length === 0) return [];

  return sortMatches(filteredVisibleRange(matches, vimState), vimState);
}

function filteredVisibleRange(matches: Match[], vimState: VimState) {
  return vimState.editor.visibleRanges.reduce((prev, visibleRange) => {
    prev.push(
      ...matches.filter((match) => {
        return (
          match.range.start.line >= visibleRange.start.line &&
          match.range.start.line <= visibleRange.end.line
        );
      }),
    );
    return prev;
  }, [] as Match[]);
}

function sortMatches(matches: Match[], vimState: VimState) {
  const getMiddleIndex = () => {
    const currentLine = vimState.cursorStartPosition.line;
    return lineKeys
      .map((lineNumber, index) => {
        return {
          diffValue: Math.abs(Number(lineNumber) - currentLine),
          index,
        };
      })
      .sort((a, b) => a.diffValue - b.diffValue)[0].index;
  };

  const result: Match[] = [];

  const matchesMap: Record<number, Match[]> = {};

  matches.forEach((match) => {
    const key = match.range.start.line;
    if (!matchesMap[key]) {
      matchesMap[key] = [];
    }

    matchesMap[key].push(match);
  });

  const lineKeys = Object.keys(matchesMap);
  const m = getMiddleIndex();

  let i = m + 1;
  let j = m - 1;

  const middleKey = Number(lineKeys[m]);
  if (matchesMap[middleKey]) {
    result.push(...matchesMap[middleKey]);
  }

  const max = lineKeys.length;
  const min = 0;
  while (i < max || j >= min) {
    const nextKey = Number(lineKeys[i]);
    if (matchesMap[nextKey]) {
      result.push(...matchesMap[nextKey]);
    }

    const prevKey = Number(lineKeys[j]);
    if (matchesMap[prevKey]) {
      result.push(...matchesMap[prevKey]);
    }

    i++;
    j--;
  }

  return result;
}

const needEscapeStrings: string = '$()*+.[]?\\^{}|';
function escapeString(str: string) {
  return needEscapeStrings.includes(str) ? '\\' + str : str;
}
