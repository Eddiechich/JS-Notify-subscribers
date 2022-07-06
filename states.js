import { Creators } from "./creators.js";
import { Users } from "./users.js";


class State {
	constructor(state) {
		this.appState = state;
	}
	addUser(fullName, userName, stateStatus) {
		if (this.appState === true) {
			return new Users(fullName, userName, stateStatus);
		} else {
			console.error("The App Is Down");
		}
	}
	addCreator(fullName, channelName) {
		if (this.appState === true) {
			return new Creators(fullName, channelName);
		} else {
			console.error("The App Is Down");
		}
	}
}


export {State};