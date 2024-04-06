import React from "react";
import styled, { keyframes, css } from "styled-components";

const LogoScroll = () => {
	const row1 = [
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/7ae42bac3b34999c0db3.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/b2bd91d7b87b2181ca45.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6591cdc0702b32310306.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3b7d9f4b073deb6a9b74.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/3cd767dea94a85078ca4.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/a2b3c3709ffedce2a22a.png",
	];

	const row2 = [
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/9dd55e54b5a28658bf4e.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/0384060dcbf73b6a707c.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/35e044b3354aaa0caed5.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/f50ae7cbf6cc805bdadc.png",
		"https://assets.algoexpert.io/spas/main/prod/g523bdeb478-prod/dist/images/6c585c33ca6c71c79bb7.png",
	];

	return (
		<Wrapper>
			<Text>With Great Outcomes.</Text>
			<Note>Our customers have gotten offers from awesome companies.</Note>
			<Marquee>
				<MarqueeGroup>
					{row1.map((el, index) => (
						<ImageGroup key={index}>
							<Image src={el} />
						</ImageGroup>
					))}
				</MarqueeGroup>
				<MarqueeGroup>
					{row1.map((el, index) => (
						<ImageGroup key={index}>
							<Image src={el} />
						</ImageGroup>
					))}
				</MarqueeGroup>
			</Marquee>
			<Marquee>
				<MarqueeGroup2>
					{row2.map((el, index) => (
						<ImageGroup key={index}>
							<Image src={el} />
						</ImageGroup>
					))}
				</MarqueeGroup2>
				<MarqueeGroup2>
					{row2.map((el, index) => (
						<ImageGroup key={index}>
							<Image src={el} />
						</ImageGroup>
					))}
				</MarqueeGroup2>
			</Marquee>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	width: 100vw;
	height: fit-content;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const Text = styled.div`
	font-size: 4vw; /* responsive font size */
	font-weight: 500;
	margin-bottom: 1.5vw; /* responsive margin */
	color: #f1f1f1;
`;

const Note = styled.div`
	font-size: 1.5vw; /* responsive font size */
	font-weight: 200;
	margin-bottom: 3vw; /* responsive margin */
	color: white;
`;

const Marquee = styled.div`
	display: flex;
	width: 90%;
    border-radius: 1vw; /* responsive border radius */
	overflow: hidden;
	background: #fff;
	margin-bottom: 1vw;

	user-select: none;
	mask-image: linear-gradient(
		to right,
		hsl(0 0% 0% / 0),
		hsl(0 0% 0% / 1) 10%,
		hsl(0 0% 0% / 1) 90%,
		hsl(0 0% 0% / 0)
	);
`;

const scrollX = keyframes`
    from {
        left: translateX(0);
    }
    to {
        transform: translateX(-100%);
    }
`;

const common = css`
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: space-around;
	white-space: nowrap;
	width: 100%;
	animation: ${scrollX} 30s linear infinite;
`;

const MarqueeGroup = styled.div`
	${common}
`;
const MarqueeGroup2 = styled.div`
	${common}
	animation-direction: reverse;
	animation-delay: -3s;
`;

const ImageGroup = styled.div`
	display: grid;
	place-items: center;
	width: 18vw; /* responsive width */

	padding: 1vw; /* responsive padding */
`;

const Image = styled.img`
	object-fit: contain;
	width: 100%;
	height: auto;
	border-radius: 1vw; /* responsive border radius */

	padding: 0.5vw 2vw; /* responsive padding */
`;

export default LogoScroll;
