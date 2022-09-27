import './App.scss';
import './fonts.scss'
import AppRouter from './components/router/AppRouter';
import Kotegory from './pages/Kotegory/Kotegory';
// import Galaxy from './pages/galaxy/Galaxy';

function App() {
  return (
    <div className="App">
      <AppRouter />
      <Kotegory/>
    </div>
  );
}

export default App;
