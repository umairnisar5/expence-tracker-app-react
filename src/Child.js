import React from 'react'; 

function Child() {
  return (
    <div className="container">
    <h1 className="text_cenetr">Expence Tracker</h1>
    <h3>your Balnce <br/> $260</h3>

    <div className="expence_container">
    <h3>Income <br/> $260</h3>
    <h3>Expence <br/> $200</h3>
    </div>
    <h3>History</h3>
    <hr/>
    <h3>Add new transaction</h3>
    <hr/>

    <form className="transaction-form">
        <label>Enetr Description <br/>
        <input type="text"/>
        </label><br/>
        <label>Enter Amount <br/>
        <input type="number"/>
        </label><br/>

        <input type="submit" value="Add Transaction"/>
    </form>
    </div>

  );
}

export default Child;
