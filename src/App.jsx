import React from 'react';
import gsap from 'gsap';
import { Navbar, Welcome, Dock} from "#components";
import { Draggable } from 'gsap/Draggable';
import { Terminal } from "./windows";


gsap.registerPlugin(Draggable);
const App = () => (
  <main>
    <Navbar />
    <Welcome />
    <Dock />
    <Terminal />
  </main>
);

export default App; 
