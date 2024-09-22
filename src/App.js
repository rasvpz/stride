import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import ContentArea from './components/ContentArea';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex-1 flex flex-col overflow-hidden">
      {/* Sidebar */}
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

      {/* Main content */}
      <div className="flex h-screen bg-gray-100 ">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        {/* Header */}

        {/* Content Area */}
        <main className="flex-1 overflow-y-auto p-4 bg-[#e9fffb]">
          <ContentArea />
        </main>
      </div>
    </div>
  );
}

export default App;
