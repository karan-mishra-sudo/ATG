
import './App.css';
import Headers from './Components/Headers';
import ImagePage from './Components/ImagePage';
import BasicTabs from './Components/BasicTabs';
import Posts from './Components/Posts';
function App() {
  return (
    <div className="main h-screen w-screen">
     <Headers/>
     <ImagePage/>
     {/* <BasicTabs/> */}
     <Posts/>
    </div>
  );
}

export default App;
