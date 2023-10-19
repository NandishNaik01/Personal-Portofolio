import React from "react";

function article_1() {
	return {
		date: "An Interesting Article",
		title: "Sanskrit as Programming Language..!",
		description:
			"Sanskrit, the ancient language of India, is known for its precision, rich vocabulary, and grammatical structure. While it has predominantly been used in the realms of literature, philosophy, and spirituality, there is an emerging interest in utilizing Sanskrit as a programming language. This article delves into the potential of Sanskrit as a programming language, exploring its unique features and providing insights into its practical applications.",
		keywords: [
			"The Benefits of Cloud Computing"
			
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph"></div>
					{/* <embed
						src="public\sanskrit as programming language.pdf"
						alt="random"
						className="randImage"
						type="application/pdf" width="100%" height="500px"
					/> */}
					<embed
 							src={process.env.PUBLIC_URL + '/sanskrit as programming language.pdf'}
  							alt="random"
  							className="randImage"
  							type="application/pdf"
  							width="100%"
 							height="500px"
					/>

					{/* <embed src="your-pdf-file.pdf"  /> */}

				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "An Interesting Article",
		title: "Artificial Intelligence in Healthcare",
		description:
			"AI is transforming the healthcare industry, from improving patient outcomes to streamlining operations. Discover the latest applications of this game-changing technology.",
		style: ``,
		keywords: [
			"Artificial Intelligence in Healthcare",
			
		],
		body: (
			<React.Fragment>
				<h3>Content of article 2</h3>
				<h1>Working On this Article....</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2];

export default myArticles;
