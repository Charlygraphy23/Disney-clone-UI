import React from "react";

// interfaces
import { CardTypes } from "interfaces/card.interface";

const Card = ({ active, src, alt }: CardTypes) => {
	return (
		<>
			<div className={`card ${active}`}>
				<img src={src} alt={alt} />
			</div>
		</>
	);
};

export default Card;
