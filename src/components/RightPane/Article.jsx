import React from "react";

export default function Article({ data }) {
	return (
		<div className="article">
			<h3 className="article__title">{data.title}</h3>
			<p className="article__text">{data.content}</p>
		</div>
	);
}
