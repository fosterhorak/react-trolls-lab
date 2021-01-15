import { useState } from 'react';
import './App.css';

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <main className="App">
      Hello, this is a new App
    </main>
  );
}


