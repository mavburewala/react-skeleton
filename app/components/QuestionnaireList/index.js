import React from 'react';
import bootstrap from 'utils/grid.bootstrap.css';

import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import FlatButton from 'material-ui/FlatButton';

export default class QuestionnaireList extends React.Component {

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
        <div style={{marginTop: 20, display: 'flex', flexDirection: 'row', flex: 0.9,}}>
        <Table>
         <TableHeader displayRowCheckbox={false}>
           <TableRow>
             <TableHeaderColumn>Customer</TableHeaderColumn>
             <TableHeaderColumn>Section Count</TableHeaderColumn>
             <TableHeaderColumn>Sub Section Count</TableHeaderColumn>
             <TableHeaderColumn>Questions Count</TableHeaderColumn>
             <TableHeaderColumn>Remark Count</TableHeaderColumn>
             <TableHeaderColumn>ToDo count</TableHeaderColumn>
           </TableRow>
         </TableHeader>
         <TableBody displayRowCheckbox={false}>
            {this.props.questionnaireData.map((questionnaire, index) => {
                console.log(questionnaire, "re");
                return <TableRow key={"questionnaire_"+index}>
                  <TableRowColumn>{questionnaire.customerName}</TableRowColumn>
                  <TableRowColumn>{questionnaire.sectionsCount}</TableRowColumn>
                  <TableRowColumn>{questionnaire.subSectionsCount}</TableRowColumn>
                  <TableRowColumn>{questionnaire.questionsCount}</TableRowColumn>
                  <TableRowColumn>{questionnaire.remarksCount}</TableRowColumn>
                  <TableRowColumn>{questionnaire.toDoCount}</TableRowColumn>
                </TableRow>
              })
            }
         </TableBody>
        </Table>
        </div>
        <div style={{display: 'flex'}}>
          <div style={{flex: 0.1, marginTop: 50, right: 200, position: 'absolute'}}>
            <FlatButton label="New Questionnaire" onTouchTap={this.props.addNewQuestionnaire}/>
          </div>
        </div>
      </div>
    );
  }
}
