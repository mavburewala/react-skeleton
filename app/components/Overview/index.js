import React from 'react';
import bootstrap from 'utils/grid.bootstrap.css';
import FlatButton from 'material-ui/FlatButton';

export default class Overview extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{padding: 10, marginTop: 20,  flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
          <div style={{marginLeft: 10 }}>Questionaire: {this.props.currentQuestionnaire? this.props.currentQuestionnaire.id: ''}</div>
        </div>
        <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
          <div style={{marginLeft: 10, padding: 15, flex: 0.9}}>
            This Questionaire has {this.props.currentQuestionnaire.totalQuestionsCount} questions. {this.props.currentQuestionnaire.totalQuestionsCount - this.props.currentQuestionnaire.completeQuestionsCount} of questions are unanswered.
            Questions are spread over {this.props.currentQuestionnaire.mainSectionsCount} main sections and {this.props.currentQuestionnaire.subSectionsCount} subsections. There are {this.props.currentQuestionnaire.remarksCount} remarks and {this.props.currentQuestionnaire.approvedQuestionsCount} out of {this.props.currentQuestionnaire.totalQuestionsCount} questions have been approved
          </div>
          <div style={{marginLeft: 10, marginTop: 15, flex: 0.1}}>
            {Math.round((this.props.currentQuestionnaire.completeQuestionsCount/this.props.currentQuestionnaire.totalQuestionsCount)*100)}%
          </div>
        </div>
        <div style={{marginTop: 40, height: 400,  flex: 0.9, justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap'}}>
          {this.props.currentQuestionnaire.sectionsData.map((section, index) => {
            return <div onTouchTap={()=>this.props.openRoute(`/overview/${this.props.currentQuestionnaire.id}/section/${section.name}/${section.subSection}`)} key={'section_'+index} style={{width: 550, marginTop: 20, marginRight: 10, height: 200, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
              <div style={{display: 'flex'}}>
                <div style={{flex: 0.9, display: 'flex', flexDirection: 'column' , padding: 20}}>
                  <h1 style={{alignSelf: 'center'}}>{section.name}</h1>
                  <div style={{alignSelf: 'center'}}>{section.totalQuestionsCount - section.completeQuestionsCount}/{section.totalQuestionsCount} questions unanswered</div>
                  <div style={{alignSelf: 'center'}}>{section.remarksCount} unhandled remarks</div>
                </div>
                <div style={{flex: 0.1, marginTop: 10, marginRight: 0}}>
                  <div>{Math.round((section.completeQuestionsCount/section.totalQuestionsCount)*100)} %</div>
                </div>
              </div>
            </div>
            })
          }
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 0.5, margin: 50, left: 100, position: 'absolute'}}>
            <FlatButton label="Go Back" onTouchTap={()=>this.props.goBack()}/>
          </div>
        </div>
      </div>
    );
  }
}
