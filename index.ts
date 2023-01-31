import { trivialTree, simpleTree, deepTree, wideTree } from './treeData';
import { Tree } from './types';
import { isEqual } from 'lodash-es';
import './index.css';

import { findPath } from './treeUtils';

function check(
  tree: Tree,
  id: number,
  expected: number[] | undefined
): boolean {
  try {
    const actual = findPath(tree, id)?.map((node) => node.id);
    const check = isEqual(actual, expected);
    if (!check) {
      console.log('expected: ', expected);
      console.log('actual: ', actual);
    }
    return check;
  } catch (ex: unknown) {
    console.error(ex);
    return false;
  }
}

const testCases: Array<{
  label: string;
  tree: Tree;
  id: number;
  expected: number[];
}> = [
  {
    label: 'find 0 in trivial tree',
    tree: trivialTree,
    id: 0,
    expected: [0],
  },
  {
    label: 'find 41 in wide tree',
    tree: wideTree,
    id: 41,
    expected: [9999, 0, 37, 38, 41],
  },
  {
    label: 'find 9999 in wide tree',
    tree: wideTree,
    id: 9999,
    expected: [9999],
  },
  {
    label: 'find 98 in simple tree',
    tree: simpleTree,
    id: 98,
    expected: [42, 98],
  },
  {
    label: 'find 1 in simple tree',
    tree: simpleTree,
    id: 1,
    expected: [42, 1],
  },
  {
    label: 'find 49 in deep tree',
    tree: deepTree,
    id: 49,
    expected: [666, 85, 98, 66, 49],
  },
  {
    label: 'find 999 in deep tree',
    tree: deepTree,
    id: 999,
    expected: [666, 2, 7, 79, 44, 368, 786, 999],
  },
  {
    label: 'find 1205 in deep tree',
    tree: deepTree,
    id: 1205,
    expected: [666, 2, 7, 79, 44, 368, 786, 999, 1205],
  },
];

const results = testCases.map(({ label, tree, id, expected }) => ({
  label,
  result: check(tree, id, expected),
}));
console.log('results: ', results);

const rows = results.map(({ label, result }) => {
  return `
<tr>
  <td>${label}</td>
  <td class="${result ? 'success' : 'failure'}">${
    result ? '&#x2713;' : '&#10005;'
  }</td>
</tr>
`;
});

const table = `
<table class="test-results">
  <thead>
    <tr>
    <th class="description">Test Case</th>
    <th class="result">Result</th>
    </tr>
  </thead>
  <tbody>
    ${rows.join('\n')}
  </tbody>
</table>

`;

const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = table;
