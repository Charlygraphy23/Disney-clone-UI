import React, { useCallback, useEffect, useMemo, useState } from "react";
import Card from "./Card";

const Carousal = () => {
	const data = useMemo(
		() => [
			{
				img: "/images/slider-badag.jpg",
			},
			{
				img: "/images/slider-badging.jpg",
			},

			{
				img: "/images/slider-scale.jpg",
			},
			{
				img: "/images/slider-scales.jpg",
			},
		],
		[]
	);

	const [active, setActive] = useState(0);

	useEffect(() => {
		let tempActive = 0;
		const interval = setInterval(() => {
			if (tempActive >= data.length - 1) {
				tempActive = 0;
				setActive(0);
			} else {
				setActive(++tempActive);
			}
		}, 2000);

		return () => {
			clearInterval(interval);
			setActive(0);
			tempActive = 0;
		};
	}, [data]);

	const handleLeftClick = useCallback(() => {
		if (active <= 0) return;

		setActive((prevState) => prevState - 1);
	}, [active]);

	const handleRightClick = useCallback(() => {
		if (active >= data.length - 1) return;

		setActive((prevState) => prevState + 1);
	}, [active, data]);

	return (
		<div className='carousal'>
			{active > 0 && (
				<div className=' left carousal_shade'>
					<i className='bi bi-chevron-left' onClick={handleLeftClick}></i>
				</div>
			)}
			<div className='wrapper'>
				{data.map((value, i) => (
					<Card
						key={i}
						active={active === i ? "active" : i < active ? "left" : "right"}
						src={value.img}
						alt='logo'
					/>
				))}
			</div>
			{active < data.length - 1 && (
				<div className=' right carousal_shade'>
					<i className='bi bi-chevron-right' onClick={handleRightClick}></i>
				</div>
			)}

			<div className='pointer'>
				{data.map((value, i) => (
					<span
						key={i}
						className={`navigation ${i === active ? "active" : ""}`}></span>
				))}
			</div>
		</div>
	);
};

export default Carousal;
