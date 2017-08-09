import React from 'react';
import './App.css';

function ComponentExample(props) {
	return (
    	<div className="col-sm-12">
	    		<h2 onClick={props.nameHandler}>
	    			{props.name}
	    		</h2>
                <div className="tickerBoxFrame">
                <h3>{props.list}</h3>
                 </div>
	    		</div>
            );
	   }


export default ComponentExample;
