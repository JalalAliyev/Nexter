import Features from "./components/features/features.component";
import Footer from "./components/footer/footer.component";
import Gallery from "./components/gallery/gallery.component";
import Header from "./components/header/header.component";
import Homes from "./components/homes/homes.component";
import Relators from "./components/realtors/realtors.component";
import Sidebar from "./components/sidebar/sidebar.component";
import Story from "./components/story/story.component";

import './sass/main.scss'

function App() {
  return (
    <div className="app">
      <Sidebar />
      <Header />
      <Relators />
      <Features />
      <Story />
      <Homes />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
