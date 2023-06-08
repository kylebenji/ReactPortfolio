import Header from './components/Header.js';
import ToDoList from './components/ToDoList.js';
import Information from './components/Information.js';
import Footer from './components/Footer.js';
import { Provider } from 'react-redux';
import store from './store/store.js';

function Octoplan() {
  return (
    <Provider store={store}>
      <div className="octoplan">
        <div className="container">
          <Header />
          <div className="row gx-3">
            <ToDoList />
            <Information />
          </div>
          <Footer />
        </div>
      </div>
    </Provider>
  );
}

export default Octoplan;
