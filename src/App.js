
import React from 'react';
import arrPlayers from './players'; // Import the array from the players.js file


function App() {
  return (
    <section className='w-1140px'>
      <h1>Top Soccer Players</h1>
      <table className='data-table'> 
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Trophies</th>
            <th>Club</th>
            <th>Nationality</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {arrPlayers.map((player) => (
            <tr key={player.id}>
              <td>{player.id}</td>
              <td>{`${player.firstName} ${player.lastName} (${player.age})`}</td>
              <td>{player.trophies.join(', ')}</td>
              <td>{player.club}</td>
              <td>{player.nationality}</td>
              <td>
                <button>More...</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default App;
