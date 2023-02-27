const head = document.querySelector('.lines');
const header = document.querySelector('header');
const a = head.addEventListener('click', () => {

    const div = document.createElement('div');
    div.className = 'dropdown-bar';
    div.style.width = '300px';
    div.style.height = '900px';
    div.style.position = 'absolute';
    div.style.top = '68px';
    div.style.left = '5px';
    div.style.background = 'white'
    header.append(div);

    //creting name in dropmenu
    const name = document.createElement('div');
    name.className = 'name-div';
    name.style.width = '99%';
    name.style.height = '60px';
    div.appendChild(name);

    //circle div
    const circle = document.createElement('div');
    circle.className = 'Circle';
    circle.innerHTML = 'MB';
    circle.style.width = '50px';
    circle.style.height = '50px';
    circle.style.background = 'black';
    circle.style.borderRadius = '50%';
    name.appendChild(circle);


    //creating h4 in name--div
    const h4 = document.createElement('h4');
    h4.className = 'learning';
    h4.innerHTML = 'Learn';
    name.appendChild(h4);

    //creating div in name
    const Learning = document.createElement('div');
    Learning.className = 'MyLearn';
    name.appendChild(Learning);

    const lnr1 = document.createElement('a');
    lnr1.className = 'MyLearn--inner'
    lnr1.innerHTML = 'My Learning';
    Learning.appendChild(lnr1)

    const hr = document.createElement('hr');
    hr.className = 'hr';
    name.appendChild(hr)

    //creating new div for popular courses
    const Popular = document.createElement('div');
    Popular.className = 'popular';
    Popular.style.height ='490px'
    div.appendChild(Popular);

    //creating h4 in popular
    const pop = document.createElement('h4');
    pop.className = 'popu'
    pop.innerHTML = 'Popular'
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
    more.style.height = '200px';
    more.className = 'contact--details';
    more.style.color = '#000'
    div.appendChild(more);

    const finalH = document.createElement('h4');
    finalH.innerHTML ='More on udemy';
    finalH.className = 'finalH'
    more.appendChild(finalH);
   

    function trigger()
    {
        const ul = document.createElement('ul');
   document.querySelector('.contact--details').append(ul);
const values = ['Get the app','Invite friends','Help'];
values.forEach(running);

function running(element)
{
    const li =document.createElement('li');
    ul.append(li);
    const anch =document.createElement('a');
    li.appendChild(anch);
    anch.innerHTML = anch.innerHTML + element;

 

}
   
    }
trigger();

//final button on dropdown menu

const btnF=document.createElement('button');
btnF.style.width ='80px';
btnF.style.height = '40px';
btnF.innerHTML = 'ENGLISH';
btnF.className = 'btnf';
more.appendChild(btnF);



    const PersonName = document.createElement('div');
    PersonName.className = 'Name';
    name.appendChild(PersonName);
    const span = document.createElement('span');
    span.innerHTML = 'Polana Naga Mahesh Babu'
    PersonName.appendChild(span);
    const welcome = document.createElement('div');
    welcome.className = 'welcome--note';
    welcome.innerHTML = 'Welcome Back!';
    PersonName.appendChild(welcome)



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
    const bar = document.querySelector('.dropdown-bar');
    bar.append(btn);
    btn.addEventListener('click', () => {
        document.querySelector('.dropdown-bar').remove()
    })




})
//Button sliding
let slideImg = 1;
show(slideImg);

// Next/previous controls
function plusSlides(n) {
  show(slideImg += n);
}

// Thumbnail image controls
function currentSlide(n) {
  show(slideImg = n);
}

function show(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideImg = 1}
  if (n < 1) {slideImg = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideImg-1].style.display = "block";

}


//Automatic slide images..
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 2 seconds
}



