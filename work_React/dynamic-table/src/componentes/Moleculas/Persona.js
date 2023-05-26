import React from 'react';

import Button from '../Atomos/Button';

function Persona({ nombre, apellido, edad, cedula, onDelete }) {
  return (
    <tr>
      <td>{nombre}</td>
      <td>{apellido}</td>
      <td>{edad}</td>
      <td>{cedula}</td>
      <td>{edad >= 18 ? 'Sí' : 'No'}</td>
      <td><Button onClick={onDelete} label="Eliminar" /></td>
    </tr>
  );
}

export default Persona;
