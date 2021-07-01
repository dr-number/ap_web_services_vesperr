import Header from './components/Header';
import './App.css';
import Hero from "./components/Hero";
import Clients from "./components/Clients";

import imgClient1 from "./assets/img/clients/client-1.png"
import imgClient2 from "./assets/img/clients/client-2.png"
import imgClient3 from "./assets/img/clients/client-3.png"
import imgClient4 from "./assets/img/clients/client-4.png"
import imgClient5 from "./assets/img/clients/client-5.png"
import imgClient6 from "./assets/img/clients/client-6.png"
import AboutAs from "./components/AboutAs";
import Counts from "./components/Counts";

function App() {

  const imgClients = [
    imgClient1,
    imgClient2,
    imgClient3,
    imgClient4,
    imgClient5,
    imgClient6
  ];

  //Todo text to html
  const dataCounts = [
    {pureCounter: 65, iconClass: "bi bi-emoji-smile",
      text: "<strong>Happy Clients</strong> consequuntur voluptas nostrum aliquid ipsam architecto ut."},

    {pureCounter: 85, iconClass: "bi bi-journal-richtext",
      text: "<strong>Projects</strong> adipisci atque cum quia aspernatur totam laudantium et quia dere tan"},

    {pureCounter: 18, iconClass: "bi bi-clock",
      text: "<strong>Years of experience</strong> aut commodi quaerat modi aliquam nam ducimus aut voluptatenon vel"},

    {pureCounter: 15, iconClass: "bi bi-award",
      text: "<strong>Awards</strong> rerum asperiores dolor alias quo reprehenderit eum et nemo pad der"},
  ];

  return (
    <div className="App">
      <Header />
      <Hero />
      <main id="main">
        <Clients imgs={imgClients}/>
        <AboutAs />
        <Counts data={dataCounts}/>
      </main>
    </div>
  );
}

export default App;
