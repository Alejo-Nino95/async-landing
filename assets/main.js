const url = 'https://youtube-v3-alternative.p.rapidapi.com/channel?id=UCTwECeGqMZee77BjdoYtI2Q';

const content = null || document.getElementById("content")

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '419bfb3329msh3b02bc50890f33cp13fa4ejsn97a82503a22d',
		'X-RapidAPI-Host': 'youtube-v3-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    try {
	const response = await fetch(urlApi, options);
	const result = await response.json();
	return result;
    } catch (error) {
	return error;
    }   
}

(async () => {
    try{
        const videos = await fetchData(url);
        let view = `
        ${videos.data.map(video => `
        <div class="group relative">
            <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                <img src="${video.thumbnail[0].url}" alt="${video.description}" class="w-full">
            </div>
            <div class="mt-4 flex justify-between">
                <h3 class="text-sm text-gray-700">
                    <span aria-hidden="true" class="absolute inset-0"></span>
                    ${video.title}
                </h3>
            </div>
        </div>
        `).slice(0,4).join("")}`
        content.innerHTML = view;
    } catch (error) {
        console.log(error);
    }
})();

