import { Injectable } from '@angular/core';
import { GlobalStore, IAction, IGlobalStore } from 'redux-micro-frontend';
import { Reducer } from 'redux';
import { AppReducer } from '../store/reducers/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class ReduxService {
  globalStore!: IGlobalStore;
  actions = ['GLOBAL_LANGUAGE', 'LOCAL_LANGUAGE', 'API_AUTH_TOKEN'];
  constructor() {
    this.intializeReduxStore();
  }

  /**
   * Initialize Shell App redux store
   */
  intializeReduxStore() {
    // Redux initializations.
    this.globalStore = GlobalStore.Get();
    const appStore = this.globalStore.CreateStore(
      'ShellApp',
      AppReducer as Reducer,
      []
    ); // Redux Store
    this.globalStore.RegisterStore('ShellApp', appStore);
    this.globalStore.RegisterGlobalActions('ShellApp', this.actions); // These actions can be dispatched by other apps to this store
  }

  /**
   * Dispatch ShellApp store action
   * @param appName
   * @param action
   */
  dispatchAction(appName: string, action: IAction<any>) {
    this.globalStore.DispatchAction(appName, action);
  }
}
