import React from 'react';
import {useState, useEffect} from 'react';

const Promises = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      }) 
      .then(res => setUsers(res))
  }, [])

  return (
    <div className="container">
      {
        users.map((el) => {
          return (
            <div key={el.id}>
              <p>Nombre: {el.name}</p>
              <p>Mail: {el.email}</p>
              <hr />
            </div>
          )
        })
      }
    </div>
  )
}

export default Promises