import React, { PureComponent } from 'react'

 class Purecomponent extends PureComponent {
  render() {
    console.log("pure")
    return (
      <div>PureComponent
        {this.props.name}
      </div>
    )
  }
}

export default Purecomponent