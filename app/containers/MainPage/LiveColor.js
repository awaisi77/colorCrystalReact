import React from 'react';
import './styles.css';
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

class LiveColor extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: [
        '#e6675e',
        '#e0827b',
        '#d6c05e',
        '#fff07a',
        '#baf25e',
        '#70992e',
        '#70992e',
        '#548cc4',
        '#d4b8f5',
        '#f55fb7',
        '#e8204f'],
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
        { name: 'Sweetheart', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Others', color: 'rgb(168 34 34 / 5%)' },
      ],
      selectionList: [],
    };
  }

  componentDidMount() {

    if (localStorage.getItem('finalColor') !== null) {
      let finalColorObj = JSON.parse(localStorage.getItem('finalColor'));
      this.setState({ option: finalColorObj });
    }
    if (localStorage.getItem('tribe') !== null) {
      let tribe = JSON.parse(localStorage.getItem('tribe'));
      let { colors, formTribe } = this.state;
      const random0 = Math.floor(Math.random() * colors.length);
      const random1 = Math.floor(Math.random() * colors.length);
      const random2 = Math.floor(Math.random() * colors.length);
      const random3 = Math.floor(Math.random() * colors.length);
      tribe.family.color = colors[random0];
      tribe.from.color = colors[random1];
      tribe.iam.color = colors[random2];
      tribe.maybe.color = colors[random3];
      console.log(random0, colors[random0]);
      this.setState({ formTribe: tribe });
    }
  }

  onAlsoButtonClickHandler = (e) => {
    e.preventDefault();
    let { cat, subcat, data } = this.state;
    let text = e.target.innerText;
    let obj = this.state[text];
    data = obj.options;
    this.setState({ cat: text, subcat: 'Set1', data: data });
  };
  onButtonClickHandler = (e) => {
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
          localStorage.setItem('selections', JSON.stringify(uniqueSelectionArray));
        }
      }
    }
    this.setState({ subcat: setNext, option: null, data: newSet, makeFinalSelection: false, selectionList: [] });
  };
  setBackDataSet = (setBack, option, cat) => {
    let obj = this.state[cat];
    let newSet = obj[setBack].options;
    this.setState({ subcat: setBack, option: null, data: newSet });
  };
  backButtonHandler = (e) => {
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
  nextButtonHandler = (e) => {
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
  returnToHomeButtonHandler = (e) => {
    this.setState({
      cat: 'Main', subcat: 'none', option: null, data: [
        { name: 'Friends', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Family', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Sweetheart', color: 'rgb(168 34 34 / 5%)' },
        { name: 'Others', color: 'rgb(168 34 34 / 5%)' },
      ], makeFinalSelection: false,
    });
  };
  handleCloseSendEmailModal = (e) => {
    this.setState({ sendEmailModal: false });
  };
  handleShowSendEmailModal = (e) => {
    this.setState({ sendEmailModal: true });
  };
  toggleSendEmailModal = () => {
    this.setState({ sendEmailModal: !this.state.sendEmailModal });
  };

  render() {
    let { data, cat, subcat,formTribe } = this.state;
    return (
      <div className={'MainPageParent'}>
        <AppWrapper id={'MainPageWrapper'}>
          <div className='min'>
            <div className=''>
              <div className='one'>
                <button className='button hover15'
                        style={{ background: formTribe.family.color, border: '4px dotted #fff' }}
                >Average colour for {formTribe.family.value}
                </button>
              </div>
              <div className='two'>
                <button className='button hover15'
                        style={{ background: formTribe.from.color, border: '4px dotted #fff' }}
                >Average colour for {formTribe.from.value}
                </button>
              </div>
              <div className='three'
              >
                <button className='button hover15'
                        style={{ background: formTribe.iam.color, border: '4px dotted #fff' }}
                >Average colour for {formTribe.iam.value}
                </button>
              </div>
              <div className='four'
              >
                <button className='button hover15'
                        style={{ background: formTribe.maybe.color, border: '4px dotted #fff' }}
                >Average colour for {formTribe.maybe.value}
                </button>
              </div>
            </div>
            {this.state.option !== null ?
              <div className='button five' style={{
                border: '4px dotted #fff',
                background: this.state.option.color,
              }}>
                {this.state.option.name}
              </div> : <div className='button five' style={{
                border: '4px dotted #fff',
                background: 'rgb(168 34 34 / 5%)',
              }}>
              </div>}
          </div>
          <div className='select_btn'>
            <button className='btn return' style={{ background: 'orange' }}
                    onClick={() => {
                      this.props.history.push('/main');
                    }}>Return to
              Home
            </button>
            <button className='btn shareBtn' style={{ background: 'orange' }}
                    onClick={() => {
                      this.props.history.push('/main/also');
                    }}>Also</button>
          </div>
          <div className='row'></div>
          <div className='row'></div>
        </AppWrapper>
      </div>
    )
  };
}
export default LiveColor;
