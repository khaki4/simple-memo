import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers/rootReducer';
import rootSaga from './sagas/rootSaga';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['memo', 'label'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Redux DevTools 연결
// DevMode일때만 동작
// 참고 - [https://github.com/zalmoxisus/redux-devtools-extension#12-advanced-store-setup]
const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && (process.env.NODE_ENV !== 'production')
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    })
    : compose;

const sagaMiddleware = createSagaMiddleware();
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));
const store = createStore(persistedReducer, enhancer);

if (process.env.NODE_ENV !== 'production') {
  if (module.hot) {
    module.hot.accept('./reducers/rootReducer', () => {
      store.replaceReducer(persistedReducer);
    });
  }
}

const persistor = persistStore(store);
export { persistor };
export default store;


sagaMiddleware.run(rootSaga);
