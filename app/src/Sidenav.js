import React from 'react';

export default function Sidenav(props) {
    var sidebarClass = props.isOpen ? 'sidebar open' : 'sidebar';
    return (
        <div className={sidebarClass}>
      	<div>I slide into view</div>
				<div>Me too!</div>
      	<div>Meee Threeeee!</div>        
    	</div>
    )
}