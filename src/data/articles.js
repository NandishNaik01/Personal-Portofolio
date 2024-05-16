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
		title: "Acharya Pingala: The Pioneer of Binary Number System in Ancient India",
		description:
			"Acharya Pingala: The Pioneer of Binary Number System in Ancient India is a brief exploration of the historical origins of the binary number system and the pivotal role played by Acharya Pingala, an ancient Indian mathematician and scholar. This article highlights the pre-European roots of the binary system, discusses early number systems, and emphasizes Pingala's contribution to the development of this fundamental numerical concept.",
		style: ``,
		keywords: [
			"Acharya Pingala",
			
		],
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
 							src={process.env.PUBLIC_URL + '/final.pdf'}
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
function article_3() {
	return {
		date: "An Interesting Article",
		title: "Krishna And Physics",
		description:
			"Uncover the surprising connections between the iconic figure Bhagwan Krishna and the principles of physics in my latest article. Explore the intriguing parallels that bridge spirituality and scientific understanding. Join me on this captivating journey where history meets physics.",
		style: ``,
		keywords: [
			"Krishna And Physics",
			
		],
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
 							src={process.env.PUBLIC_URL + '/krishna.pdf'}
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

const myArticles = [article_1, article_2, article_3];

export default myArticles;
