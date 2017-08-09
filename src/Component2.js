import React from 'react';
import './App.css';


 function Component2Example(props) {



	return (
    	<div className="col-sm-12">
	    		<h4 onClick={props.nameHandler}>
	    			{props.name}
	    		</h4>
                <div className="tickerBoxFrame">
                <h3>{props.list}</h3>
                 </div>
	    		</div>
            );
	   }


export default Component2Example;
