import React, { useState } from 'react'

export default function QuotesContentDisplay(props) {

    return (
      <div className="QuoteContent">
        {props.text} : 
        <br />
        {props.Actor}
      </div>
    );
}
