
import Nav from 'react-bootstrap/Nav';
import Car from './car.svg';
import './stylos.css';

function Barnav() {
  return (
    <Nav
      activeKey="/home"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
     
      <Nav.Item>
        <Nav.Link href="/home">Nosotros</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Servicios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Contacto</Nav.Link>

      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          Preguntas Frecuentes
        </Nav.Link>
      </Nav.Item>
       <header className="Car-svg">
        <img src={Car} className="car" alt="car" />
        </header>
    </Nav>
  
  );
}

export default Barnav;

