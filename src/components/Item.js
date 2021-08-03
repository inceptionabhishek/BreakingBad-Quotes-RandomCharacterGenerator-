import React from 'react'

function Item(props) {
    return (
      <div className="All_cards">
        <div className="Card">
          <img src={props.img} alt={props.name} className="CharImage"></img>
          <div className="container">
            <h4>
              <b>{props.name}</b>
            </h4>
            <p>Portrayed By : {props.portrayed} </p>
          </div>
        </div>
      </div>
    );
}

export default Item
