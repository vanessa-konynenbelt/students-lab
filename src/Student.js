import Score from './Score'

function Student(props) {
  return (
    <>
      <br/><br/>
      Name: {props.student.name} <br/><br/>
      Bio: {props.student.bio} <br/><br/>
      {props.student.scores.map(score=> 
         <Score key={score.score} score = {score.score} date = {score.date}/>
      )}
    </>
  )
}

export default Student