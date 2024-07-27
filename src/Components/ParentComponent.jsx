import React, { Suspense } from 'react';

// Lazy load the View component
const View = React.lazy(() => import('./View'));

const ParentComponent = () => {
  return (
    <div>
      {/* Suspense fallback UI */}
      <Suspense fallback={<div>Loading...</div>}>
        <View />
      </Suspense>
    </div>
  );
};

export default ParentComponent;
