const titleInput = document.querySelector('#title');
const docInput = document.querySelector('#doc');
const btn = document.querySelector('#btn');
const resultElm = document.querySelector('.result');

btn.addEventListener('click', (e) => {
	e.preventDefault();

	var title = titleInput.value;
	var doc = docInput.value;

	var itemElm = document.createElement('div');
	var titleElm = document.createElement('div');
	var docElm = document.createElement('div');
	var removeElm = document.createElement('span');

	itemElm.classList.add('item');
	titleElm.classList.add('title');
	docElm.classList.add('doc');
	removeElm.classList.add('remove');

	titleElm.innerHTML = titleInput.value;
	docElm.innerHTML = docInput.value;
	removeElm.innerHTML = '- remove';
	
	titleInput.value = '';
	docInput.value = '';
	
	itemElm.append(titleElm, docElm, removeElm);
	resultElm.append(itemElm);
});

resultElm.addEventListener('click', (e) => {
	if (e.target.tagName === 'SPAN') {
		setTimeout(() => {
			e.target.parentElement.remove()
		}, 100)
	}
})