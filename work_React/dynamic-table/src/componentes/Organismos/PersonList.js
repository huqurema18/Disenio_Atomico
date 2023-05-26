import React, { useState } from 'react';
import PersonForm from '../Moleculas/PersonForm';
import PersonTable from './PersonTable';

const PersonList = () => {
  const [personas, setPersonas] = useState([
    { nombre: 'Juan', apellido: 'Pérez', edad: 25, cedula: '12345678' },
    { nombre: 'María', apellido: 'González', edad: 17, cedula: '87654321' },
    { nombre: 'Hugi', apellido: 'Fernandhino', edad: 18, cedula: '47824782' }
  ]);

  const [nuevaPersona, setNuevaPersona] = useState({ nombre: '', apellido: '', edad: '', cedula: '' });

  const eliminarPersona = (index) => {
    const nuevasPersonas = personas.filter((_, i) => i !== index);
    setPersonas(nuevasPersonas);
  };

  const agregarPersona = (event) => {
    event.preventDefault();
    setPersonas([...personas, nuevaPersona]);
    setNuevaPersona({ nombre: '', apellido: '', edad: '', cedula: '' });
  };

  const handleInputChange = (event) => {
    setNuevaPersona({
      ...nuevaPersona,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <PersonForm onSubmit={agregarPersona} onChange={handleInputChange} nuevaPersona={nuevaPersona} />
      <PersonTable personas={personas} eliminarPersona={eliminarPersona} />
    </div>
  );
};

export default PersonList;
