/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: [
			"random.imagecdn.app",
			"xsgames.co",
			"img.freepik.com",
			"www.ismartrecruit.com",
			"cdn.shopify.com",
			"media.istockphoto.com",
			"assets.aceternity.com"
		],
	},
};

// { domains: ["random.imagecdn.app"] },
// { domains: ["xsgames.co"] },
// { domains: ["img.freepik.com"] },
// { domains: ["ismartrecruit.com"] },
// { domains: ["cdn.shopify.com"] },
// { domains: ["media.istockphoto.com"] },

export default nextConfig;

// @ts-check

// /**
//  * @type {import('next').NextConfig}
//  */
// const nextConfig = {
// 	/* config options here */
//   images: {
// 		remotePatterns: [
// 			{
// 				protocol: "https",
// 				hostname: "random.imagecdn.app",
// 				port: "",
// 				pathname: "/*",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "xsgames.co",
// 				port: "",
// 				pathname: "/*",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "img.freepik.com",
// 				port: "",
// 				pathname: "/*",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "ismartrecruit.com",
// 				port: "",
// 				pathname: "/*",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "cdn.shopify.com",
// 				port: "",
// 				pathname: "/*",
// 			},
// 			{
// 				protocol: "https",
// 				hostname: "media.istockphoto.com",
// 				port: "",
// 				pathname: "/*",
// 			},
// 		],
// 	},
// };

// export default nextConfig;
