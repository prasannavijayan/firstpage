const BaseUrl = 'https://gist.githubusercontent.com/prasannavijayan/40d0ee785e9121f384a899407dbc5110/raw/8565e7be77b9b61444e5fe550d1cfd797e9b9e73/events.json';

export function getAllEvents() {
	fetch(BaseUrl).then(response => {
		fetch(response.url).then(response => {
			debugger;
		})
	});
}