import React, { Suspense, lazy } from 'react';
import './App.css';
const TreeViewComponent = lazy(() => import('./components/TreeViewComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TreeViewComponent />
    </Suspense>
  );
}

export default App;
