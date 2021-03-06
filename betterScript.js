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

window.onload = get1;

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
const skipButt = document.querySelector('.skip');
let konoKanji
let trueAnswer
let selectedAnswer
let answersArray = [];
let randoNumber = 69;

const loadKeywordQuiz1 = async () => {
    removeAllChildNodes(answersDiv);
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length - 18);
    konoKanji = kanjiArray[randoNumber]
    mainKanji.textContent = konoKanji;
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadKeywordQuiz1);
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json()).catch((error) => {
        console.error('API Error:', error);
        loadKeywordQuiz1();
    });
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
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[randoNumber++]).then(res => res.json()).catch((error) => {
                console.error('API Error:', error);
                loadKeywordQuiz1();
            });;
            let wrongAnswer = falseData.heisig_en;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            // console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })

    }
    loadfalseData();
    // console.log(trueAnswer)
}
const loadKeywordQuiz2 = async () => {
    removeAllChildNodes(answersDiv);
    let answersArray = [];
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length);
    console.log('randoNumber is: ', randoNumber)
    konoKanji = kanjiArray[randoNumber]
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadKeywordQuiz2);
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json()).catch((error) => {
        console.error('API Error:', error);
        loadKeywordQuiz2();
    });
    console.log("response is: ", data);
    mainKanji.textContent = data.heisig_en;
    trueAnswer = data.kanji;
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 9; i++) {
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[randoNumber--]).then(res => res.json()).catch((error) => {
                console.error('API Error:', error);
                loadKeywordQuiz2();
            });;
            let wrongAnswer = falseData.kanji;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            // console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy2)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })

    }
    loadfalseData();
    // console.log(trueAnswer)
}

const loadOnQuiz3 = async () => {
    removeAllChildNodes(answersDiv);
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    randoNumber = Math.floor(Math.random() * kanjiArray.length - 10);
    konoKanji = kanjiArray[randoNumber]
    if (konoKanji)
        mainKanji.textContent = konoKanji;
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadOnQuiz3);
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json()).catch((error) => {
        console.error('API Error:', error);
        loadOnQuiz3();
    });
    console.log("response is: ", data);
    trueAnswer = data.on_readings;
    answersArray.push(trueAnswer);
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 8; i++) {
            let nuRandoNumber = Math.floor(Math.random() * kanjiArray.length - 18);
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[nuRandoNumber]).then(res => res.json()).catch((error) => {
                console.error('API Error:', error);
                loadOnQuiz3();
            });
            let wrongAnswer = falseData.on_readings;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            // console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy3)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })

    }
    loadfalseData();
    // console.log(trueAnswer)
}
const loadOnQuiz4 = async () => {
    removeAllChildNodes(answersDiv);
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    let randoNumber = Math.floor(Math.random() * kanjiArray.length - 18);
    konoKanji = kanjiArray[randoNumber]
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadOnQuiz4);
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json()).catch((error) => {
        console.error('API Error:', error);
        loadOnQuiz4();
    });
    console.log("response is: ", data);
    mainKanji.textContent = data.on_readings.join(' | ');
    // let kun = data.kun_readings;
    trueAnswer = data.kanji;
    answersArray.push(trueAnswer);
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 8; i++) {
            let nuRandoNumber = Math.floor(Math.random() * kanjiArray.length - 18);
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[nuRandoNumber]).then(res => res.json()).catch((error) => {
                console.error('API Error:', error);
                loadOnQuiz4();
            });
            let wrongAnswer = falseData.kanji;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            // console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy4)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })
    }
    loadfalseData();
}
const loadKunQuiz5 = async () => {
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
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz6);
    skipButt.addEventListener('click', loadKunQuiz5);
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json()).catch((error) => {
        console.error('API Error:', error);
        loadKunQuiz5();
    });
    console.log("response is: ", data);
    // let kun = data.kun_readings;
    trueAnswer = data.kun_readings;
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 9; i++) {
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[randoNumber++]).then(res => res.json()).catch((error) => {
                console.error('API Error:', error);
                loadKunQuiz5();
            });
            let wrongAnswer = falseData.kun_readings;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            // console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy5)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })

    }
    loadfalseData();
    // console.log(trueAnswer)
}
const loadKunQuiz6 = async () => {
    removeAllChildNodes(answersDiv);
    messageBox.textContent = '';
    kunDiv.textContent = '';
    onDiv.textContent = '';
    testBox.style.backgroundColor = 'rgb(78, 78, 78)';
    let randoNumber = Math.floor(Math.random() * kanjiArray.length - 18);
    konoKanji = kanjiArray[randoNumber]
    mainBox.style.display = "none";
    testBox.classList.remove('hidden');
    skipButt.removeEventListener('click', loadKeywordQuiz1);
    skipButt.removeEventListener('click', loadKeywordQuiz2);
    skipButt.removeEventListener('click', loadOnQuiz3);
    skipButt.removeEventListener('click', loadOnQuiz4);
    skipButt.removeEventListener('click', loadKunQuiz5);
    skipButt.addEventListener('click', loadKunQuiz6);
    let answersArray = [];
    const data = await fetch('https://kanjiapi.dev/v1/kanji/' + konoKanji).then(res => res.json()).catch((error) => {
        console.error('API Error:', error);
        loadKunQuiz6();
    });
    console.log("response is: ", data);
    mainKanji.textContent = data.kun_readings.join(' | ');
    // let kun = data.kun_readings;
    trueAnswer = data.kanji;
    console.log('answrsArray 1 is: ', answersArray);
    const loadfalseData = async () => {
        for (let i = 0; i < 9; i++) {
            const falseData = await fetch('https://kanjiapi.dev/v1/kanji/' + kanjiArray[randoNumber++]).then(res => res.json()).catch((error) => {
                console.error('API Error:', error);
                loadKunQuiz6();
            });;
            let wrongAnswer = falseData.kanji;
            answersArray.push(wrongAnswer);
            // console.log('FALSE', falseData);
            // console.log('answrsArray repeat is: ', answersArray);
        };
        shuffleArray(answersArray);
        console.log('answrsArray final is: ', answersArray);
        answersArray.forEach(answer => {
            // console.log("YO");
            let newDiv = document.createElement('div');
            newDiv.textContent = answer;
            newDiv.addEventListener('click', handleClickStudy6)
            newDiv.classList.add('answer');
            answersDiv.append(newDiv);
        })
    }
    loadfalseData();
}

function handleClickStudy() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuiz1();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
}
function handleClickStudy2() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKeywordQuiz2();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
}
function handleClickStudy3() {
    selectedAnswer = this.textContent;
    if (String(selectedAnswer) === String(trueAnswer)) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadOnQuiz3();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
}
function handleClickStudy4() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadOnQuiz4();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
}
function handleClickStudy5() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {
            loadKunQuiz5();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
}
function handleClickStudy6() {
    selectedAnswer = this.textContent;
    if (selectedAnswer === trueAnswer) {
        console.log('FUCK YES');
        messageBox.textContent = '. * nice! * .'
        setTimeout(() => {

            loadKunQuiz6();
        }, 1000);
    } else {
        messageBox.textContent = 'try again.'
    }
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