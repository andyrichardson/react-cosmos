import { FixtureNamesByPath } from 'react-cosmos-shared2/renderer';
import { collapseDirs } from './collapseDirs';
import { collapseSoloIndexes } from './collapseSoloIndexes';
import { collapseSoloNamedItems } from './collapseSoloNamedItems';
import { createRawFixtureTree } from './createRawFixtureTree';
import { hideFixtureSuffix } from './hideFixtureSuffix';
import { hideSingleChildDirs } from './hideSingleChildDirs';
import { FixtureNode } from './shared';

export { FixtureNode } from './shared';

export function createFixtureTree({
  fixtures,
  fixturesDir,
  fixtureFileSuffix
}: {
  fixtures: FixtureNamesByPath;
  fixturesDir: string;
  fixtureFileSuffix: string;
}): FixtureNode {
  let tree = createRawFixtureTree(fixtures);
  tree = collapseDirs(tree, fixturesDir);
  tree = hideFixtureSuffix(tree, fixtureFileSuffix);
  tree = collapseSoloIndexes(tree);
  tree = collapseSoloNamedItems(tree);
  tree = hideSingleChildDirs(tree);
  return tree;
}
