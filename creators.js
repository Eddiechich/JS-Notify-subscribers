class Creators {
	constructor(fullName, channelName) {
		this.fullName = fullName;
		this.channelName = channelName;
		this.subscribers = [];
		console.log(`${this.channelName}, Created Creator`);
	}
	uploadVideo(videoName, state) {
		if (state.appState) {
			this.subscribers.forEach((user) => {
				user.getNotification(videoName, this);
			});
		} else {
			console.error("The App Is Down");
		}
	}
}


export {Creators};