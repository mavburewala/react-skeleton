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
  selectCurrentQuestionnaireData,
} from './selectors';

import { setCurrentQuestionId } from './actions';

import RepoListItem from 'containers/RepoListItem';
import Button from 'components/Button';
import H2 from 'components/H2';
import List from 'components/List';
import ListItem from 'components/ListItem';
import Overview from 'components/Overview';
import LoadingIndicator from 'components/LoadingIndicator';

//import styles from './styles.css';

export class OverviewContainer extends React.Component {

  componentDidMount() {
    console.log("Params: ", this.props.params.questionnaireID);
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
    } else if (this.props.repos !== false) {
      mainContent = (<List items={this.props.repos} component={RepoListItem} />);
    }

    return (
      <div>
        <Overview currentQuestionnaire={this.props.currentQuestionnaire}></Overview>
      </div>

    );
  }
}

OverviewContainer.propTypes = {
  changeRoute: React.PropTypes.func,
  loading: React.PropTypes.bool,
  error: React.PropTypes.oneOfType([
    React.PropTypes.object,
    React.PropTypes.bool,
  ]),
  repos: React.PropTypes.oneOfType([
    React.PropTypes.array,
    React.PropTypes.bool,
  ]),
  onSubmitForm: React.PropTypes.func,
  username: React.PropTypes.string,
  onChangeUsername: React.PropTypes.func,
};

function mapDispatchToProps(dispatch) {
  return {
    //currentQuestionnaire: (id) => selectCurrentQuestionnaire(id),
    changeRoute: (url) => dispatch(push(url)),
    onSelectQuestionnaireId: (questionnaireId) => {
      dispatch(setCurrentQuestionId(questionnaireId));
    },

    dispatch,
  };
}

const mapStateToProps = createStructuredSelector({
  currentQuestionnaire: selectCurrentQuestionnaireData(),

  //loading: selectLoading(),
  //error: selectError(),
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(OverviewContainer);
