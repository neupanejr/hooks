import React, { useState } from 'react';

const ChangeName = () => {
  const [name, setName] = useState('Bishal');
 
  const handleChange = () => {
    setName('Bishal');
  }
  return (
    <>
    <h1>Change Name Here</h1>
    <input type='text' placeholder='ChangeTheName'
    value={name}
    onChange={(e) => setName(e.target.value)} />
    </>
  )
}
export default ChangeName;