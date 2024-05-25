import React from 'react';
import useStorage from './components/useStorage';

function StorageComponent() {
  const [text, setText] = useStorage('myText', '');

  const handleChange = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <input type="text" value={text} onChange={handleChange} />
      <p>Stored : {text}</p>
    </div>
  );
}

export default StorageComponent;
