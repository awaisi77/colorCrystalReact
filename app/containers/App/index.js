/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/FeaturePage/Loadable';
import GlobalStyle from '../../global-styles';
import MainPage from '../MainPage';
import Tribe from '../MainPage/Tribe';
import ColorMean from '../MainPage/ColorMean';
import LiveColor from '../MainPage/LiveColor';

export default function App() {
  return (
    <>
   {/*   <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
      >
        <meta name="description" content="A React.js Boilerplate application" />
      </Helmet>
      <Header />*/}
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route path="/features" exact component={FeaturePage} />
        <Route path="/find-tribe" exact component={Tribe} />
        <Route path="/main/:pathParam?" exact component={MainPage} />
        <Route path="/color-mean" exact component={ColorMean} />
        <Route path="/live" exact component={LiveColor} />

        {/* <Route path="" component={NotFoundPage} />*/}
      </Switch>
      <GlobalStyle />
    </>
  );
}
