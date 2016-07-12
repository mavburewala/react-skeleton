import React from 'react';
import bootstrap from 'utils/grid.bootstrap.css';

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
          <div style={{marginLeft: 10 }}>Questionaire List</div>
        </div>
        <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', flex: 0.9, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)',}}>
          <div style={{marginLeft: 10, padding: 15, flex: 0.9}}>
            This Questionaire has 17 questions. 17 of questions are unanswered
            The Questionaire are spread over 3 main sections and 4 subsections. There are 0
            remarks and 0 out of 17 questions have been approved
          </div>
          <div style={{marginLeft: 10, marginTop: 15, flex: 0.1}}>
            0.1%
          </div>
        </div>
        <div style={{marginTop: 40, height: 400,  flex: 0.9, justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap'}}>
          <div style={{width: 550, marginTop: 20, marginRight: 10, height: 200, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div style={{display: 'flex'}}>
              <div style={{flex: 0.9, display: 'flex', flexDirection: 'column' , padding: 20}}>
                <h1 style={{alignSelf: 'center'}}>Private</h1>
                <div style={{alignSelf: 'center'}}>9/9 questions unanswered</div>
                <div style={{alignSelf: 'center'}}>0 unhandled remarks</div>
              </div>
              <div style={{flex: 0.1, marginTop: 10, marginRight: 0}}>
                <div>0 %</div>
              </div>
            </div>
          </div>
            <div style={{width: 550,  marginTop: 20,marginRight: 10,height: 200, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div style={{display: 'flex'}}>
              <div style={{flex: 0.9, display: 'flex', flexDirection: 'column' , padding: 20}}>
                <h1 style={{alignSelf: 'center'}}>School</h1>
                <div style={{alignSelf: 'center'}}>4/4 questions unanswered</div>
                <div style={{alignSelf: 'center'}}>0 unhandled remarks</div>
              </div>
              <div style={{flex: 0.1, marginTop: 10, marginRight: 0}}>
                <div>0 %</div>
              </div>
            </div>
          </div>
          <div style={{width: 550,  marginTop: 20,marginRight: 10,height: 200, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div style={{display: 'flex'}}>
              <div style={{flex: 0.9, display: 'flex', flexDirection: 'column' , padding: 20}}>
                <h1 style={{alignSelf: 'center'}}>Work</h1>
                <div style={{alignSelf: 'center'}}>4/4 questions unanswered</div>
                <div style={{alignSelf: 'center'}}>0 unhandled remarks</div>
              </div>
              <div style={{flex: 0.1, marginTop: 10, marginRight: 0}}>
                <div>0 %</div>
              </div>
            </div>
          </div>
          <div style={{width: 550,  marginTop: 20, marginRight: 10, height: 200, boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)'}}>
            <div style={{display: 'flex'}}>
              <div style={{flex: 0.9, display: 'flex', flexDirection: 'column' , padding: 20}}>
                <h1 style={{alignSelf: 'center'}}>Holiday</h1>
                <div style={{alignSelf: 'center'}}>4/4 questions unanswered</div>
                <div style={{alignSelf: 'center'}}>0 unhandled remarks</div>
              </div>
              <div style={{flex: 0.1, marginTop: 10, marginRight: 0}}>
                <div>0 %</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
