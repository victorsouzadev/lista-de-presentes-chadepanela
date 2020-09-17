import React from 'react'
import { Card, Icon } from 'semantic-ui-react'

import ButtonInteresse from '../Button/Button'


const CardExampleGroups = (props) => (



  <Card style={{ margin: '0px 20px 0px 20px' }}>

    <Card.Content>
      <Card.Header>{props.name}</Card.Header>

      <Card.Description textAlign='center'>
        <ButtonInteresse

          title={props.name}
          src={props.path}
          count={props.quantidade} />

      </Card.Description>
    </Card.Content>
    <Card.Content>
      <Icon name='coffee' />
  
      {" - " + props.quantidade + " pessoas interessadas"}

    </Card.Content>
  </Card>

)

export default CardExampleGroups
