import React from 'react'
import { Image, List } from 'semantic-ui-react'

const EventAttendees = ({attendee}) => {
   return (
      <List.Item>
         <Image circular size="mini" src={attendee.photoURL}/>
         <p>{attendee.name}</p>
      </List.Item>
   )
}

export default EventAttendees
