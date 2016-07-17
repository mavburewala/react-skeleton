import React from 'react';
import bootstrap from 'utils/grid.bootstrap.css';
import LinearProgress from 'material-ui/LinearProgress';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';


export default class Section extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
      completed: 0,
    };
  }

  componentDidMount() {
     this.timer = setTimeout(() => this.progress(5), 1000);
   }

  componentWillUnmount() {
     clearTimeout(this.timer);
  }

  progress(completed) {
    if (completed > 100) {
      this.setState({completed: 100});
    } else {
      this.setState({completed});
      const diff = Math.random() * 10;
      this.timer = setTimeout(() => this.progress(completed + diff), 1000);
    }
  }

  handleChange = (event, index, value) => this.setState({value});

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column'}}>
        <div style={{padding: 10, marginTop: 20,  flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
          <div style={{marginLeft: 10 }}>Questionaire: {this.props.currentSection?this.props.currentSection.questionnaireId:''}</div>
        </div>
        <div style={{marginTop: 20, display: 'flex',  flexDirection: 'row', flex: 0.9, }}>
          <h2>{this.props.currentSection? this.props.currentSection.mainSectionName:''} - {this.props.currentSection?this.props.currentSection.subSectionName:''}</h2>
        </div>
        <div style={{marginTop: 10, display: 'flex', flexDirection: 'row', flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
          <div style={{marginLeft: 10, padding: 15, flex: 0.9}}>
            This Section has {this.props.currentSection.questionsCount} questions. {this.props.currentSection.questionsCount - this.props.currentSection.completedQuestionsCount} of these questions are unanswered.
            The questions are spread over {this.props.currentSection.subSectionsCount} sub-sections. There are {this.props.currentSection.remarks} remarks and {this.props.currentSection.approvedQuestionsCount} out of 9 questions have been approved
          </div>
          <div style={{marginLeft: 10, marginTop: 15, flex: 0.1}}>
            {(this.props.currentSection.completedQuestionsCount/this.props.currentSection.questionsCount)*100}%
          </div>
        </div>
        <div style={{marginTop: 20, display: 'flex',  flexDirection: 'row', flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
          <LinearProgress style={{height: 5, alignSelf: 'center'}} mode="determinate" value={this.state.completed} />
        </div>
        {this.props.currentSection.questions.map((question, index) => {
          return  <div key={'question_'+index} style={{marginTop: 40, display: 'flex', flexDirection: 'column', flex: 0.9}} >
                    <div style={{display: 'flex', flexDirection: 'row', flex: 0.9}}>
                      <div style={{marginLeft: 10,  flex: 0.9}}>
                        <h3>{question.sQuestion}</h3>
                      </div>
                      <div style={{marginLeft: 10, marginTop: 25, flex: 0.1, display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                        Remarks(0)
                        <Toggle/>
                      </div>
                    </div>
                    <div style={{ padding: 10, display: 'flex', flexDirection: 'column',border: '2px solid black', flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
                      <TextField
                        hintText="Answer"
                        fullWidth= {true}
                        multiLine={true}
                        rows={2}
                        rowsMax={4}
                      />
                    </div>
                  </div>
          })
        }
        <div style={{display: 'flex'}}>
          <div style={{flex: 0.1, margin: 20, right: 150, position: 'absolute'}}>
            <FlatButton label="Next Sub-Section" onTouchTap={()=>this.props.openRoute(`/overview/${this.props.currentSection.questionnaireId}/section/${this.props.currentSection.mainSectionName}/${this.props.currentSection.nextSubSection}`)}/>
          </div>
        </div>
      </div>
    );
  }
}
