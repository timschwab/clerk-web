import axios from 'axios';
import result from "./result"

async function login(name, pass) {
	try {
		let res = await axios.post("/users/login", {
			name,
			pass
		});
		return result.success(res.data.token);
	} catch (err) {
		if (err.response && err.response.status == 401) {
			return result.failure("Incorrect username/password combination.");
		} else {
			console.error(err);
			return result.failure("Something went wrong while communicating with the server.");
		}
	}
}

async function register(name, pass) {
	try {
		await axios.post("/users/register", {
			name,
			pass
		});
		return result.success();
	} catch (err) {
		if (err.response && err.response.status == 400) {
			return result.failure("That username is already taken.");
		} else {
			console.error(err);
			return result.failure("Something went wrong while communicating with the server.");
		}
	}
}

async function info() {
	try {
		let info = await axios.get("/users/info");
		return result.success(info.data);
	} catch (err) {
		if (err.response && err.response.status == 401) {
			return result.failure("Could not authenticate with the server.");
		} else {
			console.error(err);
			return result.failure("Something went wrong while communicating with the server.");
		}
	}
}

async function changeUsername(newUsername) {
	try {
		await axios.post("/users/changeUsername", {
			username: newUsername
		});
		return result.success();
	} catch (err) {
		if (err.response && err.response.status == 401) {
			return result.failure("Could not authenticate with the server.");
		} else if (err.response && err.response.status == 400) {
			return result.failure(err.response.data.message);
		} else {
			console.error(err);
			return result.failure("Something went wrong while communicating with the server.");
		}
	}
}

async function changePassword(newPassword) {
	console.log(newPassword);
	return result.failure("Not implemented yet");
}

export default {
	login,
	register,
	info,
	changeUsername,
	changePassword
};
