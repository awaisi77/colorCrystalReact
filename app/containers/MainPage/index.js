import React from 'react';
import './styles.css';
import { mix_hexes } from '../../utils/ColorUtil';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import Confetti from 'react-confetti';
import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import Footer from '../../components/Footer/index';

import {
  FacebookIcon,
  FacebookShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from 'react-share';
import Footer from '../../components/Footer/index';
const AppWrapper = styled.div`
  max-width: calc(1180px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

class MainPage extends React.Component {
  constructor() {
    super();
    this.state = {
      image: null,
      url: null,
      shareButtons: false,
      sendBtnVisibility: false,
      sendEmailModal: false,
      colorTribeModal: false,
      faqsModal: false,
      showMakeFinalSelection: false,
      emailForm: {
        from: null,
        to: null,
        color: null,
        from_name: null,
        to_name: null,
      },
      cat: 'Main',
      subcat: 'none',
      option: null,
      makeFinalSelection: false,
      data: [
        { name: 'A bit Selfie', color: '#f8f9fab3' },
        { name: 'A bit Serious', color: '#f8f9fab3' },
        { name: 'A bit Sunny', color: '#f8f9fab3' },
        { name: 'A bit Pushy', color: '#f8f9fab3' },
      ],
      'A bit Selfie': {
        Set1: {
          options: [
            {
              name: "In a fire I'd rescue essential oils",
              color: '#ffa500',
            },
            {
              name: "In a fire I'd rescue a hunky fireman",
              color: '#a82222',
            },
            {
              name: "In a fire I'd rescue my brand new shredder",
              color: '#224aa8',
            },
            {
              name: "In a fire I'd rescue a pet or maybe a small family member",
              color: '#ffa500',
            },
          ],
        },
        Set2: {
          options: [
            {
              name: "If I had to eat someone I'd start with boobs",
              color: '#ffa500',
            },
            {
              name: "If I had to eat someone I'd start with tongue",
              color: '#224aa8',
            },
            {
              name: "If I had to eat someone I'd start with brains",
              color: '#224aa8',
            },
            {
              name: "If I had to eat someone I'd start with belly",
              color: '#ffa500',
            },
          ],
        },
        Set3: {
          options: [
            {
              name: "I've never seen a newt",
              color: '#ffa500',
            },
            {
              name: 'I don’t understand compound interest',
              color: '#224aa8',
            },
            {
              name: "I've never felt patriotic",
              color: '#224aa8',
            },
            {
              name: "I've never licked a Finn",
              color: '#224aa8',
            },
          ],
        },
        Set4: {
          options: [
            {
              name: 'I rely on tomorrow',
              color: '#ffa500',
            },
            {
              name: 'I rely on that deeper connection',
              color: '#224aa8',
            },
            {
              name: 'I rely on invigorating worthwhile anger',
              color: '#a82222',
            },
            {
              name: 'I rely on the lottery',
              color: '#224aa8',
            },
          ],
        },
        Set5: {
          options: [
            {
              name: 'If I had to commit a crime? Faking money',
              color: '#ffa500',
            },
            {
              name: 'If I had to commit a crime? Pouring paint on trains',
              color: '#ffa500',
            },
            {
              name: 'If I had to commit a crime? Spying',
              color: '#224aa8',
            },
            {
              name:
                'If I had to commit a crime? Sabotaging falconery with Parachuting rats',
              color: '#ffa500',
            },
          ],
        },
      },
      'A bit Serious': {
        Set1: {
          options: [
            {
              name: 'The revolution will come from the young',
              color: '#a82222',
            },
            {
              name: 'The revolution will come from religious extremists',
              color: '#a82222',
            },
            {
              name: 'The revolution will come from organised crime',
              color: '#a82222',
            },
            {
              name:
                'The revolution will come from the sufficiently down-to-earth',
              color: '#a82222',
            },
          ],
        },
        Set2: {
          options: [
            {
              name: 'My peers are guilty of fearing facts',
              color: '#224aa8',
            },
            {
              name: 'My peers are guilty of weaponising credit',
              color: '#a82222',
            },
            {
              name: 'My peers are guilty of reviving slavery',
              color: '#a82222',
            },
            {
              name: 'My peers are guilty of diminishing doubt',
              color: '#224aa8',
            },
          ],
        },
        Set3: {
          options: [
            {
              name: 'My favourite myth is karma',
              color: '#ffa500',
            },
            {
              name: 'My favourite myth is completion',
              color: '#ffa500',
            },
            {
              name: 'My favourite myth is that that ache is wrongness',
              color: '#ffa500',
            },
            {
              name: 'My favourite myth is discovery',
              color: '#ffa500',
            },
          ],
        },
        Set4: {
          options: [
            {
              name: 'Please please yourself',
              color: '#ffa500',
            },
            {
              name: 'Please stop filming sideways',
              color: '#a82222',
            },
            {
              name: 'Please less death, cruelty etc. if you wouldn’t mind',
              color: '#ffa500',
            },
            {
              name: 'Please stop putting tribe before truth',
              color: '#a82222',
            },
          ],
        },
        Set5: {
          options: [
            {
              name: 'It’s simply the right thing to do',
              color: '#a82222',
            },
            {
              name: 'It’s just the way things are',
              color: '#ffa500',
            },
            {
              name: 'You can think too much',
              color: '#a82222',
            },
            {
              name: 'What makes you so special then?',
              color: '#224aa8',
            },
          ],
        },
      },
      'A bit Sunny': {
        Set1: {
          options: [
            {
              name: 'A word that makes me smile is ‘Wobbled’',
              color: '#ffa500',
            },
            {
              name: 'A word that makes me smile is ‘Shenanigans’',
              color: '#ffa500',
            },
            {
              name: 'A word that makes me smile is ‘Certainly’',
              color: '#224aa8',
            },
            {
              name: 'A word that makes me smile is ‘Grunties’',
              color: '#ffa500',
            },
          ],
        },
        Set2: {
          options: [
            {
              name: '...parachuting grand canyon next thing a salesmen',
              color: '#ffa500',
            },
            {
              name: '...parachuting grand canyon next thing a trampoline',
              color: '#ffa500',
            },
            {
              name: '...parachuting grand canyon next thing customs',
              color: '#a82222',
            },
            {
              name: '...parachuting grand canyon next thing a mineshaft',
              color: '#ffa500',
            },
          ],
        },
        Set3: {
          options: [
            {
              name: 'Viva music flare health bed',
              color: '#ffa500',
            },
            {
              name: 'Viva touch light birds dance',
              color: '#ffa500',
            },
            {
              name: 'Viva flowers cash beaches fear',
              color: '#ffa500',
            },
            {
              name: 'Viva clouds food forgiveness smile',
              color: '#ffa500',
            },
          ],
        },
        Set4: {
          options: [
            {
              name: 'Yee-Hay sucky-bunty nippolata-tweakie',
              color: '#ffa500',
            },
            {
              name: 'Hurrah cockee-licky biggie funbunz',
              color: '#ffa500',
            },
            {
              name: 'Woo-hoo gloopy-gobby clutchy-plungers',
              color: '#ffa500',
            },
            {
              name: 'Yippee goose-bumpy titstreak bearsnouts',
              color: '#ffa500',
            },
          ],
        },
        Set5: {
          options: [
            {
              name: 'Potholing? Nah',
              color: '#a82222',
            },
            {
              name: 'Waxing? Nah',
              color: '#a82222',
            },
            {
              name: 'Remembering? Nah',
              color: '#224aa8',
            },
            {
              name: 'Whooping? Nah',
              color: '#a82222',
            },
          ],
        },
      },
      'A bit Pushy': {
        Set1: {
          options: [
            {
              name: 'For an extra ten years, I would spend them offline',
              color: '#ffa500',
            },
            {
              name: 'For an extra ten years, I would change my religion',
              color: '#ffa500',
            },
            {
              name:
                'For an extra ten years, I would pretend to change my religion',
              color: '#224aa8',
            },
            {
              name:
                'For an extra ten years, I would eat meat or stop eating meat',
              color: '#ffa500',
            },
          ],
        },
        Set2: {
          options: [
            {
              name: 'I’m a bit of a pain about something mystic',
              color: '#a82222',
            },
            {
              name: 'I’m a bit of a pain about un-inventing something',
              color: '#a82222',
            },
            {
              name: 'I’m a bit of a pain about some identity thing',
              color: '#a82222',
            },
            {
              name: 'I’m a bit of a pain about some food thing',
              color: '#a82222',
            },
          ],
        },
        Set3: {
          options: [
            {
              name: 'Share the darkness with a bonfire',
              color: '#ffa500',
            },
            {
              name: 'Share the darkness with defiant wishfulness',
              color: '#a82222',
            },
            {
              name: 'Share the darkness despite knowing',
              color: '#224aa8',
            },
            {
              name: 'Share the darkness even with that ache',
              color: '#224aa8',
            },
          ],
        },
        Set4: {
          options: [
            {
              name: 'Yes-Yes-Yes-Yes-YES Oh, like You wouldn’t believe',
              color: '#ffa500',
            },
            {
              name: 'Yes? Yes. Why not?',
              color: '#a82222',
            },
            {
              name: 'Maybe, like literally',
              color: '#224aa8',
            },
            {
              name: 'No, just no, and let that be the end to it',
              color: '#ffa500',
            },
          ],
        },
        Set5: {
          options: [
            {
              name: 'Meanwhile on Planet Soundless: Yodellers',
              color: '#ffa500',
            },
            {
              name: 'Meanwhile on Planet Soundless: Face Masks',
              color: '#ffa500',
            },
            {
              name: 'Meanwhile on Planet Soundless: Chinese Whispers',
              color: '#ffa500',
            },
            {
              name: 'Meanwhile on Planet Soundless: Ventriloquists',
              color: '#ffa500',
            },
          ],
        },
      },
      Also: {
        options: [
          {
            name: 'An extra selection of Praise',
            color: 'rgba(248, 249, 250, 0.7)',
          },
          {
            name: 'What do the colours mean?',
            color: 'rgba(248, 249, 250, 0.7)',
          },
          {
            name: 'FAQs',
            color: 'rgba(248, 249, 250, 0.7)',
          },
          {
            name: 'How to find your colour crystal tribe',
            color: 'rgba(248, 249, 250, 0.7)',
          },
        ],
      },
      'An extra selection of Praise': {
        Set1: {
          options: [
            {
              name: 'The Triangle',
              color: '#ffa500',
            },
            {
              name: 'The Baton',
              color: '#ffa500',
            },
            {
              name: 'The erase button',
              color: '#224aa8',
            },
            {
              name: "The Referee's Whistle",
              color: '#a82222',
            },
          ],
        },
        Set2: {
          options: [
            {
              name: "Hope's a flying boat",
              color: '#ffa500',
            },
            {
              name: "Hope's a rubber duckie",
              color: '#ffa500',
            },
            {
              name: "Hope's a shipload of floation tanks",
              color: '#224aa8',
            },
            {
              name: "Hope's Titanic's Iceberg",
              color: '#a82222',
            },
          ],
        },
        Set3: {
          options: [
            {
              name: "(at root doubt's heartbeat)",
              color: '#224aa8',
            },
            {
              name: '(at root a shared common field)',
              color: '#ffa500',
            },
            {
              name: '(at root the real here now)',
              color: '#ffa500',
            },
            {
              name: '(at root only hovering colours)',
              color: '#ffa500',
            },
          ],
        },
        Set4: {
          options: [
            {
              name: "At worst you'll be rightly adored next time",
              color: '#ffa500',
            },
            {
              name: 'At worst there can still be great days',
              color: '#a82222',
            },
            {
              name: "At worst many smart people are sure we'll all meet again",
              color: '#224aa8',
            },
            {
              name: 'At worst let them free you from your grief',
              color: '#a82222',
            },
          ],
        },
        Set5: {
          options: [
            {
              name: 'wearing flippers',
              color: '#ffa500',
            },
            {
              name: 'in a hammock',
              color: '#ffa500',
            },
            {
              name: 'in secure facilities',
              color: '#ffa500',
            },
            {
              name: 'in oven gloves',
              color: '#ffa500',
            },
          ],
        },
        Set6: {
          options: [
            {
              name: 'They love by endless effing advice',
              color: '#ffa500',
            },
            {
              name: 'They love by using other words',
              color: '#ffa500',
            },
            {
              name: 'Without always liking, loving nevertheless',
              color: '#ffa500',
            },
            {
              name: 'They love by pretending to forget',
              color: '#224aa8',
            },
          ],
        },
      },
      selectionList: [],
    };
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
    if (cat === 'An extra section of ShowSelf') {
      if (subcat === 'Set6') {
        this.setBackDataSet('Set5', option, cat);
      } else if (subcat === 'Set5') {
        this.setBackDataSet('Set4', option, cat);
      } else if (subcat === 'Set4') {
        this.setBackDataSet('Set3', option, cat);
      } else if (subcat === 'Set3') {
        this.setBackDataSet('Set2', option, cat);
      } else if (subcat === 'Set2') {
        this.setBackDataSet('Set1', option, cat);
      }
    } else {
      if (subcat === 'Set5') {
        this.setBackDataSet('Set4', option, cat);
      } else if (subcat === 'Set4') {
        this.setBackDataSet('Set3', option, cat);
      } else if (subcat === 'Set3') {
        this.setBackDataSet('Set2', option, cat);
      } else if (subcat === 'Set2') {
        this.setBackDataSet('Set1', option, cat);
      }
    }
  };
  nextButtonHandler = e => {
    let { cat, subcat, data, option } = this.state;
    if (cat === 'An extra section of ShowSelf') {
      if (subcat === 'Set1') {
        this.setNextSet('Set2', option, cat);
      } else if (subcat === 'Set2') {
        this.setNextSet('Set3', option, cat);
      } else if (subcat === 'Set3') {
        this.setNextSet('Set4', option, cat);
      } else if (subcat === 'Set4') {
        this.setNextSet('Set5', option, cat);
      } else if (subcat === 'Set5') {
        this.setNextSet('Set6', option, cat);
      } else if (subcat === 'Set6') {
        this.setNextSet('Set6', option, cat);
      }
    } else {
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
    }
  };
  returnToHomeButtonHandler = e => {
    this.setState({
      cat: 'Main',
      subcat: 'none',
      option: null,
      data: [
        { name: 'A bit Selfie', color: '#f8f9fab3' },
        { name: 'A bit Serious', color: '#f8f9fab3' },
        { name: 'A bit Sunny', color: '#f8f9fab3' },
        { name: 'A bit Pushy', color: '#f8f9fab3' },
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
  resizeImage = (base64Str, maxWidth = 900, maxHeight = 500) => {
    return new Promise(resolve => {
      let img = new Image();
      img.src = base64Str;
      img.onload = () => {
        let canvas = document.createElement('canvas');
        const MAX_WIDTH = maxWidth;
        const MAX_HEIGHT = maxHeight;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }
        canvas.width = width;
        canvas.height = height;
        let ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);
        resolve(canvas.toDataURL());
      };
    });
  };
  captureImage = async () => {
    html2canvas(document.querySelector('#MainPageId')).then(async canvas => {
      setTimeout(() => {}, 10);
      var base64URL = canvas.toDataURL('image/jpg');
      //  .replace('image/jpg', 'image/octet-stream');
      console.log('base64URL', base64URL);
      let updatedBase64 = await this.resizeImage(base64URL);
      console.log('updatedBase64', updatedBase64);
      setTimeout(() => {}, 10);
      this.setState({ image: updatedBase64 });
    });
  };
  toggleSendEmailModal = async () => {
    await this.setState({
      makeFinalSelection: false,
      sendEmailModal: !this.state.sendEmailModal,
    });
    await this.captureImage();
  };
  toggleColorTribeModal = () => {
    this.setState({ colorTribeModal: !this.state.colorTribeModal });
  };
  toggleFaqs = () => {
    this.setState({ faqsModal: !this.state.faqsModal });
  };
  handleSubmitSendMail = e => {
    console.log(e.target);
    e.preventDefault(); // Prevents default refresh by the browser
    var axios = require('axios');
    var FormData = require('form-data');
    var data = new FormData();
    data.append('from_name', this.state.emailForm.from_name);
    data.append('base64_image', this.state.image);
    data.append('to_name', this.state.emailForm.to_name);
    data.append('from_email', this.state.emailForm.from);
    data.append('to_email', this.state.emailForm.to);
    data.append('your_color', this.state.option.color);
    /*  let data = {
      from_name: this.state.emailForm.from_name,
      base64_image: this.state.image,
      to_name: this.state.emailForm.to_name,
      from_email: this.state.emailForm.from,
      to_email: this.state.emailForm.to,
      your_color: this.state.option.color,
    }; */

    var config = {
      method: 'post',
      url: 'https://showself.thecolorcrystal.com/api/post/game',
      data: data,
    };
    axios(config)
      .then(response => {
        console.log(JSON.stringify(response.data));
        this.setState({
          url: response.data.url,
          shareButtons: true,
        });
        alert('Your Colour Crystal has been sent.');
        /* this.setState({
                  cat: 'Main', subcat: 'none', sendEmailModal: false, sendBtnVisibility: false, option: null, data: [
                    { name: 'Friends', color: '#a82222' },
                    { name: 'Family', color: '#224aa8' },
                    { name: 'Sweetheart', color: '#ffa500' },
                    { name: 'Others', color: '#a82222' },
                  ], makeFinalSelection: false,
                });*/
        localStorage.clear();
      })
      .catch(error => {
        console.log(error);
        alert('An error occurred, Please try again', error);
      });
  };

  componentDidMount() {
    if (localStorage.getItem('selections') !== null) {
      this.setState({ showMakeFinalSelection: true });
    }
    console.log('this.props.match.params', this.props.match.params.pathParam);
    if (this.props.match.params.hasOwnProperty('pathParam')) {
      if (this.props.match.params.pathParam === 'also') {
        let { cat, subcat, data } = this.state;
        let text = 'Also';
        let obj = this.state[text];
        data = obj.options;
        this.setState({ cat: text, subcat: 'Set1', data: data });
      }
    }
  }

  render() {
    let { data, cat, subcat } = this.state;

    return (
      <div className={'MainPageParent'} id={'MainPageId'}>
        <AppWrapper id={'MainPageWrapper'}>
          <div className="min">
            {cat === 'Main' && subcat === 'none'
              ? data.map((obj, index) => {
                  let btnClass = '';
                  if (index === 0) {
                    btnClass = 'one';
                  } else if (index === 1) {
                    btnClass = 'two';
                  } else if (index === 2) {
                    btnClass = 'three';
                  } else if (index === 3) {
                    btnClass = 'four';
                  }
                  return (
                    <div className={' ' + btnClass}>
                      <button
                        className="button hover15"
                        key={obj.name}
                        style={{
                          background: obj.color,
                          color: '#000',
                          border: '4px dotted #fff',
                        }}
                        onClick={this.onButtonClickHandler}
                      >
                        {obj.name}
                      </button>
                    </div>
                  );
                })
              : data.map((obj, index) => {
                  let btnClass = '';
                  if (index === 0) {
                    btnClass = 'one';
                  } else if (index === 1) {
                    btnClass = 'two';
                  } else if (index === 2) {
                    btnClass = 'three';
                  } else if (index === 3) {
                    btnClass = 'four';
                  }
                  return (
                    <div className={' ' + btnClass}>
                      <button
                        className="button hover15"
                        key={obj.name}
                        style={{ background: obj.color }}
                        onClick={e => {
                          let { cat, subcat } = this.state;
                          if (
                            e.target.innerText ===
                              'An extra selection of Praise' &&
                            cat === 'Also'
                          ) {
                            this.setState({
                              option: {
                                name: 'An extra selection of Praise',
                                color: 'red',
                              },
                              cat: 'An extra selection of Praise',
                            });
                            this.setNextSet(
                              'Set1',
                              { name: 'NA', color: 'white' },
                              'An extra selection of Praise',
                            );
                          } else if (
                            e.target.innerText ===
                              'How to find your colour crystal tribe' &&
                            cat === 'Also'
                          ) {
                            if (localStorage.getItem('finalColor') !== null) {
                              this.props.history.push('/find-tribe');
                            } else {
                              alert('Please select your colour first.');
                            }
                          } else if (
                            e.target.innerText === 'What do the colours mean?' &&
                            cat === 'Also'
                          ) {
                            this.props.history.push('/color-mean');
                          } else if (
                            e.target.innerText === 'FAQs' &&
                            cat === 'Also'
                          ) {
                            this.toggleFaqs();
                          } else if (
                            e.target.innerText === 'The Color Crystal Live' &&
                            cat === 'Also'
                          ) {
                            if (localStorage.getItem('tribe') !== null) {
                              this.props.history.push('/live');
                            } else {
                              alert('Please select your tribe first.');
                            }
                          } else {
                            let selectedOption = this.state[cat][
                              subcat
                            ].options.filter(obj => {
                              return obj.name === e.target.innerText;
                            });
                            this.setState({
                              option: selectedOption[0],
                            });
                            console.log('state', this.state);
                          }
                        }}
                      >
                        {obj.name}
                      </button>
                    </div>
                  );
                })}
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
          <div className="finalList row float-right">
            {this.state.makeFinalSelection === true ? (
              <>
                <h3 style={{ color: '#fff' }}>Please select final four. </h3>
                <div className="scroll-wrapper">
                  <div className="scroll-body">
                    {this.state.selectionList.map(o => {
                      return (
                        <div className="scroll-body-item">
                          <div
                            className="scroll-content"
                            style={{ background: o.color }}
                            onClick={async e => {
                              console.log(e.target.innerText);
                              let { data, selectionList } = this.state;
                              let selectOption = null;
                              for (let j = 0; j < selectionList.length; j++) {
                                if (
                                  selectionList[j].name == e.target.innerText
                                ) {
                                  if (
                                    data.some(obj => {
                                      console.log('object', obj);
                                      return obj.name === e.target.innerText;
                                    })
                                  ) {
                                    alert('Already added.');
                                  } else {
                                    selectOption = selectionList[j];
                                  }
                                }
                              }
                              if (selectOption !== null) {
                                console.log('selectOption', selectOption);
                                for (let i = 0; i < 4; i++) {
                                  if (data[i].name === '') {
                                    data[i] = selectOption;
                                    break;
                                  }
                                }
                                console.log('Data', data);
                                await this.setState({ data });
                                console.log('state', this.state);
                                if (
                                  data[0].name !== '' &&
                                  data[1].name !== '' &&
                                  data[2].name !== '' &&
                                  data[3].name !== ''
                                ) {
                                  let finalColor = mix_hexes(
                                    data[0].color,
                                    data[1].color,
                                    data[2].color,
                                    data[3].color,
                                  );
                                  console.log('FInalColor', finalColor);
                                  if (
                                    localStorage.getItem('finalColor') !== null
                                  ) {
                                    let finalColorObj = JSON.parse(
                                      localStorage.getItem('finalColor'),
                                    );
                                    finalColorObj = {
                                      name: 'Your Color is : ',
                                      color: finalColor,
                                    };
                                    localStorage.setItem(
                                      'finalColor',
                                      JSON.stringify(finalColorObj),
                                    );
                                  } else {
                                    localStorage.setItem(
                                      'finalColor',
                                      JSON.stringify({
                                        name: 'Your Color is : ',
                                        color: finalColor,
                                      }),
                                    );
                                  }
                                  this.setState({
                                    option: {
                                      name: 'Your Color is : ',
                                      color: finalColor,
                                    },
                                    sendBtnVisibility: true,
                                  });
                                }
                              }
                            }}
                          >
                            {o.name}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              ''
            )}
          </div>
          <div className="select_btn">
            {this.state.cat === 'Main' ? (
              <button
                className="btn back"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={this.onAlsoButtonClickHandler}
              >
                Also
              </button>
            ) : (
              ''
            )}
            {this.state.cat === 'Main' ||
            (this.state.cat === 'Also' && this.state.subcat === 'Set1') ? (
              ''
            ) : (
              <button
                className="btn back"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={this.backButtonHandler}
              >
                Back
              </button>
            )}
            {this.state.cat !== 'Main' ? (
              <button
                className="btn final"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={e => {
                  if (localStorage.getItem('selections') !== null) {
                    let selections = JSON.parse(
                      localStorage.getItem('selections'),
                    );
                    const selectionSet = new Set(selections);
                    selections = Array.from(selectionSet);
                    // const unique = [...new Set(selections.map(item => { return {name:item.name,color:item.color}}))];
                    const key = 'name';
                    const arrayUniqueByKey = [
                      ...new Map(
                        selections.map(item => [item[key], item]),
                      ).values(),
                    ];
                    console.log('arrayUniqueByKey', arrayUniqueByKey);
                    if (selections.length > 3) {
                      this.setState({
                        makeFinalSelection: true,
                        data: [
                          { name: '', color: 'white' },
                          { name: '', color: 'white' },
                          { name: '', color: 'white' },
                          { name: '', color: 'white' },
                        ],
                        selectionList: arrayUniqueByKey,
                      });
                    } else {
                      alert('Please choose at least four crystals first');
                    }
                  } else {
                    alert('Please choose at least four crystals first');
                  }
                }}
              >
                Make Final Selection
              </button>
            ) : (
              ''
            )}
            {this.state.cat === 'Also' && this.state.subcat === 'Set1' ? (
              ''
            ) : (
              <button
                className="btn next"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={this.nextButtonHandler}
              >
                Next
              </button>
            )}
            {this.state.cat !== 'Main' ? (
              <button
                className="btn return"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={this.returnToHomeButtonHandler}
              >
                Return to Home
              </button>
            ) : (
              ''
            )}
            {this.state.sendBtnVisibility ? (
              <button
                className="btn shareBtn"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={this.toggleSendEmailModal}
              >
                Share Result
              </button>
            ) : (
              ''
            )}
            {this.state.cat === 'An extra selection of Praise' &&
            this.state.sendBtnVisibility === false ? (
              <button
                className="btn shareBtn"
                style={{
                  background: 'rgba(248, 249, 250, 0.7)',
                  color: 'black',
                }}
                onClick={this.onAlsoButtonClickHandler}
              >
                Also
              </button>
            ) : (
              ''
            )}
            {this.state.cat === 'Main' ? (
              <button
                className="btn shareBtn"
                style={{
                  position: 'absolute',
                  background: 'rgba(248, 249, 250, 0.7)',
                  right: '-29%',
                  bottom: '-100%',
                  color: 'black',
                  fontWeight: 'bold',
                  height: '60px',
                  width: '145px',
                }}
                onClick={this.toggleColorTribeModal}
              >
                Help
              </button>
            ) : (
              ''
            )}
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Modal
                isOpen={this.state.sendEmailModal}
                toggle={this.toggleSendEmailModal}
                className="modal-lg"
              >
                {' '}
                {this.state.shareButtons === true ? (
                  <Confetti width={1000} height={800} />
                ) : (
                  ''
                )}
                <ModalHeader toggle={this.toggleSendEmailModal}>
                  Share with friend via Email:
                </ModalHeader>
                <ModalBody>
                  <form onSubmit={this.handleSubmitSendMail}>
                    <div className="row">
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="from"
                            name="from_name"
                            onChange={e => {
                              let { emailForm } = this.state;
                              emailForm.from_name = e.target.value;
                              this.setState({ emailForm });
                              console.log('state', this.state);
                            }}
                            placeholder="Your Name"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="from"
                            name="from"
                            onChange={e => {
                              let { emailForm } = this.state;
                              emailForm.from = e.target.value;
                              this.setState({ emailForm });
                              console.log('state', this.state);
                            }}
                            placeholder="Your email"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            type="text"
                            className="form-control"
                            id="to"
                            name="to_name"
                            onChange={e => {
                              let { emailForm } = this.state;
                              emailForm.to_name = e.target.value;
                              this.setState({ emailForm });
                              console.log('state', this.state);
                            }}
                            placeholder="Their Name"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="form-group">
                          <input
                            type="email"
                            className="form-control"
                            id="to"
                            name="to"
                            onChange={e => {
                              let { emailForm } = this.state;
                              emailForm.to = e.target.value;
                              this.setState({ emailForm });
                              console.log('state', this.state);
                            }}
                            placeholder="Their Email"
                          />
                        </div>
                      </div>
                      <div className="col-3">
                        <label htmlFor="exampleInputEmail1">
                          A colour of you:
                        </label>
                      </div>
                      <div className="col-8">
                        <div className="form-group">
                          <input
                            type="color"
                            style={{ padding: '0 !important' }}
                            className="form-control"
                            id="color"
                            name="color"
                            readOnly={true}
                            value={
                              this.state.option !== null
                                ? this.state.option.color
                                : 'red'
                            }
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <Button color="primary" type="submit">
                          Send Email
                        </Button>
                      </div>
                      <div className="col-6">
                        {this.state.shareButtons === true ? (
                          <WhatsappShareButton url={this.state.url}>
                            <WhatsappIcon size={32} round={true} />
                          </WhatsappShareButton>
                        ) : (
                          ''
                        )}
                        {this.state.shareButtons === true ? (
                          <FacebookShareButton url={this.state.url}>
                            <FacebookIcon size={32} round={true} />
                          </FacebookShareButton>
                        ) : (
                          ''
                        )}
                      </div>
                    </div>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button
                    color="secondary"
                    onClick={this.handleCloseSendEmailModal}
                  >
                    Cancel
                  </Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <Modal
                isOpen={this.state.colorTribeModal}
                toggle={this.toggleColorTribeModal}
                className="modal-lg"
              >
                <ModalHeader toggle={this.toggleColorTribeModal}>
                  How to show yourself?
                </ModalHeader>
                <ModalBody>

                  <ul>
                    <li>Choose the crystals which show what you’re like.</li>
                    <li>Select your final four and send.</li>
                    <li>
                      Click ‘How to find your colour crystal tribe’ to see where
                      you stand.
                    </li>
                  </ul>
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
          <div className="row">
            <div className="col-lg-12">
              <Modal
                isOpen={this.state.faqsModal}
                toggle={this.toggleFaqs}
                className="modal-lg"
              >
                <ModalHeader toggle={this.toggleFaqs}>FAQs</ModalHeader>
                <ModalBody>
                  <ul>
                    <li>Why Praise? Ach, really?</li>
                    <li>Will they know it’s from me? Yes.</li>
                    <li>
                      Do I have to use both wings? No, you can just send praise.
                    </li>
                    <li>
                      Why fill in the questionnaire? To see how close we are,
                      how far apart
                    </li>
                    <li>
                      Who’s behind it? A bunch of us in a tent in Galway, it was
                      raining…
                    </li>
                  </ul>
                </ModalBody>
                <ModalFooter>
                  <Button color="secondary" onClick={this.toggleFaqs}>
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

export default MainPage;
