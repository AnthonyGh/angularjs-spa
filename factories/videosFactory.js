app.factory("videosFactory", function(){
	var videos = [
    {
        id: 1,
        url: "https://www.youtube.com/watch?v=KJEJejxcnEQ",
        title: "Part 1 Développement Web Front End avec Angular 4"
    },
    {
      	id: 2,
        url: "https://www.youtube.com/watch?v=wWdJUey6Rd4",
        title: "Part 2 Développement Web Front End avec Angular 4 Web Components"
    },
    {
     	id: 3,
        url: "https://www.youtube.com/watch?v=u2IyI__E6EU",
        title: "Part 3 Développement Web Front End avec Angular 4 Web Components Suite"
    },
    {
      	id: 4,
        url: "https://www.youtube.com/watch?v=IP06rEN0Z1A",
        title: "Part 4 Développement Web Front End avec Angular 4 Services"
    }
    ];

	var getVideos = function(){
		return videos;
	};

return {
		getVideos: getVideos
	};
});