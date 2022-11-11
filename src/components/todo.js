import React from 'react'

class Todo extends React.Component {
  render () {
    console.log('Todo', this.props);
    let panelText = this.props.editing === this.props.index ? "panel-text editing" : "panel-text"
    return (
      <div className="panel-wrapper">
        <div className="panel panel-default width-80">
          <div className="panel-body">
            {this.props.editing === this.props.index ? (
              <form onSubmit={() => this.props.submitEdit(this.props.index)}>
                <input
                  value={this.props.dataToEdit} onChange={this.props.handleEdit}></input>
              </form>
            ) : (
              <span
                className={panelText}
                onClick={() => this.props.toggleEdit(this.props.index)}>
                {this.props.data}
              </span>
            )}
            <span
              className="glyphicon glyphicon-trash pull-right"
              onClick={() => this.props.onDelete(this.props.index)}
              />
          </div>
        </div>
        <div className="chevrons pull-right">
          <span className="glyphicon glyphicon-chevron-up" onClick={() => this.props.orderUp(this.props.index)}> </span>
          <span className="glyphicon glyphicon-chevron-down" onClick={() => this.props.orderDown(this.props.index)}> </span>
        </div>
      </div>
    )
  }
}

export default Todo;
