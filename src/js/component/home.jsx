import React from "react";
import SecondsCounter from "./secondsCounter.jsx";

//create your first component
const Home = (props) => {
	return (
		<div className="content">
			<SecondsCounter segundo1={props.segundo1} 
							segundo2={props.segundo2}
							segundo3={props.segundo3}
							segundo4={props.segundo4}
							segundo5={props.segundo5}
							segundo6={props.segundo6}/>
		</div>
	);
};

export default Home;
