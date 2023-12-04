import DisplayPlayer from './displayplayer';

import { useState } from 'react';    

import { players as initialPlayers} from './players';       

function ListPlayers() {

    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    const [players, setPlayers] = useState(initialPlayers);

    const [showPlayerDatails, setShowPlayersDetails] = useState(false)

    const handleMoreClick = (playerId) => {
            setSelectedPlayerId(playerId)
            setShowPlayersDetails(true)
    };

    const handleDeleteClick = (playerId) => {
            const updatedPlayers = players.filter(player => !(player.id===playerId));
            setPlayers(updatedPlayers)
    };
    
    const handleBackToListClick = () => {
            setShowPlayersDetails(false)
    };

    return (
        <section className="w-1140px"> 
            {!showPlayerDatails ? (
            <>    
                <h2>Top Soccer Players</h2> 
                <table className="data-table">
                    <thead>
                        <tr>
                            <th>Rank</th>
                            <th>Name</th>
                            <th>Trophies</th>
                            <th>Club</th>
                            <th>Nationality</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {players.map(player => (
                            <tr key={player.id}>
                                <td>{player.id}</td>
                                <td>{player.firstname} {player.lastname} ({player.age})</td>
                                <td>{player.trophies}</td>
                                <td>{player.club}</td>
                                <td>{player.nationality}</td>
                                <td><button onClick = {() => handleMoreClick(player.id)}>More...</button></td>
                                <td><button className='delete' onClick = {() => handleDeleteClick(player.id)}>Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </>
            ) : (
                <>
                    {<DisplayPlayer playerId={selectedPlayerId}/>}
                    <button onClick={handleBackToListClick} className='back-to-list'>Back to list.</button>
                </>
            )}
        </section>
    );
}
        
export default ListPlayers;