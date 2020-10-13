function show(text) {
	document.getElementById('show').innerHTML = text;
}

function start() {
	let text = document.getElementById('text').value;
	text = text.replace(/(\.)/g, '$1 ');
	text = text.replace(/\s+/g, ' ');
	text = text.replace(/\s+%/g, '%');
	text = text.replace(/([а-яА-ЯеЁa-zA-Z()]\.)([а-яА-ЯеЁa-zA-Z])/g, '$1 $2');
	text = text.split(' ');
	work(text, 0, 200);
}

function work(text, index, delay) {
	let toShow = text[index];
	if ( toShow.length < 3 ) {
		++index;
		if ( index < text.length ) {
			toShow += ' ' + text[index];
		}
	}
	if ( toShow.length > 0 ) {
		show(toShow);
	}
	++index;
	if ( index < text.length ) {
		let delayMultiply = 1;
		const lastSymbol = toShow[toShow.length-1];
		if ( lastSymbol === '.' ) {
			delayMultiply = 2;
		} else if ( lastSymbol === '?' ) {
			delayMultiply = 2;
		} else if ( lastSymbol === '!' ) {
			delayMultiply = 2;
		} else if ( lastSymbol === ';' ) {
			delayMultiply = 2;
		} else if ( lastSymbol === ',' ) {
			delayMultiply = 1.5;
		}
		
		if ( toShow.length > 8 ) {
			delayMultiply = 2;
		}
		if ( toShow.length > 12 ) {
			delayMultiply = 3;
		}
		if ( toShow.length > 15 ) {
			delayMultiply = 4;
		}
		setTimeout(work, delay*delayMultiply, text, index, delay );
	}
}
