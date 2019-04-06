import React from 'react';

class Editable extends React.Component {
  constructor(props){
    super(props);
    this.state={
      edited:false,
      edit:false,
      valor: props.valor
    }
  }

  render() {
    return (this.state.edit
      ? <input 
        onKeyPress={e => e.key=="Enter" && this.setState({edit:false})} 
        onBlur={() => {
          this.setState({edit:false});
          this.props.changer(this.state.valor);
        }} 
        onChange={e=>this.setState({valor:e.target.value})} 
        value={this.state.valor}
      />
      : <div 
        onClick={()=>this.setState({edit:true})}
        className={this.props.className}
      >
        {this.state.valor}
      </div>
    );
  }
}

export default Editable;