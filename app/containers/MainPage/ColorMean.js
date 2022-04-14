import React from 'react';
import './styles.css';
import './styles-min.css';
import styled from 'styled-components';
import Background from './final-bg.gif';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import Footer from '../../components/Footer/index';
const AppWrapper = styled.div`
  max-width: calc(1180px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class ColorMean extends React.Component {
  constructor() {
    super();
    this.state = {
      colorTribeModal: false,
      isVisible: true,
      slides: [
        'What',
        'do',
        'the',
        'colours',
        'mean?',
        'Yellow',
        'is',
        'the',
        'colour',
        'for',
        'all',
        'the',
        'happy',
        'and',
        'maybe',
        'sometimes',
        'slightly',
        'silly',
        'stuff',
        'Red',
        'is',
        'fired-up',
        'and',
        'with',
        'maybe',
        'a',
        'splash',
        'of',
        'ignition!',
        'Blue',
        'though',
        '...The wry,',
        'the',
        'colour',
        'of',
        'other',
        'glints',
      ],
      currentSlide: 0,
      slideTimer: 1 * 1000,
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.changeSlide();
    }, 1000);
  }
  toggleColorTribeModal = () => {
    this.setState({ colorTribeModal: !this.state.colorTribeModal });
  };

  changeSlide() {
    let { slides, currentSlide } = this.state;
    //4
    let nextSlide = slides.length - 1 > currentSlide ? currentSlide + 1 : 0;
    // let nextSlide = currentSlide + 1;
    console.log(currentSlide, nextSlide);

    this.setState({ isVisible: false, currentSlide: nextSlide });
    const that = this;
    setTimeout(function() {
      that.setState({ isVisible: true });
    }, 500);
  }

  render() {
    let { isVisible, slides, currentSlide } = this.state;

    var sectionStyle = {
      backgroundImage: 'url(' + Background + ')',
    };
    return (
      <div className={'MainPageParent'} style={sectionStyle}>
        <AppWrapper id={'MainPageWrapper'}>
          <div className="min">
            <div className="one">
              <button
                className="button hover15"
                style={{
                  background: '#ffffff78',
                  color: '#000',
                  fontWeight: 'bold',
                  border: '1px solid #000',
                }}
              >
                What do the colours mean?
              </button>
            </div>
            <div className="two">
              <button
                className="button hover15"
                style={{
                  background: '#ffa500',
                  color: '#000',
                  fontWeight: 'bold',
                  border: '1px solid #000',
                }}
              >
                Yellow =
                <br />
                Pop
                <br />
                Yay !
                <br />
                Dancing
                <br />
                Tiddlywinks
              </button>
            </div>
            <div className="three">
              <button
                className="button hover15"
                style={{
                  background: '#224aa8',
                  color: '#000',
                  fontWeight: 'bold',
                  border: '1px solid #000',
                }}
              >
                Blue =
                <br />
                Jazz
                <br />
                Uh-huh
                <br />
                Leaping
                <br />
                Chess
              </button>
            </div>
            <div className="four">
              <button
                className="button hover15"
                style={{
                  background: '#a82222',
                  color: '#000',
                  fontWeight: 'bold',
                  border: '1px solid #000',
                }}
              >
                Red =
                <br />
                Rock
                <br />
                Yes
                <br />
                Running
                <br />
                Wrestling
              </button>
            </div>
          </div>
          <div className="select_btn">
            <button
              className="btn return"
              style={{ background: 'rgba(248, 249, 250, 0.7)', color: 'black' }}
              onClick={() => {
                this.props.history.push('/main');
              }}
            >
              Return to Home
            </button>
            <button
              className="btn shareBtn"
              style={{
                background: 'rgba(248, 249, 250, 0.7)',
                color: 'black',
              }}
              onClick={() => {
                this.props.history.push('/main/also');
              }}
            >
              Also
            </button>
            <button
              className="btn shareBtn"
              style={{
                position: 'absolute',
                background: 'rgba(248, 249, 250, 0.7)',
                right: '-29%',
                bottom: '-100%',
                color: '#000',
                fontWeight: 'bold',
                height: '60px',
                width: '145px',
              }}
              onClick={this.toggleColorTribeModal}
            >
              Help
            </button>
          </div>
          <div className="row" />
          <div className="row" />
          <div className="row">
            <div className="col-lg-12">
              <Modal
                isOpen={this.state.colorTribeModal}
                toggle={this.toggleColorTribeModal}
                className="modal-lg"
              >
                <ModalHeader toggle={this.toggleColorTribeModal}>
                  How to play?
                </ModalHeader>
                <ModalBody>
                  <h3>In a nutshell:</h3>
                  <ul>
                    <li>Choose as many crystals of praise as you wish.</li>
                    <li>Select your final four and send!</li>
                    <li>
                      Click on ‘also’ to find out how close you are to others.
                    </li>
                  </ul>
                  <p>Free, Friendly and hopefully Fun</p>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={this.toggleColorTribeModal}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </AppWrapper>
        <Footer />
      </div>
    );
  }
}

export default ColorMean;
