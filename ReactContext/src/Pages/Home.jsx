import SongList from '../Components/SongList';
import SongDetail from '../Components/SongDetail';
import './Home.css'
import { SongProvider } from '../Context/SongContext';


const Home = () => {
  return (
    <SongProvider >
    <div class="home-container">
      <div className="left">
        <SongList />
      </div>
      <div className="right">
        <SongDetail />
      </div >
    </div >
    </SongProvider >

  );
};

export default Home;
