/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { connect } from 'react-redux';
import { push, goBack } from 'react-router-redux';

import { createStructuredSelector } from 'reselect';


import {
  selectCurrentQuestionnaireData,
} from './selectors';

import { setCurrentQuestionId } from './actions';

import Overview from 'components/Overview';

//import styles from './styles.css';

export class OverviewContainer extends React.Component {

  componentDidMount() {
    this.props.onSelectQuestionnaireId(this.props.params.questionnaireID);
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
      <div>
        <Overview
          currentQuestionnaire={this.props.currentQuestionnaire}
          openRoute = {this.openRoute}
          goBack = {this.props.goBack}
        />
      </div>

    );
  }
}

OverviewContainer.propTypes = {
  changeRoute: React.PropTypes.func,
  onSelectQuestionnaireId: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    goBack: () => dispatch(goBack()),
    onSelectQuestionnaireId: (questionnaireId) => {
      dispatch(setCurrentQuestionId(questionnaireId));
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  currentQuestionnaire: selectCurrentQuestionnaireData(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
