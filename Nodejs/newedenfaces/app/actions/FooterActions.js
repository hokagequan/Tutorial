import alt from "../alt";

class FooterActions {
	constructor() {
		// code
		this.generateActions(
			'getTopCharactersSuccess',
			'getTopCharactersFail'
		);
	}

	// methods
	getTopCharacters() {
		$.ajax({
			url: '/api/characters/top'
		})
		.done((data) => {
			console.log("success");
			this.actions.getTopCharactersSuccess(data);
		})
		.fail((jqXhr) => {
			console.log("error");
			this.actions.getTopCharactersFail(jqXhr);
		});
		
	}
}

export default alt.createActions(FooterActions);