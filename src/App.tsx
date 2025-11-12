import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Layout from './components/Layout/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Sponsors from './pages/Sponsors';
import Mentors from './pages/Mentors';
import Team from './pages/Team';
import FAQ from './pages/FAQ';
import CodeOfConduct from './pages/CodeOfConduct';
import CommunityPartners from './pages/CommunityPartners';
import Badge from './pages/Badge';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/sponsors" element={<Sponsors />} />
            <Route path="/mentors" element={<Mentors />} />
            <Route path="/team" element={<Team />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/code-of-conduct" element={<CodeOfConduct />} />
            <Route path="/community-partners" element={<CommunityPartners />} />
            <Route path="/badge" element={<Badge />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
