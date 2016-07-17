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
  selectQuestionnaireList,
  selectLoading,
  selectError,
} from 'containers/App/selectors';

import {
  selectQuestionnaireTable,
} from './selectors';

import { generateTestQuestionnaire } from '../App/actions';

import QuestionnaireList from 'components/QuestionnaireList';


export class Home extends React.Component {
  /**
   * when initial state username is not null, submit the form to load repos
   */

  /**
   * Changes the route
   *
   * @param  {string} route The route we want to go to
   */
  openRoute = (route) => {
    this.props.changeRoute(route);
  };

  /**
   * Changed route to '/features'
   */
  openOverview = (questionnaireID) => {
    this.openRoute(`/overview/${questionnaireID}`);
  };

  render() {

    return (
      <div>
        <QuestionnaireList
          questionnaireData={this.props.questionnaireTable}
          addNewQuestionnaire={this.props.addNewQuestionnaire}
          openOverview= {this.openOverview}
        >
        </QuestionnaireList>
      </div>
    );
  }
}

Home.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  addNewQuestionnaire: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    changeRoute: (url) => dispatch(push(url)),
    addNewQuestionnaire: () => {
      dispatch(generateTestQuestionnaire());
    },
    dispatch,
  };
}

const mapStateToProps =  state => createStructuredSelector({
  questionaireList: selectQuestionnaireList(),
  questionnaireTable: selectQuestionnaireTable(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Home);
