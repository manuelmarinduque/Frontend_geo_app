import React from "react";

import MenuItem from '@material-ui/core/MenuItem';
import EditSedeModal from "./EditSedeModal";

const selectEmpresa = ({ empresas }) => {
  return empresas.map((empresa, i) => (
        <MenuItem key={i} value={empresa.NombreEmpresa}>{empresa.NombreEmpresa}</MenuItem>  
  ));
};

export default selectEmpresa;
