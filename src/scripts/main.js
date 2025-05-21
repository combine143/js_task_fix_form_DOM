'use strict';

const inputs = document.querySelectorAll('.field');
const line = Array.from(inputs);

const labelsText = ['First Name', 'Last Name', 'Email', 'Password', 'Email', 'Password',];

line.forEach((element, index) => {
    const input = element.querySelector('input');
    const label = document.createElement('label');
    label.setAttribute('for', input.id);
    label.textContent = labelsText[index];
    label.style.fontWeight = 'bold';
    label.style.textTransform = 'uppercase';

    input.setAttribute('placeholder', labelsText[index]);

    element.insertBefore(label, input);
});