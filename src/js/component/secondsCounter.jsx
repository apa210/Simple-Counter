import React from "react";

//create your first component
const SecondsCounter = (props) => {
    return (
        <div className="d-flex justify-content-center align-items-center text-white bg-dark">
			<div className="row">
				<div className="col my-3 mx-2 py-2 text-center bg-dark align-self-center">
					<i className="far fa-clock fa-3x display-4 bg-dark" />
				</div>
				<div className="col my-3 mx-2 py-2 px-4 display-4 text-center bg-dark">{props.segundo6 % 10}</div>
				<div className="col my-3 mx-2 py-2 px-4 display-4 text-center bg-dark">{props.segundo5 % 10}</div>
				<div className="col my-3 mx-2 py-2 px-4 display-4 text-center bg-dark">{props.segundo4 % 10}</div>
				<div className="col my-3 mx-2 py-2 px-4 display-4 text-center bg-dark">{props.segundo3 % 10}</div>
				<div className="col my-3 mx-2 py-2 px-4 display-4 text-center bg-dark">{props.segundo2 % 10}</div>
				<div className="col my-3 mx-2 py-2 px-4 display-4 text-center bg-dark">{props.segundo1 %10}</div>
			</div>
		</div>
    );
};

export default SecondsCounter;