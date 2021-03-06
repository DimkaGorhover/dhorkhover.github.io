import { Col, Row } from 'react-bootstrap';
import { About } from '../components/cv/About';
import { Header } from '../components/cv/Header';
import { Contacts } from '../components/cv/Contacts';
import { Education } from '../components/cv/Education';
import { Skills } from '../components/cv/Skills';
import { Photo } from '../components/cv/Photo';
import { Languages } from '../components/cv/Languages'
import { ShortExpList } from '../components/cv/ShortExpList';
import { useTitle } from "../common";

export const MainCV = () => {
  useTitle('CV: Dmytro Horkhover')
  return (
    <>
      <Row>
        <Col xs={9}>
          <Header/>
          <About/>
          <Languages/>
        </Col>
        <Col xs={3}>
          <Photo/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Contacts/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Education/>
        </Col>
      </Row>
      <Row>
        <Col>
          <Skills/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ShortExpList/>
        </Col>
      </Row>
    </>
  )
}
