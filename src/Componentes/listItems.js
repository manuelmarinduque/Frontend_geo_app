import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";
import PeopleIcon from "@material-ui/icons/People";
import LocalGasStationIcon from "@material-ui/icons/LocalGasStation";
import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import EditIcon from "@material-ui/icons/Edit";
import BusinessIcon from '@material-ui/icons/Business';
import NatureIcon from '@material-ui/icons/Nature';
import DeleteIcon from "@material-ui/icons/Delete";
import WcIcon from '@material-ui/icons/Wc';
import AddIcon from "@material-ui/icons/Add";
import Link from "@material-ui/core/Link";
import Curso from "./CursoCRUD";
import Profesores from "./profesorCRUD";


// components
import UserFormModal from "./UserFormModal";
import SedeFormModal from "./SedeFormModal";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function NestedList() {
  const classes = useStyles();
  const [open2, setOpen2] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);
  const [open4, setOpen4] = React.useState(false);
  const [open5, setOpen5] = React.useState(false);

  const handleClick1 = () => {
    setOpen1(!open1);
  };

  const handleClick2 = () => {
    setOpen2(!open2);
  };

  const handleClick3 = () => {
    setOpen3(!open3);
  };

  const handleClick4 = () => {
    setOpen4(!open4);
  };

  const handleClick5 = () => {
    setOpen5(!open5);
  };

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Menú
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
      <ListItem button onClick={handleClick1}>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Usuarios" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <li>
            <Link href="/home/AgregarUsuario">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText primary="Crear" />
              </ListItem>
            </Link>
          </li>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2}>
        <ListItemIcon>
          <LocalGasStationIcon />
        </ListItemIcon>
        <ListItemText primary="Estaciones" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <li>
            <ListItem button className={classes.nested}>
              <ListItemIcon>
                <AddIcon />
              </ListItemIcon>
              {/* <ListItemText primary="Crear" /> */}
              <SedeFormModal />
            </ListItem>
          </li>
          <li>
            <Link href="/home/EditarEstacion">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <EditIcon />
                </ListItemIcon>
                <ListItemText primary="Editar" />
              </ListItem>
            </Link>
          </li>
          <li>
            <Link href="/home/EliminarEstacion">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <DeleteIcon />
                </ListItemIcon>
                <ListItemText primary="Borrar" />
              </ListItem>
            </Link>
          </li>

          <li>
            <Link href="/home/Sedes">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <DashboardIcon />
                </ListItemIcon>
                <ListItemText primary="Sedes" />
              </ListItem>
            </Link>
          </li>
        </List>
      </Collapse>
     
      <ListItem button onClick={handleClick3}>
        <ListItemIcon>
          <BusinessIcon />
        </ListItemIcon>
        <ListItemText primary="Cursos" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <li>
              <Curso />
          </li>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick4}>
        <ListItemIcon>
          <NatureIcon />
        </ListItemIcon>
        <ListItemText primary="Empleado" />
        {open4 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open4} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>

          <li>
            <Profesores />
          </li>

          </List>        
      </Collapse>

          <ListItem button onClick={handleClick5}>
        <ListItemIcon>
          <WcIcon />
        </ListItemIcon>
        <ListItemText primary="Grupo" />
        {open5 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open5} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <li>
            <Link href="/home/CrearGrupo">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Crear" />
              </ListItem>
            </Link>
          </li>

          <li>
            <Link href="/home/EditarGrupo">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Editar" />
              </ListItem>
            </Link>
          </li>

          <li>
            <Link href="/home/EliminarGrupo">
              <ListItem button className={classes.nested}>
                <ListItemIcon>
                  <AddIcon />
                </ListItemIcon>
                <ListItemText primary="Eliminar" />
              </ListItem>
            </Link>
          </li>


        </List>        
      </Collapse>
    </List>
  );    
}
