import React from 'react';
import InputField from '../Atomos/InputField';
import Button from '../Atomos/Button';
import './StylePF.css';

const PersonForm = ({ onSubmit, onChange, nuevaPersona }) => (
  <form onSubmit={onSubmit}>
    <InputField label="Nombre" name="nombre" value={nuevaPersona.nombre} onChange={onChange} required />
    <InputField label="Apellido" name="apellido" value={nuevaPersona.apellido} onChange={onChange} required />
    <InputField label="Edad" name="edad" value={nuevaPersona.edad} onChange={onChange} required />
    <InputField label="Cédula" name="cedula" value={nuevaPersona.cedula} onChange={onChange} required />
    <Button type="submit">Agregar persona</Button>
  </form>
);

export default PersonForm;
