import Card from 'react-bootstrap/Card';


const Player = ({name, team, nationality, jerseyNumber, age, imageUrl}) => {
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={imageUrl} style={{height: "18rem", objectFit: "cover" }}/>
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text>Team: {team}</Card.Text>
          <Card.Text>Nationality: {nationality}</Card.Text>
          <Card.Text>Jersey Number: {jerseyNumber}</Card.Text>
          <Card.Text>Age: {age}</Card.Text>
        </Card.Body>
      </Card>
    )
}

// Player.defaultProps= {
//     name: "Unknown",
//     team: "Unknown",
//     jerseyNumber: "00",
//     age: "00",
//     imageUrl: "https://t3.ftcdn.net/jpg/02/73/68/80/360_F_273688040_iyhsZCEkoWnclJeOz3qUexOssJUrYD97.jpg"
// };


    export default Player;