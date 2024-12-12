// Importaciones
import { Routes, Route, Link } from "react-router-dom";
import './Estilos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Carrusel from "./carrusel.jsx"
import Video from "./video.jsx"
import Acordeon from "./acordeon.jsx"
import Tarjeta from "./tarjetas.jsx";
function Principal() {
  return (
    <div className="padre">
      <h1 className="jh">Generaciones de Computadoras</h1>
      <nav>
        <ul className="menu">
          <li><Link to="/">Primera Generación</Link></li>
          <li><Link to="/segunda-generacion">Segunda Generación</Link></li>
          <li><Link to="/tercera-generacion">Tercera Generación</Link></li>
          <li><Link to="/cuarta-generacion">Cuarta Generación</Link></li>
          <li><Link to="/quinta-generacion">Quinta Generación</Link></li>
          <li><Link to="/sexta-generacion">Sexta Generación</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<PrimeraGeneracion />} />
        <Route path="/segunda-generacion" element={<SegundaGeneracion />} />
        <Route path="/tercera-generacion" element={<TerceraGeneracion />} />
        <Route path="/cuarta-generacion" element={<CuartaGeneracion />} />
        <Route path="/quinta-generacion" element={<QuintaGeneracion />} />
        <Route path="/sexta-generacion" element={<SextaGeneracion />} />
      </Routes>
    </div>
  );
}
function PrimeraGeneracion() {
    const fotos = [
      {src: 'https://www.espaciohonduras.net/images/Electronica/articulos/tubo_de_vacio/tubo_de_vacio.jpg',altText: '',caption: 'Válvula termoiónica',},
      {src: 'https://upload.wikimedia.org/wikipedia/commons/3/3b/Two_women_operating_ENIAC.gif',altText: '',caption: 'los primeros ordenadores electrónicos',},
      {src: 'https://i0.wp.com/hipertextual.com/wp-content/uploads/2015/06/Eniac-700x435.jpg?resize=700%2C435&quality=70&strip=all&ssl=1',altText: '',caption: 'ENIAC (Electronic Numerical Integrator and Computer), UNIVAC 1',},
    ];
    return (
      <div className="contenido">
        <h1>Primera Generacion (1940-1956)</h1>
        <p>Características: utilizaban válvulas termoiónicas (tubos de vacío) para procesar la información.</p>
        <p>Ventajas: permitieron el desarrollo de los primeros ordenadores electrónicos.</p>
        <p>Desventajas: eran grandes, pesados, consumían mucha energía y eran propensos a fallas.</p>
        <p>Ejemplos: ENIAC (Electronic Numerical Integrator and Computer), UNIVAC 1.</p>
        <div class="contenido">
        </div>
        <Carrusel fotos={fotos} />
        <Video/>
      </div>
    );
  }
  function SegundaGeneracion() {
    const fotos = [
      {src: 'https://miro.medium.com/v2/resize:fit:500/0*dp-e_Pbv5eQcsG9N.jpg',altText: '',caption: 'Segunda generacion',},
      {src: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/11452046/image/ac2f124bea421495e96175df53ce6a13?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241205%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241205T170557Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=7ca51e2b822a85dbd747bb5fca6a2b4272d0b2bea431e6dc0419f513918b6fb9',altText: '',caption: 'Tamaño Reducido',},
      {src: 'https://dtutivenc.wordpress.com/wp-content/uploads/2015/04/computacion1-1.jpg',altText: '',caption: ' daniel tutivén c',},
    ];
    const items = [
      {id: '1',title: 'Características',content: 'Reemplazaron las válvulas termoiónicas por transistores, lo que redujo el tamaño y el consumo de energía.',},
      {id: '2',title: 'Ventajas',content: 'Mayor confiabilidad, menor consumo de energía y mayor velocidad.',},
      {id: '3',title: 'Desventajas',content: 'aún eran costosos y requerían mantenimiento constante',},
    ];
    return (
      <div className="contenido">
        <h1>Segunda Generación (1956-1963)</h1>
        <p>Uso de transistores en lugar de tubos de vacío...</p>
        <Carrusel fotos={fotos} />
        <Acordeon items={items} />
      </div>
    );
  }
  function TerceraGeneracion() {
    const fotos = [
        {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8ug_dRCc6e2_Dow_M0uD20PB69-IHghPxw&s',altText: '',caption: 'chip',},
        {src: 'https://www.retroaccion.org/sites/default/files/eventos/retroeuskal/2021/expoChips/TR1402A-chip.jpg',altText: '',caption: 'Circuito Integrado',},
        {src: 'https://image.slidesharecdn.com/lasgeneracionesdelascomputadoras-161129080743/85/Las-generaciones-de-las-computadoras-6-320.jpg',altText: '',caption: 'Circuito integrado',},
      ];
    return (
      <div className="contenido">
        <h1>Tercera Generación (1963-1971)</h1>
        <p>Características: introdujeron los circuitos integrados, que combinaban múltiples componentes en un solo chip de silicio.</p>
        <p>Ventajas: mayor velocidad, menor tamaño y menor consumo de energía.</p>
        <p>Desventajas: requerían sofisticados sistemas de refrigeración.</p>
        <p>Ejemplos: IBM System/360, PDP-8.</p>
        <Carrusel fotos={fotos} />
        <Tarjeta titulo="Circuitos"imagen="https://upload.wikimedia.org/wikipedia/commons/e/eb/07R01.jpg"texto="Circuitos Integrados"fecha="1963-1971"botontexto="Chip"/>
      </div>
    );
  }
function CuartaGeneracion() {
    const fotos = [
        {src: 'https://s3.amazonaws.com/s3.timetoast.com/public/uploads/photo/18888120/image/medium-74570bafbf73c75a5e0d320cbfe77a9f.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJB6ZCNNAN7BE7WDQ%2F20241209%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241209T212521Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=9b47396cbdbf3e379ade72d98e839ab4923057be4d69c7830f8c94cffd8c40f2',altText: '',caption: 'Cuata generacion de pcs',},
        {src: 'https://i.blogs.es/66c3cd/ibmpc5051ap/840_560.jpeg',altText: '',caption: '',},
        {src: 'https://time.graphics/uploadedFiles/500/14/3a/143ac23b639659da66bf81c9005a16eb.jpg',altText: '',caption: '',},
      ];
    const items = [
        {id: '1',title: 'Características',content: 'Se basaban en microprocesadores, que integraban todos los componentes de la computadora en un solo chip.',},
        {id: '2',title: 'Ventajas',content: 'Mayor velocidad, menor tamaño y menor costo.',},
        {id: '3',title: 'Desventajas',content: 'requerían software más complejo.',},
      ];
  return (
    <div className="contenido">
      <h1>Cuarta Generación (1971-1980)</h1>
      <p>Uso de microprocesadores...</p>
      <Acordeon items={items} />
      <Carrusel fotos={fotos} />
    </div>
  );
}
function QuintaGeneracion() {
  const items = [
    {id: '1',title: 'Características',content: 'Se enfocan en la inteligencia artificial, el procesamiento paralelo y la interfaz gráfica de usuario.',},
    {id: '2',title: 'Ventajas',content: 'mayor velocidad, mayor capacidad de almacenamiento y mayor conectividad.',},
    {id: '3',title: 'Desventajas',content: 'requieren grandes cantidades de energía y generan mucho calor.',},
  ];
  return (
    <div className="contenido">
      <h1>Quinta Generación (1980-actualidad)</h1>
      <p>Uso de computadoras personales y redes...</p>
      <Acordeon items={items} />
    </div>
  );
}
function SextaGeneracion() {
  return (
    <div className="contenido">
      <h1>Sexta Generación (investigación y desarrollo actual)</h1>
      <p>Uso de inteligencia artificial, nanotecnología y más...</p>
      <Tarjeta titulo="Título de la tarjeta 2"imagen="https://www.nucleodoconhecimento.com.br/wp-content/uploads/2019/06/computa%C3%A7%C3%A3o-quantica.jpg"texto="Inteligencia artificial"fecha="En el Futuro"botontexto="Robots :V"/>
    </div>
  );
}
export default Principal;
