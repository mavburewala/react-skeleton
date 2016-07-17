/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push , goBack} from 'react-router-redux';

import { createStructuredSelector } from 'reselect';


import {
  selectSectionData,
} from './selectors';

import { setCurrentQuestionId, setMainSection, setSubSection } from './actions';

import {questionUpdate, approveUpdate} from '../App/actions';

import Section from 'components/Section';

//import styles from './styles.css';

export class SectionContainer extends React.Component {


  componentDidMount() {
    this.props.onSelectQuestionnaireId(this.props.params.questionnaireID);
    this.props.onSelectMainSection(this.props.params.mainSectionName);
    this.props.onSelectSubSection(this.props.params.subSectionName);
  }

  componentWillUpdate(nextProps) {
    this.props.onSelectQuestionnaireId(nextProps.params? nextProps.params.questionnaireID: this.props.params.questionnaireID);
    this.props.onSelectMainSection(nextProps.params? nextProps.params.mainSectionName: this.props.params.mainSectionName);
    this.props.onSelectSubSection(nextProps.params? nextProps.params.subSectionName: this.props.params.subSectionName);
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
        onQuestionUpdate= {this.props.onQuestionUpdate}
        onApproveUpdate= {this.props.onApproveUpdate}
        openRoute = {this.openRoute}
        goBack = {this.props.goBack}
      />
    );
  }
}

SectionContainer.propTypes = {
  changeRoute: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    goBack: () => dispatch(goBack()),

    onSelectQuestionnaireId: (questionnaireId) => {
      dispatch(setCurrentQuestionId(questionnaireId));
    },
    onSelectMainSection: (mainSection) => {
      dispatch(setMainSection(mainSection));
    },
    onSelectSubSection: (subSection) => {
      dispatch(setSubSection(subSection));
    },

    onQuestionUpdate: (questionnaireId, questionnaireIndex, questionId, answer) =>{
      dispatch(questionUpdate(questionnaireId, questionnaireIndex, questionId, answer));
    },

    onApproveUpdate:(questionnaireId, questionnaireIndex, questionId, answer) =>{
      dispatch(approveUpdate(questionnaireId, questionnaireIndex, questionId, answer));
    },
    dispatch,
  };
}


const mapStateToProps = createStructuredSelector({
  currentSection: selectSectionData(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(SectionContainer);
