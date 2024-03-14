import React from "react";

export default function Post({
	user = { avatar: "", name: "Mike", tag: "@mikey", time: "1h" },
	content = "",
	time = "",
}) {
	//Parse content -> add styling to mentions
	//should probably add like a flag for content type tho, images in base 64 would pass here
	//if bold/italic stuff is allowed, then content should come already formatted from server

	let contentArr = [content];

	if (typeof content === "string" && /\@\w+/gi.test(content)) {
		contentArr = content.split(" ");
		for (let i in contentArr) {
			if (/\@\w+/gi.test(contentArr[i])) {
				contentArr[i] = (
					<span className="post__content__tag">{contentArr[i]}</span>
				);
			}
		}
		//This has flaws...a user could write multiple tags without a space...but for now it works
		//Should this parsing even be here?
	}
	//parsing end

	return (
		<div className="post">
			<div className="post__avatar">
				<img
					src={user.avatar}
					alt="user"
				/>
			</div>

			<span className="post__username">
				<strong>{user.name} </strong>
				<span>{user.tag} </span>
				<span>∙</span>
				<span> {time}</span>
			</span>

			<span className="post__content">
				{contentArr.map((e, i) => (
					<>{e} </>
				))}
			</span>

			<span className="post__reactions">
				<button>
					<i className="fa-regular fa-comment"></i>
				</button>
				<button>
					<i className="fa-solid fa-retweet"></i>
				</button>
				<button>
					<i className="fa-regular fa-heart"></i>
				</button>
				<button>
					<i className="fa-solid fa-arrow-up-from-bracket"></i>
				</button>
			</span>
		</div>
	);
}
