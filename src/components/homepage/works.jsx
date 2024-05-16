import React from "react";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faFilePdf}
				title="Certifications"
				body={
					<div className="works-body">
						<div className="work">
							
							<ul>								
								<h4><li><a href="/Pal0Alt0Certificate.pdf">Cyber Security by <strong>PalOAltO</strong></a></li></h4>
								<h4><li><a href="/BigdataCertificate.pdf">Big Data By Ekathva Innovations P.Ltd</a></li></h4>
								<h4><li><a href="/jscert.png">JavaScript Certification test</a></li></h4>
								{/* <h4><li><a href="/res.pdf">Mern Stack by MICROFOST</a></li></h4>
								<h4><li><a href="/res.pdf">UX/UI BY GOOGLE</a></li></h4> */}
							</ul>
						</div>

						
					</div>
				}
			/>
		</div>
	);
};

export default Works;
