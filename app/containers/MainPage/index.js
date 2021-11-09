import React from 'react';
import './styles.css';
import { mix_hexes } from '../../utils/ColorUtil';
import 'bootstrap/dist/css/bootstrap.min.css';
import emailjs from 'emailjs-com';
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import styled from 'styled-components';
import html2canvas from 'html2canvas';
import { FacebookIcon, FacebookShareButton, WhatsappIcon, WhatsappShareButton } from 'react-share';

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
      showMakeFinalSelection:false,
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
        { name: 'Friends', color: '#f8f9fab3' },
        { name: 'Family', color: '#f8f9fab3' },
        { name: 'Others', color: '#f8f9fab3' },
        { name: 'Sweetheart', color: '#f8f9fab3' },

      ],
      'Friends': {
        'Set1': {
          'options': [
            {
              'name': '...it\'s your first impression',
              'color': '#ffa500',
            },
            {
              'name': '...it\'s your strong first impression',
              'color': '#a82222',
            },
            {
              'name': 'it\'s your choices',
              'color': '#224aa8',
            },
            {
              'name': '...it\'s your sense of style',
              'color': '#ffa500',
            },
          ],
        },
        'Set2': {
          'options': [
            {
              'name': 'You\'re very patient',
              'color': '#ffa500',
            },
            {
              'name': 'You skate on slim possibilities',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re strong enough to let it go',
              'color': '#a82222',
            },
            {
              'name': 'You\'re willing to be silly',
              'color': '#ffa500',
            },
          ],
        },
        'Set3': {
          'options': [
            {
              'name': 'You\'re strong',
              'color': '#a82222',
            },
            {
              'name': 'You care for someone we both love',
              'color': '#ffa500',
            },
            {
              'name': 'Your anger is well chosen',
              'color': '#a82222',
            },
            {
              'name': 'You\'re understanding',
              'color': '#224aa8',
            },
          ],
        },
        'Set4': {
          'options': [
            {
              'name': 'You\'re very kind',
              'color': '#ffa500',
            },
            {
              'name': 'You\'re perceptive',
              'color': '#224aa8',
            },
            {
              'name': 'Ah sure the head on you',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re intelligent',
              'color': '#224aa8',
            },
          ],
        },
        'Set5': {
          'options': [
            {
              'name': 'You don\'t stop searching for meaning',
              'color': '#a82222',
            },
            {
              'name': 'You keep it real',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re very caring',
              'color': '#ffa500',
            },
            {
              'name': 'You have a great sense of humour',
              'color': '#ffa500',
            },
          ],

        },
      },
      'Family': {
        'Set1': {
          'options': [
            {
              'name': 'I\'d love you even if we weren\'t family',
              'color': '#ffa500',
            },
            {
              'name': 'You can be proud of putting so much behind you',
              'color': '#a82222',
            },
            {
              'name': 'You\'re one of a kind',
              'color': '#224aa8',
            },
            {
              'name': 'Thanks again for that special advice',
              'color': '#ffa500',
            },
          ],
        },
        'Set2': {
          'options': [
            {
              'name': 'You\'re good hearted',
              'color': '#ffa500',
            },
            {
              'name': 'You\'re well-meaning',
              'color': '#ffa500',
            },
            {
              'name': 'You accept being wrong faster than I do',
              'color': '#224aa8',
            },
            {
              'name': 'You never parade how clever you are',
              'color': '#224aa8',
            },
          ],
        },
        'Set3': {
          'options': [
            {
              'name': 'You hate worthily',
              'color': '#a82222',
            },
            {
              'name': 'You standing up into the wind - oh!',
              'color': '#a82222',
            },
            {
              'name': 'With you, what you see is what you get',
              'color': '#ffa500',
            },
            {
              'name': 'You hacking through the weeds up ahead',
              'color': '#a82222',
            },
          ],
        },
        'Set4': {
          'options': [
            {
              'name': 'It\'s better when you\'re around',
              'color': '#ffa500',
            },
            {
              'name': 'You\'ve been more helpful than you realise',
              'color': '#ffa500',
            },
            {
              'name': 'Thanks for forgetting so much',
              'color': '#a82222',
            },
            {
              'name': 'I was flattered that you thought I could help you',
              'color': '#224aa8',
            },
          ],
        },
        'Set5': {
          'options': [
            {
              'name': 'You\'re not fair to yourself',
              'color': '#a82222',
            },
            {
              'name': 'If only you could see yourself through my eyes',
              'color': '#224aa8',
            },
            {
              'name': 'You\'ve already done the hardest bit',
              'color': '#ffa500',
            },
            {
              'name': 'You underestimate how much I respect you',
              'color': '#a82222',
            },
          ],
        },
      },
      'Sweetheart': {
        'Set1': {
          'options': [
            {
              'name': 'You\'re just effin mighty',
              'color': '#a82222',
            },
            {
              'name': 'If only you knew how handsome you are',
              'color': '#ffa500',
            },
            {
              'name': 'If only you knew how beautiful you really are',
              'color': '#ffa500',
            },
            {
              'name': 'I\'m glad about what our deal ignore',
              'color': '#224aa8',
            },
          ],
        },
        'Set2': {
          'options': [
            {
              'name': 'it\'s...passion',
              'color': '#a82222',
            },
            {
              'name': 'it\'s...being in the same tribe as you',
              'color': '#224aa8',
            },
            {
              'name': 'it\'s...your sense of adventure',
              'color': '#ffa500',
            },
            {
              'name': 'it\'s...you failing doing something worth trying',
              'color': '#224aa8',
            },
          ],
        },
        'Set3': {
          'options': [
            {
              'name': 'Your perspective is earned',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re just as beautiful inside',
              'color': '#ffa500',
            },
            {
              'name': 'There\'s also that time that\'s only ours',
              'color': '#ffa500',
            },
            {
              'name': 'You\'ve got it all going on',
              'color': '#a82222',
            },
          ],
        },
        'Set4': {
          'options': [
            {
              'name': 'You\'re light with your success',
              'color': '#ffa500',
            },
            {
              'name': 'You\'re at your best when you\'re most you',
              'color': '#224aa8',
            },
            {
              'name': 'You fight fear by embracing what some call danger',
              'color': '#a82222',
            },
            {
              'name': 'You\'re willing to reach as far as you can',
              'color': '#a82222',
            },
          ],
        },
        'Set5': {
          'options': [
            {
              'name': 'I like what gives you joy',
              'color': '#ffa500',
            },
            {
              'name': 'I like how fully you are yourself',
              'color': '#a82222',
            },
            {
              'name': 'When you\'re boring it\'s still you being boring',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re more fun than bursting bubble wrap',
              'color': '#ffa500',
            },
          ],

        },
      },
      'Others': {
        'Set1': {
          'options': [
            {
              'name': 'I value your...loyalty',
              'color': '#224aa8',
            },
            {
              'name': 'I value your...hopefulness',
              'color': '#ffa500',
            },
            {
              'name': 'I value your...determination',
              'color': '#a82222',
            },
            {
              'name': 'I value your...hospitality',
              'color': '#ffa500',
            },
          ],
        },
        'Set2': {
          'options': [
            {
              'name': 'You\'re striving for excellence',
              'color': '#a82222',
            },
            {
              'name': 'You\'re solution-focused',
              'color': '#a82222',
            },
            {
              'name': 'You\'re a team player',
              'color': '#224aa8',
            },
            {
              'name': 'You respond well to criticismg',
              'color': '#ffa500',
            },
          ],
        },
        'Set3': {
          'options': [
            {
              'name': 'You\'re very professional',
              'color': '#a82222',
            },
            {
              'name': 'You make considered suggestions',
              'color': '#224aa8',
            },
            {
              'name': 'Best F... every',
              'color': '#ffa500',
            },
            {
              'name': 'You\'re able to think outside the box',
              'color': '#224aa8',
            },
          ],
        },
        'Set4': {
          'options': [
            {
              'name': 'You get it',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re terrible at lying',
              'color': '#224aa8',
            },
            {
              'name': 'You\'ve got fabulous faults',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re not one of the arrogant people',
              'color': '#a82222',
            },
          ],
        },
        'Set5': {
          'options': [
            {
              'name': 'You\'re willing to speak up',
              'color': '#a82222',
            },
            {
              'name': 'You\'re willing to make unpopular decisions',
              'color': '#a82222',
            },
            {
              'name': 'You\'re a horseradish with mint sauce',
              'color': '#ffa500',
            },
            {
              'name': 'You add warmth and good humour',
              'color': '#ffa500',
            },
          ],
        },
      },
      'Also': {
        options: [
          {
            'name': 'An Extra section of Praise',
            'color': '#a82222',
          },
          {
            'name': 'What do colors Mean?',
            'color': '#ffa500',
          },
          {
            'name': 'The Color Crystal Live',
            'color': '#a82222',
          },
          {
            'name': 'How to find your color crystal tribe',
            'color': '#ffa500',
          },
        ],
      }
      ,
      'An Extra section of Praise': {
        'Set1': {
          'options': [
            {
              'name': 'You\'re a good judge',
              'color': '#a82222',
            },
            {
              'name': 'I can rely on your word',
              'color': '#ffa500',
            },
            {
              'name': 'Thanks for the grub',
              'color': '#ffa500',
            },
            {
              'name': 'Your face difficulties head-on',
              'color': '#ffa500',
            },
          ],
        },
        'Set2': {
          'options': [
            {
              'name': 'I wouldn\'t throw you out of bed for eating crisps',
              'color': '#ffa500',
            },
            {
              'name': 'You don\'t hide your light',
              'color': '#a82222',
            },
            {
              'name': 'Your presence lingers',
              'color': '#224aa8',
            },
            {
              'name': 'You\'re patient with awkward people',
              'color': '#ffa500',
            },
          ],
        },
        'Set3': {
          'options': [
            {
              'name': 'Your understanding is as is',
              'color': '#224aa8',
            },
            {
              'name': 'You brush against the sublime',
              'color': '#ffa500',
            },
            {
              'name': 'Your discernment glows',
              'color': '#a82222',
            },
            {
              'name': 'You remember your embarrassments',
              'color': '#224aa8',
            },
          ],
        },
        'Set4': {
          'options': [
            {
              'name': 'You (most) not some of the time',
              'color': '#224aa8',
            },
            {
              'name': 'I like you',
              'color': '#ffa500',
            },
            {
              'name': 'You\'re fierce clever you are',
              'color': '#a82222',
            },
            {
              'name': 'You\'re smart',
              'color': '#ffa500',
            },
          ],
        },
        'Set5': {
          'options': [
            {
              'name': 'You know how to be at peace',
              'color': '#224aa8',
            },
            {
              'name': 'You know how to build',
              'color': '#ffa500',
            },
            {
              'name': 'You know the way to Amarillo',
              'color': '#ffa500',
            },
            {
              'name': 'You know how to be wonderful',
              'color': '#ffa500',
            },
          ],
        },
      }
      ,
      selectionList: [],
    };
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
        { name: 'Friends', color: '#f8f9fab3' },
        { name: 'Family', color: '#f8f9fab3' },
        { name: 'Others', color: '#f8f9fab3' },
        { name: 'Sweetheart', color: '#f8f9fab3' },
      ], makeFinalSelection: false,
    });
  };
  handleCloseSendEmailModal = (e) => {
    this.setState({ sendEmailModal: false });
  };
  handleShowSendEmailModal = (e) => {
    this.setState({ sendEmailModal: true });
  };
  captureImage = () => {
    html2canvas(document.querySelector('#MainPageId'))
      .then((canvas) => {
        setTimeout(() => {
        }, 10);
        var base64URL = canvas.toDataURL('image/jpeg')
          .replace('image/jpeg', 'image/octet-stream');
        console.log(base64URL, base64URL);
        setTimeout(() => {
        }, 10);
        this.setState({ image: base64URL });
      });
  };
  toggleSendEmailModal = async () => {

    await this.setState({ makeFinalSelection: false, sendEmailModal: !this.state.sendEmailModal });
    await this.captureImage();
  };
  toggleColorTribeModal = () => {
    this.setState({ colorTribeModal: !this.state.colorTribeModal });
  };
  handleSubmitSendMail = (e) => {
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
    var config = {
      method: 'post',
      url: 'https://thecolorcrystal.com/api/post/game',
      data: data,
    };
    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        this.setState({
          url: response.data.url,
          shareButtons: true,
        });
        alert('Your Result is sent to  your friend thanks for playing Color Crystal.');
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
      .catch((error) => {
        console.log(error);
        alert('An error occurred, Please try again', error);
      });

  };

  componentDidMount() {
    if (localStorage.getItem('selections') !== null) {
      this.setState({showMakeFinalSelection:true})
    }
    console.log('this.props.match.params',this.props.match.params.pathParam)
    if(this.props.match.params.hasOwnProperty('pathParam')){
      if (this.props.match.params.pathParam==='also'){
        let { cat, subcat, data } = this.state;
        let text ='Also';
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
          <div className='min'>
            {cat === 'Main' && subcat === 'none' ? data.map((obj, index) => {
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
                  <button className='button hover15'
                          key={obj.name}
                          style={{ background: obj.color, color: '#000', border: '4px dotted #fff' }}
                          onClick={this.onButtonClickHandler}
                  >{obj.name}</button>
                </div>);
            }) : data.map((obj, index) => {
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
                  <button className='button hover15'
                          key={obj.name}
                          style={{ background: obj.color }}
                          onClick={(e) => {
                            let { cat, subcat } = this.state;
                            if (e.target.innerText === 'An Extra section of Praise' && cat === 'Also') {
                              this.setState({
                                option: { name: 'An Extra section of Praise', color: 'red' },
                                cat: 'An Extra section of Praise',
                              });
                              this.setNextSet('Set1', { name: 'NA', color: 'white' }, 'An Extra section of Praise');
                            } else if (e.target.innerText === 'How to find your color crystal tribe' && cat === 'Also') {
                              this.props.history.push('/find-tribe');
                            } else if (e.target.innerText === 'What do colors Mean?' && cat === 'Also') {
                              this.props.history.push('/color-mean');
                            } else if (e.target.innerText === 'The Color Crystal Live' && cat === 'Also') {
                              if (localStorage.getItem('tribe') !== null) {
                                this.props.history.push('/live');
                              } else {
                                alert('Please select your tribe first.');
                              }
                            } else {
                              let selectedOption = this.state[cat][subcat].options.filter((obj) => {
                                return obj.name === e.target.innerText;
                              });
                              this.setState({ option: selectedOption[0] });
                              console.log('state', this.state);
                            }
                          }}
                  >{obj.name}</button>
                </div>);
            })}
            {this.state.option !== null ?
              <div className='button five' style={{
                border: '1px solid #000',
                background: this.state.option.color,
              }}>
                {this.state.option.name}
              </div> : <div className='button five' style={{
                border: '4px dotted #fff',
                background: 'rgb(168 34 34 / 5%)',
              }}>
              </div>}
          </div>
          <div className='finalList row float-right'>
            {this.state.makeFinalSelection === true ?

              (
                <>
                  <h3 style={{ color: '#fff' }}>Select final four. </h3>
                  <div className='scroll-wrapper'>
                    <div className='scroll-body'>
                      {this.state.selectionList.map((o) => {
                        return (<div className='scroll-body-item'
                        >
                          <div className='scroll-content' style={{ background: o.color }}
                               onClick={async (e) => {
                                 console.log(e.target.innerText);
                                 let { data, selectionList } = this.state;
                                 let selectOption = null;
                                 for (let j = 0; j < selectionList.length; j++) {
                                   if (selectionList[j].name == e.target.innerText) {
                                     if (data.some((obj) => {
                                       console.log('object', obj);
                                       return obj.name === e.target.innerText;
                                     })) {
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
                                   if (data[0].name !== ''
                                     && data[1].name !== ''
                                     && data[2].name !== ''
                                     && data[3].name !== ''
                                   ) {
                                     let finalColor = mix_hexes(data[0].color, data[1].color, data[2].color, data[3].color);
                                     console.log('FInalColor', finalColor);
                                     if (localStorage.getItem('finalColor') !== null) {
                                       let finalColorObj = JSON.parse(localStorage.getItem('finalColor'));
                                       finalColorObj = { name: 'Your Color is : ', color: finalColor };
                                       localStorage.setItem('finalColor', JSON.stringify(finalColorObj));
                                     } else {
                                       localStorage.setItem('finalColor', JSON.stringify({
                                         name: 'Your Color is : ',
                                         color: finalColor,
                                       }));
                                     }
                                     this.setState({
                                       option: { name: 'Your Color is : ', color: finalColor },
                                       sendBtnVisibility: true,
                                     });
                                   }
                                 }
                               }
                               }
                          >{o.name}</div>
                        </div>);
                      })}
                    </div>
                  </div>
                </>) : ''
            }
          </div>
          <div className='select_btn'>
            {this.state.cat === 'Main' ? <button className='btn back' style={{ background: '#224aa8' }}
                                                 onClick={this.onAlsoButtonClickHandler}>Also</button> : ''}
            {this.state.cat === 'Main' || (this.state.cat==='Also' && this.state.subcat==='Set1') ?'':
              <button className='btn back' style={{ background: '#224aa8' }}
                      onClick={this.backButtonHandler}>Back</button> }
            {this.state.cat !== 'Main' ?
              <button className='btn final' style={{ background: 'green' }} onClick={(e) => {
                if (localStorage.getItem('selections') !== null) {
                  let selections = JSON.parse(localStorage.getItem('selections'));
                  const selectionSet = new Set(selections);
                  selections = Array.from(selectionSet);
                  // const unique = [...new Set(selections.map(item => { return {name:item.name,color:item.color}}))];
                  const key = 'name';
                  const arrayUniqueByKey = [...new Map(selections.map(item =>
                    [item[key], item])).values()];
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
                    alert('At-least four praises should be in the bucket');
                  }
                }
                else{
                  alert('At-least four praises should be in the bucket');
                }
              }}>Make Final Selection
              </button> : ''}
            {this.state.cat === 'Also' && this.state.subcat === 'Set1'?'':
              <button className='btn next' style={{background: '#224aa8'}} onClick={this.nextButtonHandler}>Next</button>
            }
            {this.state.cat !== 'Main' ?
              <button className='btn return' style={{ background: 'orange' }}
                      onClick={this.returnToHomeButtonHandler}>Return to
                Home</button>
              : ''}
            {this.state.sendBtnVisibility ?
              <button className='btn shareBtn' style={{ background: 'orange' }}
                      onClick={this.toggleSendEmailModal}>
                Share Result</button>
              : ''}
            {this.state.cat==='An Extra section of Praise' && this.state.sendBtnVisibility===false?<button className='btn shareBtn' style={{ background: 'orange' }}
            onClick={this.onAlsoButtonClickHandler}
            >Also</button>:''}
            {this.state.cat === 'Main' ?
              <button className='btn shareBtn' style={{
                position: 'absolute',
                background: '#f8f9fab3',
                right: '-29%',
                bottom: '-100%',
                color: '#000',
                fontWeight: 'bold',
                height: '60px',
                width: '145px',
              }}
                      onClick={this.toggleColorTribeModal}>
                Help</button>
              : ''}

          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Modal isOpen={this.state.sendEmailModal} toggle={this.toggleSendEmailModal} className='modal-lg'>
                <ModalHeader toggle={this.toggleSendEmailModal}>Share with friend via Email:</ModalHeader>
                <ModalBody>
                  <form onSubmit={this.handleSubmitSendMail}>
                    <div className='row'>
                      <div className='col-6'>
                        <div className='form-group'>
                          <input type='text' className='form-control' id='from' name='from_name'
                                 onChange={(e) => {
                                   let { emailForm } = this.state;
                                   emailForm.from_name = e.target.value;
                                   this.setState({ emailForm });
                                   console.log('state', this.state);
                                 }}
                                 placeholder='From Name' />
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='form-group'>
                          <input type='email' className='form-control' id='from' name='from'
                                 onChange={(e) => {
                                   let { emailForm } = this.state;
                                   emailForm.from = e.target.value;
                                   this.setState({ emailForm });
                                   console.log('state', this.state);
                                 }}
                                 placeholder='Your email' />
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='form-group'>
                          <input type='text' className='form-control' id='to' name='to_name'
                                 onChange={(e) => {
                                   let { emailForm } = this.state;
                                   emailForm.to_name = e.target.value;
                                   this.setState({ emailForm });
                                   console.log('state', this.state);
                                 }}
                                 placeholder='For Name' />
                        </div>
                      </div>
                      <div className='col-6'>
                        <div className='form-group'>
                          <input type='email' className='form-control' id='to' name='to'
                                 onChange={(e) => {
                                   let { emailForm } = this.state;
                                   emailForm.to = e.target.value;
                                   this.setState({ emailForm });
                                   console.log('state', this.state);
                                 }}
                                 placeholder='Friend Email' />
                        </div>
                      </div>
                      <div className='col-3'>
                        <label htmlFor='exampleInputEmail1'>Your Result Color:</label>
                      </div>
                      <div className='col-8'>
                        <div className='form-group'>
                          <input type='color'
                                 style={{ padding: '0 !important' }}
                                 className='form-control' id='color' name='color'
                                 readOnly={true}
                                 value={this.state.option !== null ? this.state.option.color : 'red'}
                          />
                        </div>
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col-6'>
                        <Button color='primary' type='submit'>Send Email</Button>
                      </div>
                      <div className='col-6'>
                        {this.state.shareButtons === true ? <WhatsappShareButton url={this.state.url}>
                          <WhatsappIcon size={32} round={true} />
                        </WhatsappShareButton> : ''}
                        {this.state.shareButtons === true ? <FacebookShareButton url={this.state.url}>
                          <FacebookIcon size={32} round={true} />
                        </FacebookShareButton> : ''}
                      </div>
                    </div>
                  </form>
                </ModalBody>
                <ModalFooter>
                  <Button color='secondary' onClick={this.handleCloseSendEmailModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-12'>
              <Modal isOpen={this.state.colorTribeModal} toggle={this.toggleColorTribeModal} className='modal-lg'>
                <ModalHeader toggle={this.toggleColorTribeModal}>How to play?</ModalHeader>
                <ModalBody>
                  <h3>In a nutshell:</h3>
                  <ul>
                    <li>
                      Choose as many crystals of praise as you wish.
                    </li>
                    <li>
                      Select your final four and send!
                    </li>
                    <li>
                      Click on ‘also’ to find out how close you are to others.
                    </li>
                  </ul>
                  <p>
                    Free, Friendly and hopefully Fun
                  </p>
                </ModalBody>
                <ModalFooter>
                  <Button color='secondary' onClick={this.toggleColorTribeModal}>Cancel</Button>
                </ModalFooter>
              </Modal>
            </div>
          </div>
        </AppWrapper>
      </div>
    );
  }
};

export default MainPage;
