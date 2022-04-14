import React from 'react';
import './styles-tribe.css';
import { mix_hexes } from '../../utils/ColorUtil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styled from 'styled-components';

const AppWrapper = styled.div`
  max-width: calc(1180px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class Tribe extends React.Component {
  constructor() {
    super();
    this.state = {
      formTribe: {
        family: { value: 'Oldest', color: '#a82222' },
        from: { value: 'Australia', color: '#e8cb61' },
        iam: { value: 'an optimist', color: '#224aa8' },
        maybe: { value: 'better yet', color: '#a82222' },
      },
      sendBtnVisibility: false,
      sendEmailModal: false,
      colorTribeModal: false,
      emailForm: {
        from: null,
        to: null,
        color: null,
      },
      cat: 'Main',
      subcat: 'none',
      option: null,
      makeFinalSelection: false,
      data: [
        { name: 'Friends', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Family', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Others', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Sweetheart', color: 'rgb(168 34 34 / 5%)' },
      ],
      selectionList: [],
    };
  }

  componentDidMount() {
    if (localStorage.getItem('finalColor') !== null) {
      let finalColorObj = JSON.parse(localStorage.getItem('finalColor'));
      this.setState({ option: finalColorObj });
    }
  }

  onAlsoButtonClickHandler = e => {
    e.preventDefault();
    let { cat, subcat, data } = this.state;
    let text = e.target.innerText;
    let obj = this.state[text];
    data = obj.options;
    this.setState({ cat: text, subcat: 'Set1', data: data });
  };
  onButtonClickHandler = e => {
    e.preventDefault();
    let { cat, subcat, data } = this.state;
    let text = e.target.innerText;
    if (cat === 'Main') {
      let obj = this.state[text];
      data = obj.Set1.options;
      this.setState({ cat: text, subcat: 'Set1', data: data });
    } else {
    }
  };
  setNextSet = (setNext, option, cat) => {
    let obj = this.state[cat];
    let newSet = obj[setNext].options;
    console.log(option);
    if (localStorage.getItem('selections') !== null) {
      if (option !== null) {
        if (option.name !== 'NA') {
          let selections = JSON.parse(localStorage.getItem('selections'));
          const selectionSet = new Set(selections);
          selectionSet.add(option);
          selections = Array.from(selectionSet);
          localStorage.setItem('selections', JSON.stringify(selections));
        }
      }
    } else {
      if (option !== null) {
        if (option.name !== 'NA') {
          let uniqueSelection = new Set();
          uniqueSelection.add(option);
          console.log('uniqueSelection', uniqueSelection);
          let uniqueSelectionArray = Array.from(uniqueSelection);
          console.log('uniqueSelectionArray', uniqueSelection);
          localStorage.setItem(
            'selections',
            JSON.stringify(uniqueSelectionArray),
          );
        }
      }
    }
    this.setState({
      subcat: setNext,
      option: null,
      data: newSet,
      makeFinalSelection: false,
      selectionList: [],
    });
  };
  setBackDataSet = (setBack, option, cat) => {
    let obj = this.state[cat];
    let newSet = obj[setBack].options;
    this.setState({ subcat: setBack, option: null, data: newSet });
  };
  backButtonHandler = e => {
    let { cat, subcat, data, option } = this.state;
    if (subcat === 'Set5') {
      this.setBackDataSet('Set4', option, cat);
    } else if (subcat === 'Set4') {
      this.setBackDataSet('Set3', option, cat);
    } else if (subcat === 'Set3') {
      this.setBackDataSet('Set2', option, cat);
    } else if (subcat === 'Set2') {
      this.setBackDataSet('Set1', option, cat);
    }
  };
  toggleColorTribeModal = () => {
    this.setState({ colorTribeModal: !this.state.colorTribeModal });
  };

  nextButtonHandler = e => {
    let { cat, subcat, data, option } = this.state;
    if (subcat === 'Set1') {
      this.setNextSet('Set2', option, cat);
    } else if (subcat === 'Set2') {
      this.setNextSet('Set3', option, cat);
    } else if (subcat === 'Set3') {
      this.setNextSet('Set4', option, cat);
    } else if (subcat === 'Set4') {
      this.setNextSet('Set5', option, cat);
    } else if (subcat === 'Set5') {
      this.setNextSet('Set5', option, cat);
    }
  };
  returnToHomeButtonHandler = e => {
    this.setState({
      cat: 'Main',
      subcat: 'none',
      option: null,
      data: [
        { name: 'Friends', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Family', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Others', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Sweetheart', color: 'rgb(168 34 34 / 5%)' },
      ],
      makeFinalSelection: false,
    });
  };
  handleCloseSendEmailModal = e => {
    this.setState({ sendEmailModal: false });
  };
  handleShowSendEmailModal = e => {
    this.setState({ sendEmailModal: true });
  };
  toggleSendEmailModal = () => {
    this.setState({ sendEmailModal: !this.state.sendEmailModal });
  };

  render() {
    let { data, cat, subcat } = this.state;
    return (
      <div className={'TribePageParent'}>
        <AppWrapper id={'TribePageWrapper'}>
          <div className="min">
            <div className="">
              <div className="one">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">
                    My family <br /> position is:
                  </label>
                  <select
                    className="form-control round"
                    name="position"
                    id=""
                    onChange={e => {
                      let { formTribe } = this.state;
                      let index = e.nativeEvent.target.selectedIndex;
                      let val = e.nativeEvent.target[index].text;
                      formTribe.family.value = val;
                      formTribe.family.color = e.target.value;
                      this.setState({ formTribe });
                    }}
                  >
                    <option value="#a82222" style={{ textAlign: 'center' }}>
                      Oldest
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      Older
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      Middle
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      Younger
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Youngest
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Twin
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Only Child
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Other
                    </option>
                  </select>
                </div>
              </div>
              <div className="two">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">I'm from:</label>
                  <select
                    className="form-control round"
                    name="from"
                    id=""
                    onChange={e => {
                      let { formTribe } = this.state;
                      let index = e.nativeEvent.target.selectedIndex;
                      let val = e.nativeEvent.target[index].text;
                      formTribe.from.value = val;
                      formTribe.from.color = e.target.value;
                      this.setState({ formTribe });
                    }}
                  >
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Australia
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Canada
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Denmark
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      England
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Finland
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Germany
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Ireland
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      India
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Jamaica
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Kenya
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Malaysia
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      Northern Ireland
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Nigeria
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Philippines
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Poland
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Romania
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Scotland
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      Sweden
                    </option>
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      USA
                    </option>
                    <option value="#a82222" style={{ textAlign: 'center' }}>
                      Wales
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      Not Listed
                    </option>
                  </select>
                </div>
              </div>
              <div className="three">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">I'm:</label>
                  <select
                    className="form-control round"
                    name="iam"
                    id=""
                    onChange={e => {
                      let { formTribe } = this.state;
                      let index = e.nativeEvent.target.selectedIndex;
                      let val = e.nativeEvent.target[index].text;
                      formTribe.iam.value = val;
                      formTribe.iam.color = e.target.value;
                      this.setState({ formTribe });
                    }}
                  >
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      an optimist
                    </option>
                    <option value="#a82222" style={{ textAlign: 'center' }}>
                      a pessimist
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      a reacher
                    </option>
                  </select>
                </div>
              </div>
              <div className="four">
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">I'm maybe:</label>
                  <select
                    className="form-control round"
                    name="maybe"
                    id=""
                    onChange={e => {
                      let { formTribe } = this.state;
                      let index = e.nativeEvent.target.selectedIndex;
                      let val = e.nativeEvent.target[index].text;
                      formTribe.maybe.value = val;
                      formTribe.maybe.color = e.target.value;
                      this.setState({ formTribe });
                      console.log('state', this.state);
                    }}
                  >
                    <option value="#e8cb61" style={{ textAlign: 'center' }}>
                      better yet
                    </option>
                    <option value="#a82222" style={{ textAlign: 'center' }}>
                      less deceived
                    </option>
                    <option value="#224aa8" style={{ textAlign: 'center' }}>
                      fearless except
                    </option>
                  </select>
                </div>
              </div>
            </div>
            {this.state.option !== null ? (
              <div
                className="button five"
                style={{
                  border: '1px solid #000',
                  background: this.state.option.color,
                }}
              >
                {this.state.option.name}
              </div>
            ) : (
              <div
                className="button five"
                style={{
                  border: '4px dotted #fff',
                  background: 'rgb(168 34 34 / 5%)',
                }}
              />
            )}
          </div>
          <div className="select_btn">
            <button
              className="btn final"
              style={{ background: 'rgba(248, 249, 250, 0.7)', color: 'black' }}
              onClick={e => {
                localStorage.setItem(
                  'tribe',
                  JSON.stringify(this.state.formTribe),
                );
                this.props.history.push('/live');
              }}
            >
              Find
            </button>
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
              style={{ background: 'rgba(248, 249, 250, 0.7)', color: 'black' }}
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
      </div>
    );
  }
}

export default Tribe;
