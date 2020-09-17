import React, { Component } from 'react'
import { Button, Image ,Grid} from 'semantic-ui-react'
import firebase from '../../Firebase'
import Presente from '../../assets/presente.svg'
import PresenteWhite from '../../assets/presente white.svg'

class ButtonToggle extends Component {
  constructor(){
    super()
     this.state = {
       ativo:false
       
     }
    
     
  }


  handleClick = (e) =>{
    this.setState((prevState) => ({ active: !prevState.active }))
    this.setState({ativo: !this.state.ativo})
    if(!this.state.active){
      firebase.database().ref(this.props.src+'/1').set(
       
        this.props.count+1
        
      );
    }else{
      firebase.database().ref(this.props.src+'/1').set(
        this.props.count-1
      );
    }
    
  }
    


  render() {
    const { active } = this.state

    return (
      <div>
       <Button style={{ margin: '0em 2m 0em 2em',background:'rgba(0,0,0,0)' }} toggle color={active ? 'red' : null} active={active} onClick={this.handleClick}>
        <Grid centered>
          <Grid.Column verticalAlign='middle'>
          <Image src={active?PresenteWhite:Presente} style={{height:'20px',width:'20px'}}></Image> - Possível presente 
          </Grid.Column>
        
        </Grid>
       
        </Button> 
        </div>
    )
  }
}

export default ButtonToggle