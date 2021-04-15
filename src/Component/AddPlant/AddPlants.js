import React, { Component } from "react";
import Header from "../Header/Header";

export default class AddPlants extends Component {
	constructor() {
		super();
		this.state = {
			plantName: "",
		};
	}
	render() {
		console.log(this.state);
		return (
			<>
				<Header />
				<section>
					<section className="plant_search_input_field w-3/4  my-10 mx-auto">
						<div className="">
							<label
								className="block text-th-primary text-lg font-bold mb-3"
								htmlFor="username"
							>
								Search Plant
							</label>
							<input
								className="shadow appearance-none border rounded w-full py-3 px-3 text-grey-darker active:outline-none text-xl"
								id="username"
								type="text"
								name="plant_name"
								onChange={(event) =>
									this.setState({ plantName: event.target.value })
								}
								placeholder="Type in plant name"
							/>
						</div>
					</section>
				</section>
			</>
		);
	}
}
