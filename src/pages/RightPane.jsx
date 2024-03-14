import React from "react";

import SearchBar from "../components/RightPane/SearchBar";
import Article from "../components/RightPane/Article";

const DUMMY_RESULTS = [
	{
		title: "search result #1",
		content: `Laboris magna reprehenderit dolore excepteur incididunt veniam cillum reprehenderit nostrud. Pariatur excepteur eu magna mollit ipsum consequat eu fugiat et nostrud pariatur. Ut id amet anim esse cillum. In occaecat sunt nisi sit commodo minim qui. Laboris consectetur elit magna tempor officia aliqua proident.
Elit incididunt nulla cillum duis velit veniam velit excepteur. Ea incididunt cillum magna veniam pariatur aliqua anim exercitation reprehenderit. Laborum elit ut pariatur fugiat officia.
Minim eu minim occaecat sint irure quis est. Ipsum ipsum ea mollit quis proident elit nulla exercitation laborum aute cillum. Cupidatat aute duis labore Lorem mollit eiusmod ullamco adipisicing mollit labore.
Occaecat occaecat aliquip reprehenderit in incididunt sint cupidatat magna officia aliqua ea non cupidatat. Nulla proident aute id qui reprehenderit laborum tempor pariatur deserunt elit proident cupidatat excepteur. Tempor est nostrud do magna veniam culpa sunt nostrud aliquip id exercitation elit nisi ut. Qui laboris consequat sunt duis nostrud. Eu voluptate nisi exercitation exercitation non laborum. Officia eu deserunt cupidatat proident occaecat fugiat officia nulla.",
	`,
	},
	{
		title: "search result #2",
		content: `Laboris magna reprehenderit dolore excepteur incididunt veniam cillum reprehenderit nostrud. Pariatur excepteur eu magna mollit ipsum consequat eu fugiat et nostrud pariatur. Ut id amet anim esse cillum. In occaecat sunt nisi sit commodo minim qui. Laboris consectetur elit magna tempor officia aliqua proident.
            Elit incididunt nulla cillum duis velit veniam velit excepteur. Ea incididunt cillum magna veniam pariatur aliqua anim exercitation reprehenderit. Laborum elit ut pariatur fugiat officia.
            Minim eu minim occaecat sint irure quis est. Ipsum ipsum ea mollit quis proident elit nulla exercitation laborum aute cillum. Cupidatat aute duis labore Lorem mollit eiusmod ullamco adipisicing mollit labore.
            Occaecat occaecat aliquip reprehenderit in incididunt sint cupidatat magna officia aliqua ea non cupidatat. Nulla proident aute id qui reprehenderit laborum tempor pariatur deserunt elit proident cupidatat excepteur. Tempor est nostrud do magna veniam culpa sunt nostrud aliquip id exercitation elit nisi ut. Qui laboris consequat sunt duis nostrud. Eu voluptate nisi exercitation exercitation non laborum. Officia eu deserunt cupidatat proident occaecat fugiat officia nulla.",
                `,
	},
	{
		title: "search result #3",
		content: `Laboris magna reprehenderit dolore excepteur incididunt veniam cillum reprehenderit nostrud. Pariatur excepteur eu magna mollit ipsum consequat eu fugiat et nostrud pariatur. Ut id amet anim esse cillum. In occaecat sunt nisi sit commodo minim qui. Laboris consectetur elit magna tempor officia aliqua proident.
            Elit incididunt nulla cillum duis velit veniam velit excepteur. Ea incididunt cillum magna veniam pariatur aliqua anim exercitation reprehenderit. Laborum elit ut pariatur fugiat officia.
            Minim eu minim occaecat sint irure quis est. Ipsum ipsum ea mollit quis proident elit nulla exercitation laborum aute cillum. Cupidatat aute duis labore Lorem mollit eiusmod ullamco adipisicing mollit labore.
            Occaecat occaecat aliquip reprehenderit in incididunt sint cupidatat magna officia aliqua ea non cupidatat. Nulla proident aute id qui reprehenderit laborum tempor pariatur deserunt elit proident cupidatat excepteur. Tempor est nostrud do magna veniam culpa sunt nostrud aliquip id exercitation elit nisi ut. Qui laboris consequat sunt duis nostrud. Eu voluptate nisi exercitation exercitation non laborum. Officia eu deserunt cupidatat proident occaecat fugiat officia nulla.",
                `,
	},
	{
		title: "search result #4",
		content: `Laboris magna reprehenderit dolore excepteur incididunt veniam cillum reprehenderit nostrud. Pariatur excepteur eu magna mollit ipsum consequat eu fugiat et nostrud pariatur. Ut id amet anim esse cillum. In occaecat sunt nisi sit commodo minim qui. Laboris consectetur elit magna tempor officia aliqua proident.
        Elit incididunt nulla cillum duis velit veniam velit excepteur. Ea incididunt cillum magna veniam pariatur aliqua anim exercitation reprehenderit. Laborum elit ut pariatur fugiat officia.
        Minim eu minim occaecat sint irure quis est. Ipsum ipsum ea mollit quis proident elit nulla exercitation laborum aute cillum. Cupidatat aute duis labore Lorem mollit eiusmod ullamco adipisicing mollit labore.
        Occaecat occaecat aliquip reprehenderit in incididunt sint cupidatat magna officia aliqua ea non cupidatat. Nulla proident aute id qui reprehenderit laborum tempor pariatur deserunt elit proident cupidatat excepteur. Tempor est nostrud do magna veniam culpa sunt nostrud aliquip id exercitation elit nisi ut. Qui laboris consequat sunt duis nostrud. Eu voluptate nisi exercitation exercitation non laborum. Officia eu deserunt cupidatat proident occaecat fugiat officia nulla.",
            `,
	},
];

export default function RightPane() {
	return (
		<div className="rightpane">
			<SearchBar></SearchBar>
			{DUMMY_RESULTS.map((e, i) => {
				if (Math.ceil(Math.random() * 2) - 1) {
					return (
						<Article
							data={e}
							key={`search-result-article-${i}-${e?.title}`}
						/>
					);
				}
			})}
		</div>
	);
}
