import React from "react";
import PlusSvg from "./../../assets/svgs/plusSign.svg";
import "./Header.css";
class Header extends React.Component {
	constructor() {
		super();
		this.state = {};
	}
	s;

	render() {
		return (
			<>
				{/* <!-- This example requires Tailwind CSS v2.0+ --> */}
				<nav className="border-b-2 border-th-secondary">
					<div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
						<div className="relative flex items-center justify-between h-16">
							<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
								{/* <!-- Mobile menu button--> */}
								<button
									type="button"
									className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
									aria-controls="mobile-menu"
									aria-expanded="false"
								>
									<span className="sr-only">Open main menu</span>
									{/* <!-- Icon when menu is closed. Hero icon name: outline/menu Menu open: "hidden", Menu closed: "block"--> */}
									<svg
										className="block h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
									{/* <!-- Icon when menu is open. Heroicon name: outline/xMenu open: "block", Menu closed: "hidden"--> */}
									<svg
										className="hidden h-6 w-6"
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										aria-hidden="true"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								</button>
							</div>
							<div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
								<div className="flex-shrink-0 flex items-center">
									<img
										className="block lg:hidden h-8 w-auto"
										src="https://www.logodesign.net/logo/abstract-line-farm-and-plant-inside-the-circle-with-sun-886ld.png?size=2&industry=plant&bg=0"
										alt="Workflow"
									/>
									<img
										className="hidden lg:block h-10 w-auto"
										// src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
										src="https://www.logodesign.net/logo/abstract-line-farm-and-plant-inside-the-circle-with-sun-886ld.png?size=2&industry=plant&bg=0"
										alt="Workflow"
									/>
								</div>
								<div className="hidden sm:block sm:ml-6">
									<div className="flex space-x-4">
										{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
										<a
											href="/"
											className=" text-th-primary text-base px-3 py-2 rounded-md text-sm font-medium hover:bg-th-light hover:text-th-green"
											aria-current="page"
										>
											About App
										</a>

										<a
											href="/"
											// className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
											className=" text-th-primary text-base px-3 py-2 rounded-md text-sm font-medium hover:bg-th-light hover:text-th-green"
										>
											Saved Plants
										</a>

										<a
											href="/"
											// className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
											className=" text-th-primary text-base px-3 py-2 rounded-md text-sm font-medium hover:bg-th-light hover:text-th-green"
										>
											Plant Of The Day
										</a>

										<a
											href="/"
											className="
                                            inline-flex
                                            items-center
                                            justify-center
                                            space-x-2 
                                            px-3
                                            py-2
                                            rounded-md 
                                            text-sm 
                                            font-medium 
                                            hover:bg-th-light 
                                            hover:text-th-green
                                            rounded-md
                                            text-th-primary
                                            text-base 
                                            hover:text-white 
                                            hover:bg-gray-700 
                                            focus:outline-none
                                            focus:ring-2 
                                            focus:ring-inset 
                                            focus:ring-white"
										>
											<span>Add Plant </span>

											<img
												src={PlusSvg}
												className="max-h-5 w-5 pr-1.5"
												alt="Visual add sign"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
								<button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
									Search Plants
								</button>
							</div>
						</div>
					</div>

					{/* <!-- Mobile menu, show/hide based on menu state. --> */}
					<div className="sm:hidden" id="mobile-menu">
						<div className="px-2 pt-2 pb-3 space-y-1">
							{/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
							<a
								href="/"
								className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
								aria-current="page"
							>
								About App
							</a>

							<a
								href="/"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Saved Plants
							</a>

							<a
								href="/"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Plant Of The Day
							</a>

							<a
								href="/"
								className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
							>
								Add Plant
							</a>
						</div>
					</div>
				</nav>
			</>
		);
	}
}

export default Header;
