import React from 'react';
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-blue-500 p-8 text-white">

      {/* <Routes>
        <Route path="/" element={<Main pic={pic} />} />
        <Route path="/aboutPage" element={<About />} />
        <Route path="/kidVideosPage" element={<KidVideos />} />
        <Route path="/resourcePage" element={<Resources />} />
        <Route path="/tipsPage" element={<TipsTricks />} />
        <Route path="/caregiverPage" element={<CaregiverVideos />} />
      </Routes> */}



      <h1 className="text-4xl font-bold mb-4">Blue Background Component</h1>
      <p className="text-lg leading-relaxed mb-4">
        This component has a blue background using Tailwind CSS utility classes. You can customize the styles based on your design preferences.
      </p>
      <a href="#" className="text-blue-200 hover:underline">Read more</a>
    </div>
  )
}

export default App;
