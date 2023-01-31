import { Tree } from './types';

export function findPath(tree: Tree, id: number): Tree[] | undefined {
  if (tree.id === id) {
    return [tree];
  }

  for (let i = 0; i < tree.items.length; i++) {
    const subtree = tree.items[i];
    const result = findPath(subtree, id);
    if (result) {
      return [tree, ...result];
    }
  }
}
