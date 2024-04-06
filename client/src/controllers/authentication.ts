export const handleLogin = async (email: string, password: string) => {
	try {
		const response = await fetch("http://localhost:8000/api/auth/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email,
				password,
			}),
			credentials: "include",
		});
		return response;
		
	} catch (error) {
		console.error("Error occured here:", error);
	}
};
export const handleSignUp = async (
	name: string,
	email: string,
	password: string,
	confirmPassword: string,
	role: string
) => {
	try {
		const response = await fetch("http://localhost:8000/api/auth/register", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				email: email,
				password: password,
				name: name,
				confirmPassword: confirmPassword,
				role: role,
			}),
		});

		return response;
	} catch (error) {
		console.error("Error:", error);
	}
};

export const handleGoogleLogin = async (role: string, router: any) => {
	//redirect to google login page with role as a query parameter
	router.push(`http://localhost:8000/api/auth/googlelogin?role=${role}`);
};
