import React from "react";
import NewPost from "../components/Feed/NewPost";
import Post from "../components/Feed/Post";
const DUMMY_POSTS = [
	{
		user: { avatar: "", name: "Mike Hawk", tag: "@mikecock", time: "1h" },
		time: "10min",
		content: "Tweeter is awesome!",
	},
	{
		user: {
			avatar: "",
			name: "Nicolas",
			tag: "@MinimumViablePerson",
		},
		time: "2h",
		content: "@Sergio @Rico Here's a Twitter clone, what do you think?!",
	},
	{
		user: {
			avatar: "",
			name: "Steven",
			tag: "@MuyRico",
		},
		time: "55m",
		content: "@MinimumViablePerson Looks awesome!",
	},

	{
		user: {
			avatar: "",
			name: "Steven",
			tag: "@Sergei",
		},
		time: "55m",
		content: "@MinimumViablePerson Cool cool!",
	},
];
export default function Feed() {
	return (
		<div className="feed">
			<NewPost></NewPost>

			{DUMMY_POSTS.map((e, i) => (
				<Post
					{...e}
					key={`feed-post-${e.user.tag}-i`}></Post>
			))}
		</div>
	);
}
