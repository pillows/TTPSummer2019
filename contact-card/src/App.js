import React from 'react';
import './App.css';
import ContactCard from './ContactCard'

function App() {
  return (
      <div>
          <ContactCard name="Matthew Wong" mobile_number="111 111 1111" work_number="111 111 1112" email="the@gmail.com" />
          <ContactCard name="Test User" mobile_number="111 111 1111" work_number="111 115 1112" email="test@gmail.com" />

          <ContactCard name="Alice" mobile_number="111 111 1113" email="alice@gmail.com" />

      </div>

  );
}

export default App;
