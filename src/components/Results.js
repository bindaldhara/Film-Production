import React from "react";
import Result from "./Result";

function Results({ results, openDetail }) {
return (
	<section className="results">
	{typeof results != "undefined" ? (
		results.map((result) => (
		<Result key={result.imdbID} result
			={result} openDetail={openDetail} />
		))
	) : (
		<div className="not-found">
		<h2>Sorry No such movie named.</h2>
		<h2>
			Please do check the spelling you entered is correct or either try searching for any other movie.
		</h2>
		</div>
	)}
	</section>
);
}

export default Results;
