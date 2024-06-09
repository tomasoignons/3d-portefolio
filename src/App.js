import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import SplineEmbed from './component/SplineEmbed';
import Projects from './pages/Projects';

// Projects imports LOL
import Gurk from './projects/Gurk';
import MisterPowerPoint from './projects/MisterPowerPoint';
import SaasBuilder from './projects/SaasBuilder';
import DeepLearning from './projects/DeepLearning';
import SallesLibres from './projects/SallesLibres';
import Agepascompris from './projects/Agepascompris';
import Bauhaus from './projects/Bauhaus';
import Constance from './projects/Constance';
import DeliverooClone from './projects/DeliverooClone';
import DigitalHippo from './projects/DigitalHippo';
import GroceriesApplication from './projects/GroceriesApplication';
import MidjourneyInstagram from './projects/MidjourneyInstagram';
import PeopleScrapper from './projects/PeopleScrapper';
import PixInstagram from './projects/PixInstagram';
import SallesLibresV2 from './projects/SallesLibresV2';
import SnakeAI from './projects/SnakeAI';
import ToGoodToGoBot from './projects/ToGoodToGoBot';
import UberClone from './projects/UberClone';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplineEmbed />} />
        <Route path="/projects" element={<Projects />} />


        {/* Projects */}
        <Route path="/projects/gurk" element={<Gurk />} />
        <Route path="/projects/mister-powerpoint" element={<MisterPowerPoint/>}/>
        <Route path='/projects/saas-builder' element={<SaasBuilder/>}/>
        <Route path="/projects/deep-learning" element={<DeepLearning />} />
        <Route path="/projects/salles-libres" element={<SallesLibres />} />
        <Route path="/projects/agepascompris" element={<Agepascompris />} />
        <Route path="/projects/bauhaus" element={<Bauhaus />} />
        <Route path="/projects/prom" element={<Constance />} />
        <Route path="/projects/deliveroo-clone" element={<DeliverooClone />} />
        <Route path="/projects/digital-hippo" element={<DigitalHippo />} />
        <Route path="/projects/groceries-application" element={<GroceriesApplication />} />
        <Route path="/projects/midjourney-instagram" element={<MidjourneyInstagram />} />
        <Route path="/projects/people-scrapper" element={<PeopleScrapper />} />
        <Route path="/projects/pix-instagram" element={<PixInstagram />} />
        <Route path="/projects/salles-libres-v2" element={<SallesLibresV2 />} />
        <Route path="/projects/snake-ai" element={<SnakeAI />} />
        <Route path="/projects/tgtg-bot" element={<ToGoodToGoBot />} />
        <Route path="/projects/uber-clone" element={<UberClone />} />
      </Routes>
    </Router>
  );
}

export default App;