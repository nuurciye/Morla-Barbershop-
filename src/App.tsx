import Navbar from './Navbar';
import Hero from './Hero';
import Services from './Services';
import Sanctuary from './Sanctuary';
import Reserve from './Reserve';

function App() {
  return (
    <main className="bg-[#0B0B0B] min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Sanctuary />
      <Reserve />
    </main>
  );
}

export default App;
