
const pricePerKm = 0.21;
const discountChildren = 20;
const discountSenior = 40;

const inputDistance = document.getElementById('input-distance');
const inputAge = document.querySelector('#input-age');
const btnCalc = document.querySelector('.btn-calc');
const btnReset = document.querySelector('.btn-reset');
const eleOutput = document.getElementById('output');

btnReset.addEventListener('click',
	function() {
		inputDistance.value = '';
		inputAge.value = '';
		eleOutput.innerHTML = '';
	}
);

const eleForm = document.querySelector('form');

eleForm.addEventListener('submit',
	function(event) {
		event.preventDefault();
		const distance = parseInt(inputDistance.value);
		const age = parseInt(inputAge.value);

		const basePrice = distance * pricePerKm;

		let discountPercent = 0;
		
		if (age < 18) {
			discountPercent = discountChildren;
		} else if (age >= 65) {
			discountPercent = discountSenior;
			}

		const discount = basePrice * discountPercent / 100;
		console.log(discount);

		let finalPrice = basePrice - discount;
		finalPrice = parseFloat(finalPrice.toFixed(2));
		console.log(finalPrice);

		eleOutput.innerHTML = finalPrice.toFixed(2);
	}
);