import React from 'react'
import players from '../players'
import Player from './Player'

const PlayList = () => {
    return (
        <div style={{display: "flex", justifyContent: "space-evenly", margin: 16}}>
          {players.map(player => {
            return <Player 
            name={player.name} 
            team={player.team}
            nationality={player.nationality}
             jerseyNumber={player.jerseyNumber}
            age={player.age}
            imageUrl={player.imageUrl} />
          })}
         
        </div>
      );
}