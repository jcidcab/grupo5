import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CargaPublicacion from './views/CargaPublicacion';
import Error from './views/Error.jsx';
import Homepage from './views/homepage.jsx';
import HomepageLogged from './views/HomepageLogged.jsx';
import InicioSesion from './views/InicioSesion.jsx';
import MiPerfil from './views/MiPerfil.jsx';
import MisPublicaciones from './views/MisPublicaciones.jsx';
import RegistroUsuarios from './views/RegistroUsuarios.jsx';
import VistaDetallePublicacion from './views/VistaDetallePublicacion.jsx';
import Propiedades from './views/Propiedades.jsx';
import EditarPropiedad from './views/editarPropiedad.jsx';


function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/inicio-sesion" element={<InicioSesion />} />
      <Route path="/registro" element={<RegistroUsuarios />} />
      <Route path="/home-logged" element={<HomepageLogged />} />
      <Route path="/mi-perfil" element={<MiPerfil />} />
      <Route path="/mis-publicaciones" element={<MisPublicaciones />} />
      <Route path="/carga-publicacion" element={<CargaPublicacion />} />
      <Route path="/detalle-publicacion/:propiedades_id" element={<VistaDetallePublicacion />} />
      <Route path="/propiedades" element={<Propiedades />} />
      <Route path="/editar-propiedad/:id" element={<EditarPropiedad />} />
      <Route path="*" element={<Error />} />
    </Routes>
  </Router>
  )
}

export default App

//texto modificado <NavbarHome />
  //    <FormularioRegistro/>
  //    <FormularioAcceso/>
  //    <IngresoPropiedad/>
  //    <CardList/>
  //    <Footer/>

  // Para el import: import NavbarHome from './components/NavbarHome';
// import FormularioRegistro from './components/FormularioRegistro';
// import FormularioAcceso from './components/FormularioAcceso';
// import IngresoPropiedad from './components/IngresoPropiedad';
// import CardList from './components/CardList';
// import Footer from './components/Footer';