const result = require('/home/raghad/MyLabs/travel-destination/src/data/db.json');
function Tours() {
    return (
      <>
       {result.map(element => {
        return (
          <div style={{ borderBottom: '1px solid #ccc'}}>
            <img src={element.image}></img>  <br/> Name : {element.name} 
          </div>
        );
      })}
      </>
    );
  }
export default Tours;