//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map(item => (
        item.artist
    ));
    //console.log("Exercise 1 ->", result);
    return result;
};

//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){

    let result = array.filter((cancion) => {
       return  cancion.artist == artist
    })
    return result
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(arr){
    let result = arr.map((item) => {
        return item.title
    })
    result.sort()
    let tenItems = result.slice(0, 10)
    return tenItems
};

//Exercise 4: Order by year, ascending
function orderByYear(arr){
    
    let result = arr.map((item) =>{
        return item
    })
    let dates = result.sort((a,b) => {
        return a.year - b.year
    })

    dates.sort((a,b) => {
        return a.year === b.year ? a.title.localeCompare(b.title) : false 
    })
    return dates
};

//Exercise 5: Filter songs by genre
function songsByGenre(array,genre){
    //Write your code here
   let result = array.filter((i)=>{
        return i.genre.includes(genre);
    });
    return result;
};
//Exercise 6: Modify the duration of songs to seconds
function minutsToSeconds(array) {
    //Write your code here
    let result = array.map(item=>{
        let duration = item.duration.split('min');
        let minutes = duration[0];
        let seconds = duration[1];
        let totalSeconds = (parseInt(minutes) * 60) + parseInt(seconds);
        let newItem = Object.assign({}, item);
        newItem.duration = totalSeconds;
        return newItem;
    })
    return result
};
//Exercise 7: Get the longest song
function getLongestSong(array){
    //Write your code here
    let arr = minutsToSeconds(array);
    let max  = Math.max.apply(Math, arr.map((item)=>{return item.duration}));
    let result = arr.filter((item)=>{
        return item.duration === max;
        }
    );
    return result;
};
function getShortestSong(array){
    //Write your code here
    let arr = minutsToSeconds(array);
    let min = Math.min.apply(Math, arr.map((item)=>{return item.duration}));
    let result = arr.filter((item)=>{
        return item.duration === min;
        }
    );
    return result;
}
if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong,
        getShortestSong
    }
}
