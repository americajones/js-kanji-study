//dropdown section
function dropdownFunction() {
    document.getElementById("level-drop").classList.toggle("show");
};
// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.drop-butt')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

//main page 
const title = document.querySelector('.title');
const fillbox1 = document.querySelector('#fillbox1');
const fillbox2 = document.querySelector('#fillbox2');
const fillbox3 = document.querySelector('#fillbox3');
const fillbox4 = document.querySelector('#fillbox4');
const fillbox5 = document.querySelector('#fillbox5');
const fillbox6 = document.querySelector('#fillbox6');
const testBox = document.querySelector('#test-box')
const mainBox = document.querySelector('#landingContent')
let kanjiArray = [];
let number;



const getAll = async () => {
    const data = await fetch('https://kanjiapi.dev/v1/kanji/joyo').then(res => res.json());
    console.log("response is: ", data);
    kanjiArray = [];
    data.forEach(piece => kanjiArray.push(piece));
    number = data.length;
    populateMainPage();
    title.textContent = "";
    title.textContent = "All Kanji";
};

function populateMainPage() {
    removeAllChildNodes(fillbox1);
    removeAllChildNodes(fillbox2);
    removeAllChildNodes(fillbox3);
    removeAllChildNodes(fillbox4);
    removeAllChildNodes(fillbox5);
    removeAllChildNodes(fillbox6);

    const newDiv = document.createElement('div');
    const newDiv2 = document.createElement('div');
    const newDiv3 = document.createElement('div');
    const newDiv4 = document.createElement('div');
    const newDiv5 = document.createElement('div');
    const newDiv6 = document.createElement('div');
    const newButt = document.createElement('button');
    const newButt2 = document.createElement('button');
    const newButt3 = document.createElement('button');
    const newButt4 = document.createElement('button');
    const newButt5 = document.createElement('button');
    const newButt6 = document.createElement('button');
    newButt.addEventListener('click', loadKeywordQuiz1)
    newButt2.addEventListener('click', loadKeywordQuiz2)
    newButt3.addEventListener('click', loadOnQuiz3)
    newButt4.addEventListener('click', loadOnQuiz4)
    newButt5.addEventListener('click', loadKunQuiz5)
    newButt6.addEventListener('click', loadKunQuiz6)
    newButt.classList.add('whole', 'drop-butt');
    newButt2.classList.add('whole', 'drop-butt');
    newButt3.classList.add('whole', 'drop-butt');
    newButt4.classList.add('whole', 'drop-butt');
    newButt5.classList.add('whole', 'drop-butt');
    newButt6.classList.add('whole', 'drop-butt');
    newButt.textContent = "start studying"
    newButt2.textContent = "start studying"
    newButt3.textContent = "start studying"
    newButt4.textContent = "start studying"
    newButt5.textContent = "start studying"
    newButt6.textContent = "start studying"
    newDiv.classList.add('pale');
    newDiv2.classList.add('pale');
    newDiv3.classList.add('pale');
    newDiv4.classList.add('pale');
    newDiv5.classList.add('pale');
    newDiv6.classList.add('pale');
    newDiv.append(number);
    newDiv2.append(number);
    newDiv3.append(number);
    newDiv4.append(number);
    newDiv5.append(number);
    newDiv6.append(number);
    fillbox1.append(newDiv);
    fillbox2.append(newDiv2);
    fillbox3.append(newDiv3);
    fillbox4.append(newDiv4);
    fillbox5.append(newDiv5);
    fillbox6.append(newDiv6);
    fillbox1.append(newButt);
    fillbox2.append(newButt2);
    fillbox3.append(newButt3);
    fillbox4.append(newButt4);
    fillbox5.append(newButt5);
    fillbox6.append(newButt6);
}
//on load getAll()
window.onload = getAll;

const get1 = async () => {
    const data = await fetch('https://kanjiapi.dev/v1/kanji/grade-1').then(res => res.json());
    console.log("response is: ", data);
    kanjiArray = [];
    title.textContent = "";
    title.textContent = "Grade 1 Kanji";
    data.forEach(piece => kanjiArray.push(piece));
    number = data.length;
    populateMainPage();
}
const get2 = async () => {
    const data = await fetch('https://kanjiapi.dev/v1/kanji/grade-2').then(res => res.json());
    console.log("response is: ", data);
    kanjiArray = [];
    title.textContent = "";
    title.textContent = "Grade 2 Kanji";
    data.forEach(piece => kanjiArray.push(piece));
    number = data.length;
    populateMainPage();
}
const get3 = async () => {
    const data = await fetch('https://kanjiapi.dev/v1/kanji/grade-3').then(res => res.json());
    console.log("response is: ", data);
    kanjiArray = [];
    title.textContent = "";
    title.textContent = "Grade 3 Kanji";
    data.forEach(piece => kanjiArray.push(piece));
    number = data.length;
    populateMainPage();
}
const get4 = async () => {
    const data = await fetch('https://kanjiapi.dev/v1/kanji/grade-4').then(res => res.json());
    console.log("response is: ", data);
    kanjiArray = [];
    title.textContent = "";
    title.textContent = "Grade 4 Kanji";
    data.forEach(piece => kanjiArray.push(piece));
    number = data.length;
    populateMainPage();
}
const get5 = async () => {
    const data = await fetch('https://kanjiapi.dev/v1/kanji/grade-5').then(res => res.json());
    console.log("response is: ", data);
    kanjiArray = [];
    title.textContent = "";
    title.textContent = "Grade 5 Kanji";
    data.forEach(piece => kanjiArray.push(piece));
    number = data.length;
    populateMainPage();
}
//study page
const mainKanji = document.querySelector('.main');
const answersDiv = document.querySelector('.answers');
const kunDiv = document.querySelector('.kun');
const onDiv = document.querySelector('.on');
const kanjiDisplay = document.querySelector('#kanji-display');
const messageBox = document.querySelector('#float-message');
let konoKanji
let trueAnswer
let selectedAnswer
let answersArray = [];

const loadKeywordQuiz1 = async () => {
    removeAllChildNodes(answersDiv);
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    let randoNumber = Math.floor(Math.random() * kanjiArray.length - 18);
    konoKanji = kanjiArray[randoNumber]
    mainKanji.textContent = konoKanji;
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json());
    console.log("response is: ", data);
    let kun = data.kun_readings;
    let on = data.on_readings;
    trueAnswer = data.heisig_en;
    if (data.kun_readings.length > 0) {
        kunDiv.append('(' + kun + ')')
    };
    if (data.on_readings.length > 0) {
        onDiv.append('(' + on + ')')
    };
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 9; i++) {
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[randoNumber++]).then(res => res.json());
            let wrongAnswer = falseData.heisig_en;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })

    }
    loadfalseData();
    console.log(trueAnswer)
}
const loadKeywordQuiz2 = async () => {
    removeAllChildNodes(answersDiv);
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    let randoNumber = Math.floor(Math.random() * kanjiArray.length);
    console.log('randoNumber is: ', randoNumber)
    konoKanji = kanjiArray[randoNumber]
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json());
    console.log("response is: ", data);
    mainKanji.textContent = data.heisig_en;
    trueAnswer = data.kanji;
    // kun = data.kun_readings;
    // on = data.on_readings;
    // if (data.kun_readings.length > 0) {
    //     kunDiv.append('(' + kun + ')')
    // };
    // if (data.on_readings.length > 0) {
    //     onDiv.append('(' + on + ')')
    // };
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 9; i++) {
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[randoNumber--]).then(res => res.json());
            let wrongAnswer = falseData.kanji;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy2)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })

    }
    loadfalseData();
    console.log(trueAnswer)
}

function handleClickStudy() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        testBox.style.backgroundColor = 'green';
        messageBox.textContent = 'nice!'
        loadKeywordQuiz1();
    } else {
        messageBox.textContent = 'try again.'
    }
}
function handleClickStudy2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        testBox.style.backgroundColor = 'green';
        messageBox.textContent = 'nice!'
        loadKeywordQuiz2();
    } else {
        messageBox.textContent = 'try again.'
    }
}

function loadOnQuiz3() {
    console.log('pooped myself, better build me')
}
function loadOnQuiz4() {
    console.log('pooped myself, better build me')
}
function loadKunQuiz5() {
    console.log('pooped myself, better build me')
}
function loadKunQuiz6() {
    console.log('pooped myself, better build me')
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
};

function changeDisplay() {
    mainBox.style.display = "block";
    testBox.classList.add('hidden');
};