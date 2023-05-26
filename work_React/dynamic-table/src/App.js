// App.js
import React from 'react';

const headers = ['Nombre', 'Apellido', 'Edad', 'Cédula', 'Mayor de edad'];
const rows = [
  ['Juan', 'Pérez', 25, '12345678'],
  ['María', 'González', 17, '87654321'],
  ['hugi','fernandhino',18,'47824782']
  // ... más filas
];

const App = () => {
  const checkAge = (age) => age >= 18 ? 'Sí' : 'No';

  return (
    <table>
      <thead>
        <tr>
          {headers.map((header, index) => <th key={index}>{header}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <tr key={index}>
            {row.map((cell, index) => <td key={index}>{cell}</td>)}
            <td>{checkAge(row[2])}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default App;
