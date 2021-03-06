import { PluginContext } from 'react-plugin';
import { StateUpdater } from 'react-cosmos-shared2/util';
import { FixtureState } from 'react-cosmos-shared2/fixtureState';
import { RendererCoreSpec } from '../../RendererCore/public';

export type StorageMock = { [key: string]: any };

export type SetFixtureStateHandler = (
  context: PluginContext<RendererCoreSpec>,
  stateUpdater: StateUpdater<FixtureState>
) => void;
