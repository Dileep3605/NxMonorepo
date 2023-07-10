import { Injectable } from '@angular/core';
import { GlobalStore, IAction, IGlobalStore } from 'redux-micro-frontend';
import { Reducer } from 'redux';
import { AppReducer } from '../store/reducers/app.reducer';

@Injectable({
  providedIn: 'root',
})
export class ReduxService {
  globalStore!: IGlobalStore;
  actions = ['USER_AUTH_TOKEN'];
  constructor() {
    this.intializeReduxStore();
  }

  /**
   * Intialize App store
   */

  intializeReduxStore() {
    // Redux initializations.
    this.globalStore = GlobalStore.Get();
    const appStore = this.globalStore.CreateStore(
      'LoginApp',
      AppReducer as Reducer,
      []
    ); // Redux Store
    this.globalStore.RegisterStore('LoginApp', appStore);
    this.globalStore.RegisterGlobalActions('LoginApp', this.actions); // These actions can be dispatched by other apps to this store
  }

  /**
   * dispatch action to the app store
   */
  dispatchAction(appName: string, action: IAction<any>) {
    this.globalStore.DispatchAction(appName, action);
  }
}
