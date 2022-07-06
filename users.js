class Users {
	constructor(fullName, userName, stateStatus) {
		this.fullName = fullName;
		this.userName = userName;
		this.channelsSus = [];
		this.stateStatus = stateStatus;
		console.log(`${this.userName} Has been created`);
	}
	get subscribers() {
		return this.channelsSus;
	}
	set joinChannel(creator) {
		if (this.stateStatus.appState) {
			if (this.channelsSus.includes(creator)) {
				console.info(`already a subscriber`);
			} else {
				this.channelsSus.push(creator);
				creator.subscribers.push(this);
				console.log(
					`${this.fullName} subscribe to ${creator.channelName}`
				);
			}
		} else {
			console.error("The App Is Down");
		}
	}

	getNotification(title, creator) {
		let message = `Hello ${this.fullName}, ${creator.channelName} just uploaded Some New Stuff : ${title} `;
		console.info(message);
	}
}


export {Users};