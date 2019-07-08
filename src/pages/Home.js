import React from 'react';
import Hero from '../components/Hero';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';


function Home() {
  return (
    <div>
      <Hero backgroundImage="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80">
        <h1>Good Samaritans</h1>
        <h2>We Are In This Together</h2>
        <br></br>
        <br></br>
        <Container>
          <Row>
          <Col size="md-6">
        <div>
        {/* <h2>Sign-In To Volunteer!</h2> */}
          <Button variant="light" div className="fb-login-button" 
        onClick={this.loginFB()} 
        data-width="" data-size="medium" data-button-type="continue_with" data-auto-logout-link="true" data-use-continue-as="true">Volunteer</Button></div>
        </Col>
        <Col size="md-6">
        <div>
          <Button variant="light">Non-Profit</Button></div>
        </Col>
        </Row>
        </Container>
      </Hero>
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="md-12">
            <h1>Welcome To Pupster!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
              consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
              parturient montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus
              sollicitudin at et metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi
              gravida. Duis eget vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin
              turpis semper, et interdum risus lobortis. Vestibulum suscipit nunc non egestas
              tristique. Proin hendrerit efficitur malesuada. Mauris lorem urna, sodales accumsan
              quam non, tristique tempor erat. Nullam non sem facilisis, tempus tortor sit amet,
              volutpat nisl. Ut et turpis non nunc maximus mollis a vitae tortor. Pellentesque
              mattis risus ac quam laoreet cursus. Praesent suscipit orci neque, vestibulum
              tincidunt augue tincidunt non. Duis consequat mattis tortor vitae mattis.
            </p>
            <p>
              Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed
              malesuada molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi
              ac mi hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non
              nibh porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas.
              Aliquam blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel
              porta augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
            </p>
            <p>
              Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
              tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh
              sit amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis.
              Mauris et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim
              congue at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc
              vehicula, erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam
              nisi eget nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem.
              Maecenas vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus
              libero. Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus
              eros. Nullam tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla
              interdum elit pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet
              massa.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
    
    export default Home;