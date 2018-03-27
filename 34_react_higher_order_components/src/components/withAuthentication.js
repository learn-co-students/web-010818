import React from 'react';

export default function withAuthentication(ComponentWePassedIn) {

  return (class extends React.Component {
  
      constructor(props){
        super(props);
        console.log("withAuthentication", props);
      }
  
  
      componentDidMount() {
        this._checkAndRedirect();
      }
  
      componentDidUpdate() {
        this._checkAndRedirect();
      }
  
      _checkAndRedirect(){
        if (!localStorage.getItem("user"))
          this.props.history.push("/login")
      }
  
      render() {
        return <ComponentWePassedIn {...this.props} />
      }
    })



};