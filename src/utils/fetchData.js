
export const exerciseOptions = {
    method: 'GET',
    url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
    headers: {
      'X-RapidAPI-Key': '43a0976045mshd0881ed128d4cf3p1e3e18jsn1e3441ef6442',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };


export const fetchData = async(url,options) => {
    const response = await fetch(url,options);
    const data = await response.json();

    return data;
}
