const head = document.querySelector('.lines');
const header = document.querySelector('header');
const a = head.addEventListener('click', () => {

    const div = document.createElement('div');
    div.className = 'dropdown-bar';
    div.style.width = '300px';
    div.style.maxHeight = '890px';
    div.style.position = 'absolute';
    div.style.top = '1px';
    div.style.left = '5px';
    div.style.overflowY = 'scroll';

    div.style.background = 'white'
    header.append(div);

    //creating name in dropmenu
    const name = document.createElement('div');
    name.className = 'name-div';
    name.style.width = '99%';
    name.style.height = '60px';
    div.appendChild(name);
    //check wheter the user enter valid email or not




    //creating LogIN or sign In

    let newDiv = document.createElement('div');
    newDiv.setAttribute('class', 'newDiv');
    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let li1 = document.createElement('li');
    let newAnchor = document.createElement('a');
    newAnchor.setAttribute('href', 'udemy-login.html')
    let newAnchor1 = document.createElement('a');
    newAnchor.innerHTML = 'Log in'
    newAnchor1.innerHTML = 'Sign up'
    newAnchor1.style.color = 'blue,'
    div.appendChild(newDiv);
    newDiv.appendChild(ul);
    ul.appendChild(li);
    ul.appendChild(li1)
    li.appendChild(newAnchor)
    li1.appendChild(newAnchor1)






    //creating new div for popular courses
    const Popular = document.createElement('div');
    Popular.className = 'popular';
    Popular.style.height = '300px'
    Popular.style.marginTop = '-70px'
    div.appendChild(Popular);

    //creating h4 in popular
    const pop = document.createElement('h4');
    pop.className = 'popu'
    pop.innerHTML = ' Popular'
    Popular.appendChild(pop)

    //creating ul and appending to div

    function render() {
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'props');

        const Lists = ['Web Development', 'Mobile Development', 'Game Development',
            'Entrepreneurship', 'Bussiness Analytics & Intelligence', 'Digital Marketing', 'Graphic Design &Illustration',
            'IT Certifications', 'Personal Transformation', 'All categories'];
        document.querySelector('.popular').append(ul);
        Lists.forEach(main);

        function main(element, index, arr) {
            var anchor = document.createElement('a');
            anchor.className = 'anchor'
            anchor.setAttribute('href', '#');
            var li = document.createElement('li');
            li.setAttribute('class', 'item');
            li.appendChild(anchor)
            ul.appendChild(li);
            anchor.innerHTML = anchor.innerHTML + element;
        }
    } render();

    //Final div on dropdown menu
    const more = document.createElement('div');
    more.style.width = '90%';
    more.style.position = 'relative'
    more.style.top = '300px'
    more.style.marginTop = "-50px"
    more.style.height = '200px';
    more.className = 'contact--details';
    more.style.color = '#000'
    div.appendChild(more);

    const finalH = document.createElement('h4');
    finalH.innerHTML = 'More on udemy';
    finalH.className = 'finalH'
    more.appendChild(finalH);


    function trigger() {
        const ul = document.createElement('ul');
        document.querySelector('.contact--details').append(ul);
        const values = ['Get the app', 'Invite friends', 'Help'];
        values.forEach(running);

        function running(element) {
            const li = document.createElement('li');
            ul.append(li);
            const anch = document.createElement('a');
            li.appendChild(anch);
            anch.innerHTML = anch.innerHTML + element;



        }

    }
    trigger();

    //final button on dropdown menu

    const btnF = document.createElement('button');
    btnF.style.width = '80px';
    btnF.style.height = '40px';
    btnF.innerHTML = 'ENGLISH';
    btnF.className = 'btnf';
    more.appendChild(btnF);

    const hr = document.createElement('hr');
    hr.className = 'hr';
    name.appendChild(hr)








    const div1 = document.createElement('div');
    div1.className = 'inner';
    div.append(div1);



})
//button functioning
const b = head.addEventListener('click', () => {
    const btn = document.createElement('button');
    btn.className = 'btn';
    btn.style.width = '40px';
    btn.style.height = '40px';
    btn.style.position = 'absolute';

    btn.style.top = '0px';
    btn.style.cursor = 'pointer';
    btn.style.left = '310px';
    btn.innerHTML = 'X';
    btn.style.border = '1px solid #fff';
    btn.style.borderRadius = '50%';
    const body = document.querySelector('body');
    body.append(btn);

    btn.addEventListener('click', () => {
        document.querySelector('.dropdown-bar').remove()
        document.querySelector('.btn').remove();
    })
})

let inputText = document.getElementById('psw');
let letter = document.getElementById('letter');
let capital = document.getElementById('capital');
let number = document.getElementById('number');
let length = document.getElementById('length');

inputText.onfocus = function () {
    document.getElementById('message').style.display = 'block';
}
inputText.onblur = function () {
    document.getElementById('message').style.display = 'none';
}

//whenever we type text in the input
inputText.onkeyup = function () {

    let lowercaseletters = /[a-z]/g;

    if (inputText.value.match(lowercaseletters)) {
        letter.classList.add('valid');
        letter.classList.remove('invalid');
    }
    else {
        letter.classList.add('invalid');
        letter.classList.remove('valid');
    }

    let uppercaseletters = /[A-Z]/g
    if (inputText.value.match(uppercaseletters)) {
        capital.classList.add('valid');
        capital.classList.remove('invalid')
    }
    else {
        capital.classList.add('invalid');
        capital.classList.remove('valid');
    }

    let numbers = /[0-9]/g
    if (inputText.value.match(numbers)) {
        number.classList.add('valid');
        number.classList.remove('invalid');
    }
    else {
        number.classList.add('invalid');
        number.classList.remove('valid');
    }

    if (inputText.value.length >= 8) {
        length.classList.add('valid');
        length.classList.remove('invalid');
    }
    else {
        length.classList.add('invalid');
        length.classList.remove('valid');
    }

}

