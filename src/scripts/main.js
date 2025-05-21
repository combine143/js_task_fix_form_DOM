'use strict';

const fields = document.querySelectorAll('.field');
const line = Array.from(fields);

line.forEach((element, index) => {
  const input = element.querySelector('input');
  const label = document.createElement('label');
  const labelText = input.name;

  label.setAttribute('for', input.id);
  label.textContent = labelText;

  label.style.fontWeight = 'bold';
  label.style.textTransform = 'uppercase';

  let text = label.textContent;
  let capitalizedText = text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
  input.setAttribute('placeholder', capitalizedText);

  element.insertBefore(label, input);
});
