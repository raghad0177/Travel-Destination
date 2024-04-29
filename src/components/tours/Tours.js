import './Tours.css';
const result = require('/home/raghad/MyLabs/travel-destination/src/data/db.json');

function Tours() {
    return (
      <>
       {result.map(element => {
        return (  
          <div >
            <img src={element.image}></img>  <br/> Name : {element.name} 
          </div>
        );
      })}
      </>   
    );
  }
export default Tours;