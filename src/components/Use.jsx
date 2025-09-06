import React, { useEffect } from 'react';

function Use() {
  useEffect(() => {
    console.log("Component mounted");

    // optional cleanup function (runs on unmount)
    return () => {
      console.log("Component unmounted");
    };
  }, []); // empty dependency array = run only once

//   return <h2>Check the console!</h2>;
}

export default Use;
