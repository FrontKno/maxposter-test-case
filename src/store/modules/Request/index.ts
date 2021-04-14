import {
  VuexModule, Module, Mutation, Action,
} from 'vuex-module-decorators';
import { CancelTokenSource } from 'axios';

@Module({ namespaced: true, name: 'request' })
export default class RequestModule extends VuexModule {
  cancelTokens: Array<CancelTokenSource> = []

  @Mutation
  addCancelToken(token: CancelTokenSource): void {
    this.cancelTokens.push(token);
  }

  @Mutation
  clearCancelTokens(): void {
    this.cancelTokens = [];
  }

  @Action
  cancelPendingRequests(): void {
    this.cancelTokens.forEach(
      (token) => token.cancel && token.cancel(),
    );
    this.context.commit('clearCancelTokens');
  }
}
