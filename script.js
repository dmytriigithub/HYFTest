//-------------------------------------------------------1

// for (let index = 10; index <= 40; index++) {
//     if(index % 5 == 0 && index % 3 == 0) {
//         console.log(`${index} "Jackpot!"`);
//     } else if(index % 5 == 0) {
//         console.log(`${index} "This is divisible by 5"`);
//     } else if (index % 3 == 0) {
//         console.log(`${index} "This is divisible by 3"`);
//     }else {
//         console.log(index);
//     }
// }

//-----------------------------------------------------2
const body = document.querySelector('body'),
      button = document.createElement('button');

button.innerHTML = 'button';
body.style.cssText = `
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
body.appendChild(button);

function buttonClick() {
    const h1 = document.createElement('h1');
    h1.innerText = 'This is an h1 tag';
    body.appendChild(h1);
    button.style.backgroundColor = 'red';
    button.removeEventListener('click', buttonClick);
}

button.addEventListener('click', buttonClick);

//-------------------------------------------------------------------------3
const a = ()=>{
    fetch(`https://catfact.ninja/fact`)
  .then(response => response.json())
  .then((data) => {
    
    console.log(data.length);
    if (data.length < 150) {
        
        console.log(data.fact);
        const element = document.createElement('p');
        element.innerHTML = data.fact;
        body.appendChild(element);
    }

  })
  .catch(error => {
    console.log(error);
  });
};

for (let index = 0; index < 3; index++) {
    a();
    
}
