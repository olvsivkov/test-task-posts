// App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { setupListeners } from '@reduxjs/toolkit/query';
import { Provider } from 'react-redux';
import { setupStore } from './store/reducer';
import {PostContainer} from './pages/allPostsPage';
import {PostPage} from './pages/postPage';

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

export default App;
