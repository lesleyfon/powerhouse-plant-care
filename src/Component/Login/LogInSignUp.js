import React, { Component } from "react";

export class LogInSignUp extends Component {
	constructor() {
		super();
		this.state = {
			displayLoginForm: false,
			user: {
				username: "",
				password: "",
			},
		};

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		// If a user is already logged in, push them to the home page
		if (localStorage.getItem("token")) this.props.history.push("/");
	}

	handleChange(e) {
		this.setState({
			user: {
				...this.state.user,
				[e.target.name]: e.target.value,
			},
		});
	}

	// Method to Authenticating user
	logInUser(userCred) {
		fetch("http://localhost:5050/api/login", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userCred),
		})
			.then((response) => response.json())
			.then((response) => {
				localStorage.setItem("token", response.password);
				this.props.history.push("/");
			})
			.catch((error) => new Error(error));
	}
	//Handle Submit
	handleSubmit(e) {
		e.preventDefault();

		// Method to make an API post request to login User
		this.logInUser({
			username: this.state.user.username,
			password: this.state.user.password,
		});
	}
	render() {
		// Submit Form
		return (
			<section className="h-screen min-h-full	 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
				<form
					className="h-2/3 w-full  md:w-full lg:w-3/4 border-th-primary"
					onSubmit={this.handleSubmit}
				>
					<div className="h-full w-full  shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col items-center justify-center">
						<div className="mb-4 w-full  md:w-2/3 lg:w-3/4">
							<label
								className="block text-th-primary text-lg font-bold mb-3"
								htmlFor="username"
							>
								Username
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker active:outline-none"
								id="username"
								type="text"
								name="username"
								value={this.state.user.username}
								onChange={this.handleChange}
								placeholder="Username"
							/>
						</div>
						<div className="mb-4 w-full  md:w-2/3 lg:w-3/4">
							<label
								className="block text-th-primary text-lg font-bold mb-3"
								htmlFor="password"
							>
								Password
							</label>
							<input
								className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"
								id="password"
								name="password"
								type="password"
								value={this.state.user.password}
								onChange={this.handleChange}
								placeholder="******************"
							/>
							<p className="text-red text-xs italic">Please choose a password.</p>
						</div>
						<div className="flex items-center justify-between">
							<button
								className="
                                    bg-th-secondary
                                    mr-10
                                    rounded-md
                                    text-th-green
                                    text-base  
                                    hover:bg-th-login-hover 
                                    hover:text-th-green
                                    
                                    font-bold 
                                    py-2 
                                    px-8 
                                    rounded"
								type="submit"
							>
								Sign In
							</button>
							<a
								className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker"
								href="/"
							>
								Forgot Password?
							</a>
						</div>
					</div>
				</form>
			</section>
		);
	}
}

export default LogInSignUp;
