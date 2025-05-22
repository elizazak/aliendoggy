const changeToDarkBtn = document.querySelector('.change-to-dark');
const changeToLightBtn = document.querySelector('.change-to-light');
const nasaImg = document.querySelector('.screen');
const nasaVideo = document.querySelector('#nasaVideo')
const doggy = document.querySelector('.doggy');
const nasaInfo = document.querySelector('p');
const doggyWords = document.querySelector('h3');
const nasaTitle = document.querySelector('h4');
const snackBtn = document.querySelector('.snack');
const thanksBtn = document.querySelector('.thanks');
const backToInfoBtn = document.querySelector('.back-to-info');
const wrapper = document.querySelector('.wrapper')
const cloud = document.querySelector('.cloud')
const copyright = document.querySelector('.copyright')


let root = document.documentElement;

const API_LINK = 'https://api.nasa.gov/planetary/apod?api_key=';
const API_KEY = '0cvN16cPlAem4vt1JratF1iA1Hf3Q8eVJaB21fwv';
const URL = API_LINK + API_KEY;

const getImage = () => {

fetch(URL)
		.then((res) => res.json())
		.then((data) => {
			if (data.media_type === "image") {
				nasaImg.setAttribute("src", data.url);
				nasaImg.style.display = "block";
				nasaVideo.style.display = "none";
                doggyWords.textContent = `Thanks! Here's the picture of a day!`;
			} else if (data.media_type === "video") {
				nasaVideo.setAttribute("src", data.url);
				nasaVideo.style.display = "block";
				nasaImg.style.display = "none";
                doggyWords.textContent = `Whoa! NASA shared a space video today! Here's the clip.`
			}
			
			
			snackBtn.style.display = "none";
			thanksBtn.style.display = "block";
			doggyWords.classList.add("animate");
			nasaInfo.classList.remove("long-text");
			changeDoggy();
			getCopyright();
		})
		.catch((err) => console.error(err));



};



const getCopyright = () => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
    copyright.textContent = data.copyright + ' | Powered by the NASA Astronomy Picture of the Day (APOD) API.';
})
    .catch((err) => console.error(err))
}

const getTitle = () => {
	fetch(URL)
    .then((res) => res.json())
    .then((data) => {
    nasaTitle.textContent = data.title;
})
    .catch((err) => console.error(err))
};

const getInfo = () => {
    fetch(URL)
    .then((res) => res.json())
    .then((data) => {
    nasaInfo.textContent = data.explanation;
})
    .catch((err) => console.error(err))
};

const thankYou = () => {
    
     doggyWords.textContent = `Your'e welcome! See you tomorrow! `
     
    doggyWords.classList.remove('animate');
    void doggyWords.offsetWidth; // Forces reflow
    doggyWords.classList.add('animate');
      thanksBtn.style.display = 'none'
      backToInfoBtn.style.display = 'block'
       
    changeDoggy2()
}



const changeToLight = () => {
    changeToLightBtn.style.display = 'none'
    changeToDarkBtn.style.display = 'block'
    root.style.setProperty('--first-color', '#f9c5d1');
    root.style.setProperty('--background-first-color', 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)');
    root.style.setProperty('--second-color', '#4c4177');
    root.style.setProperty('--background-second-color', 'linear-gradient(315deg, #4c4177 0%, #2a5470 74%)');
    root.style.setProperty('--light-color', '#e9e4ff');
    root.style.setProperty('--dark-color', '#141024');
    
}
const changeToDark = () => {
    changeToDarkBtn.style.display = 'none'
    changeToLightBtn.style.display = 'block'
    root.style.setProperty('--first-color', ' #4c4177');
    root.style.setProperty('--background-first-color', 'linear-gradient(315deg, #4c4177 0%, #2a5470 74%)');
    root.style.setProperty('--second-color', '#f9c5d1');
    root.style.setProperty('--background-second-color', 'linear-gradient(315deg, #f9c5d1 0%, #9795ef 74%)');
    root.style.setProperty('--light-color', '#141024');
    root.style.setProperty('--dark-color', '#e9e4ff');
    
}

const dissapear = () => {
    backToInfoBtn.style.display = 'none'
     nasaInfo.classList.add('long-text')
      wrapper.classList.add('longer')
      doggyWords.style.display = 'none'
      cloud.style.display = 'none'
       doggyWords.classList.add('animate')
      changeDoggy3()
}

const changeDoggy = () => {
   
        doggy.style.backgroundImage = `url('./img/sketch\ 2\ snack.svg')`
  
}

const changeDoggy2 = () => {
     doggy.style.backgroundImage = `url('./img/sketch\ 3\ thanks.svg')`
}
const changeDoggy3 = () => {
     doggy.style.backgroundImage = `url('./img/sketch\ 4.svg')`
}

// fetch(URL)
// 	.then((res) => res.json())
// 	.then((data) => console.log(data.explanation))
// 	.catch((err) => console.error(err));

snackBtn.addEventListener('click', getImage);
snackBtn.addEventListener('click', getTitle);
snackBtn.addEventListener('click', getInfo);
changeToLightBtn.addEventListener('click', changeToLight)
changeToDarkBtn.addEventListener('click', changeToDark)
thanksBtn.addEventListener('click', thankYou)
backToInfoBtn.addEventListener('click', dissapear)