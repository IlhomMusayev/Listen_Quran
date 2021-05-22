const searchSuraBtnElement = document.querySelector('.btn')
const quranAudioElement = document.querySelector('.quranAudio')

searchSuraBtnElement.addEventListener('click', e => {
    let suraNumberElement = document.querySelector('#suraNumber').value
    if(suraNumberElement.length == 1){
        quranAudioElement.src = `http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/00`+suraNumberElement+`.mp3`
    }
    else if(suraNumberElement.length == 2){
        quranAudioElement.src = `http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/0`+suraNumberElement+`.mp3`
    }
    else if(suraNumberElement.length == 3){
        quranAudioElement.src = `http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/`+suraNumberElement+`.mp3`
    }
})





// async function main() {
//     const url = 'http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/'
//     let response = await fetch(url);
//     let commits = await response.json()
//     console.log(commits);
// }
// main()