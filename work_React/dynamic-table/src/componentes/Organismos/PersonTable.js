import React from 'react';
import Button from '../Atomos/Button';
import './StylePT.css';

const PersonTable = ({ personas, eliminarPersona }) => (
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Edad</th>
        <th>Cédula</th>
        <th>Mayor de edad</th>
        <th>Acciones</th>
      </tr>
    </thead>
    <tbody>
      {personas.map((persona, index) => (
        <tr key={index}>
          <td>{persona.nombre}</td>
          <td>{persona.apellido}</td>
          <td>{persona.edad}</td>
          <td>{persona.cedula}</td>
          <td>{persona.edad >= 18 ? 'Sí' : 'No'}</td>
          <td><Button onClick={() => eliminarPersona(index)}>Eliminar</Button></td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default PersonTable;
