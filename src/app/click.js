import { useState } from 'react';

function MyComponent() {
  const [clickCount, setClickCount] = useState(0);

  const handleClick = () => {
    setClickCount((prevCount) => prevCount + 1);

    if (clickCount === 1) {
      // Perform your action on the second click
      console.log('Second click!');
    }
  };

  return (
    <button onClick={handleClick} type="button">
      Click me
    </button>
  );
}

export default MyComponent;
