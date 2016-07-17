/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';


import {
  selectSectionData,
} from './selectors';

import { setCurrentQuestionId, setMainSection, setSubSection } from './actions';

import Section from 'components/Section';

//import styles from './styles.css';

export class SectionContainer extends React.Component {


  componentDidMount() {
    this.props.onSelectQuestionnaireId(this.props.params.questionnaireID);
    this.props.onSelectMainSection(this.props.params.mainSectionName);
    this.props.onSelectSubSection(this.props.params.subSectionName);
  }
  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  render() {
    return (
      <Section
        currentSection={this.props.currentSection}
      >
      </Section>
    );
  }
}

SectionContainer.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    onSelectQuestionnaireId: (questionnaireId) => {
      dispatch(setCurrentQuestionId(questionnaireId));
    },
    onSelectMainSection: (mainSection) => {
      dispatch(setMainSection(mainSection));
    },
    onSelectSubSection: (subSection) => {
      dispatch(setSubSection(subSection));
    },
    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  currentSection: selectSectionData(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
