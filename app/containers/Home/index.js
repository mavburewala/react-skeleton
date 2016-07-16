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

import RepoListItem from 'containers/RepoListItem';
import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import QuestionnaireList from 'components/QuestionnaireList';
import LoadingIndicator from 'components/LoadingIndicator';

//import styles from './styles.css';

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
  openFeaturesPage = () => {
    this.openRoute('/features');
  };

  render() {
    let mainContent = null;

    // Show a loading indicator when we're loading
    if (this.props.loading) {
      mainContent = (<List component={LoadingIndicator} />);

    // Show an error if there is one
    } else if (this.props.error !== false) {
      const ErrorComponent = () => (
        <ListItem item={'Something went wrong, please try again!'} />
      );
      mainContent = (<List component={ErrorComponent} />);

    // If we're not loading, don't have an error and there are repos, show the repos
    } else if (this.props.questionaireList !== false) {
      //mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    }

    return (
      <div>
        <QuestionnaireList questionnaireData={this.props.questionnaireTable} addNewQuestionnaire={this.props.addNewQuestionnaire}></QuestionnaireList>
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
  // questionaireList: React.PropTypes.oneOfType([
  //   React.PropTypes.object,
  //   React.PropTypes.bool,
  // ]),
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

const mapStateToProps = createStructuredSelector({
  questionaireList: selectQuestionnaireList(),
  questionnaireTable: selectQuestionnaireTable(),
  loading: selectLoading(),
  error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(Home);
