import React from "react";

export default function NewPost() {
	return (
		<div className="post post--new">
			<span className="post__avatar">
				<img
					src=""
					alt="user"
				/>
			</span>

			<textarea
				className="post--new__content"
				name=""
				id=""
				placeholder="What's happening?"></textarea>

			<span className="post__reactions">
				<span>
					<i className="fa-regular fa-image"></i>
					<i className="fa-solid fa-film"></i>
					<i className="fa-regular fa-chart-bar"></i>
					<i className="fa-regular fa-face-smile"></i>
					<i className="fa-regular fa-calendar"></i>
				</span>
				<button
					className="btn btn--primary "
					type="submit">
					Tweet
				</button>
			</span>
		</div>
	);
}
