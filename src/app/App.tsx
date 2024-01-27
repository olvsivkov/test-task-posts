import { BrowserRouter as Routes, Route } from 'react-router-dom';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import { setupStore } from '../shared/redux-query-api';
import { PostContainer } from '../pages';
import { PostPage } from '../pages';

const store = setupStore();
setupListeners(store.dispatch);

const App = () => {
  return (
    <Provider store={store}>
        <Routes>
          <Route path='/' element={<PostContainer />} />
          <Route path='/posts/:id' element={<PostPage />} />
        </Routes>
    </Provider>
  );
};

export default App;

/**
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import { setupStore } from '../shared/redux-query-api';
import { PostContainer } from '../pages';
import { PostPage } from '../pages';

const store = setupStore();
setupListeners(store.dispatch);

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/' element={<PostContainer />} />
          <Route path='/posts/:id' element={<PostPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};
 */