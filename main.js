const searchSuraBtnElement = document.querySelector('.btn')
const quranAudioElement = document.querySelector('.quranAudio')
const errorElement = document.querySelector('.error')
// searchSuraBtnElement.addEventListener('click', e => {
//     let suraNumberElement = document.querySelector('#suraNumber').value
//     if(suraNumberElement <= 114){
//         if (suraNumberElement.length == 1) {
//             quranAudioElement.src = `http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/00` + suraNumberElement + `.mp3`
//         } else if (suraNumberElement.length == 2) {
//             quranAudioElement.src = `http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/0` + suraNumberElement + `.mp3`
//         } else if (suraNumberElement.length == 3) {
//             quranAudioElement.src = `http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/` + suraNumberElement + `.mp3`
//         }
//     }else{
//         errorElement.textContent = 'Bunday tartib raqamidagi sura mavjud emas!!! \n114 dan kichik son kiriting!'
//     }
// })
document.addEventListener('keyup', e => {
    let suraNumberElement = document.querySelector('#suraNumber').value
    if (suraNumberElement <= 114) {
        if (suraNumberElement.length == 1) {
            quranAudioElement.src = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/00` + suraNumberElement + `.mp3`
            errorElement.textContent = ''
        } else if (suraNumberElement.length == 2) {
            quranAudioElement.src = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/0` + suraNumberElement + `.mp3`
            errorElement.textContent = ''
        } else if (suraNumberElement.length == 3) {
            quranAudioElement.src = `https://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/` + suraNumberElement + `.mp3`
            errorElement.textContent = ''
        }
    }else{
        errorElement.textContent = 'Bunday tartib raqamidagi sura mavjud emas!!! \n114 dan kichik son kiriting!'
    }
})





// async function main() {
//     const url = 'http://server16.mp3quran.net/deban/Rewayat-Hafs-A-n-Assem/'
//     let response = await fetch(url);
//     let commits = await response.json()
//     console.log(commits);
// }
// main()