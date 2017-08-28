


// выделяем кнопку id='but'
var but = document.getElementById('but');
//навешиваем на неё событие
but.addEventListener('click', function() {
// в переменную text передаём значение инпута
var text = document.getElementById('inp').value;
// создаём элемент 'li'
var el = document.createElement('li');
// передаём в него текст плюс две кнопки
el.innerHTML = text + '<button class="remove">remove</button><button class="done">done</button>';

// добавляем в 'list' элемент 'li'
document.querySelector('.list').appendChild(el);

localStorage.setItem(data.todo, JSON.stringify(toDoList))

});
// toDo list с помощью делегирования
// через метод объекта события 'TARGET'

// выделяем элемент 'list'
var list = document.querySelector('.list');
// навешиваем на него прослушиватель событий
list.addEventListener('click', function(e) {
//	console.log(e)
	if(e.target.classList.contains('done')) {
		e.target.parentNode.classList.toggle('passed');
    console.log(this.check )
	}
	if(e.target.classList.contains('remove')) {
		e.target.parentNode.remove();
	}
})
