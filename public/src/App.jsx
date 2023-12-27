import React from 'react';

const App = () => {
  return (
    <div className="bg-blue-500 p-8 text-white">
      <h1 className="text-4xl font-bold mb-4">Blue Background Component</h1>
      <p className="text-lg leading-relaxed mb-4">
        This component has a blue background using Tailwind CSS utility classes. You can customize the styles based on your design preferences.
      </p>
      <a href="#" className="text-blue-200 hover:underline">Read more</a>
    </div>
  )
}

export default App;
