const person = {
    name: 'Artemii'
  }
  
  function info(phone, email) {
    console.log(`Имя: ${this.name}, Тел.:${phone}, Email: ${email}`)
  }

  const bind = function (fn, context) {
	const bindArgs = [].slice.call(arguments, 2);

	return function () {
		const fnArgs = [].slice.call(arguments);

		return fn.apply(context, bindArgs.concat(fnArgs));
	};
};

bind(info, person)('09335*****', 'artemii.od.ua@gmail.com');
bind(info, person, '09335*****')('artemii.od.ua@gmail.com');
bind(info, person, '09335*****', 'artemii.od.ua@gmail.com')();