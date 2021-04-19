import React, { Component } from "react";
import SearchField from "../Component/AddPlant/SearchField";
import { data } from "./data";
import Header from "../Component/Header/Header";

export default class AddPlants extends Component {
	constructor() {
		super();
		this.state = {
			plantName: "",
		};
	}
	render() {
		return (
			<>
				<Header />
				<section>
					<SearchField />
					<section className="plant_search_input_field w-3/4  my-10 mx-auto flex flex-row justify-between space-x-1 flex-wrap">
						{data.map((d) => {
							return (
								<div className=" shadow my-10 h-80" style={{ width: "32%" }}>
									<div
										className="plant_image h-1/2"
										style={{
											backgroundImage: `url(https://images.pexels.com/photos/4068015/pexels-photo-4068015.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260)`,
											backgroundRepeat: "no-repeat, repeat",
											backgroundPosition: "center",
											backgroundSize: "cover",
											marginBottom: "2px",
										}}
									></div>
									<div className="plant_details pl-1.5">
										<p className="text-xl mb-2">{d.common_name}</p>
										<p className="text-sm">{d.author}</p>
										<p className="text-sm">
											{" "}
											<span>{d.scientific_name}</span> •{" "}
											<span>{d.family}</span>
										</p>
										<p className="text-xs">
											<span>Year: {d.year}</span> •{" "}
											<span> Family: {d.family}</span>
										</p>
										<button className="bg-th-light hover:bg-th-secondary text-white text-sm font-bold py-1 px-2 rounded float-right mr-5">
											Add Plant
										</button>
									</div>
								</div>
							);
						})}
					</section>
				</section>
			</>
		);
	}
}
