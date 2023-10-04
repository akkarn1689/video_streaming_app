// import logo from './logo.svg';
import { Provider } from 'react-redux';
import store from "./utils/store";
import './App.css';



// components
import Header from './components/Header';
import Body from './components/Body';

function App() {
  return (
    <Provider store={store}>
      <div >
        <Header />
        <Body />


      </div>
    </Provider>
  );
}

export default App;


/**
 * 
 * Header
 * Body
 *    Sidebar
 *      MenuItems
 *    MainContainer
 *      ButtonList
 *      VideoContainer
 *        VideoCard
 * 
 */