import Vue from 'vue';
import Vuex, { Store, StoreOptions } from 'vuex';
import { RootState } from './types';
import { modules, initializeStores } from './storeAccessors';

Vue.use(Vuex);

const initializer = (store: Store<any>): void => initializeStores(store);
export const plugins = [initializer];
export * from '@/store/storeAccessors'; // re-export the modules
const rootStore: StoreOptions<RootState> = {
  plugins,
  modules,
  strict: process.env.NODE_ENV !== 'production',
};

const store = new Vuex.Store(rootStore);

export default store;
