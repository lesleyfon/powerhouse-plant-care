import React from "react";
import { Redirect, Route } from "react-router-dom";

function PrivateRouteComponent(props) {
	const { component: Component, ...rest } = props;
	return (
		<Route
			{...rest}
			render={(attr) =>
				localStorage.getItem("token") ? <Component {...attr} /> : <Redirect to="/login" />
			}
		/>
	);
}

export default PrivateRouteComponent;
