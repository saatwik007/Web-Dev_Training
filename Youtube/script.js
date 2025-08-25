// Sample data for videos
const videos = [
  {
    title: "How to Build a YouTube Clone",
    channel: "CodeMaster",
    views: "1M views",
    thumb: "https://i.ytimg.com/vi/Yg5zwi7H5rE/mqdefault.jpg"
  },
  {
    title: "HTML CSS JS Crash Course",
    channel: "WebDev Simplified",
    views: "750K views",
    thumb: "https://i.ytimg.com/vi/UB1O30fR-EE/mqdefault.jpg"
  },
  {
    title: "React vs Vue vs Angular",
    channel: "TechTalks",
    views: "500K views",
    thumb: "https://i.ytimg.com/vi/2ZphE5HcQPQ/mqdefault.jpg"
  },
  {
    title: "Learn CSS Grid in 20 Minutes",
    channel: "DesignCourse",
    views: "300K views",
    thumb: "https://i.ytimg.com/vi/7kVeCqQCxlk/mqdefault.jpg"
  }
];
function renderVideos() {
    const grid = document.getElementById('videoGrid');
    grid.innerHTML = ''; // Clear existing content
    videos.forEach(element => {
        grid.innerHTML += `
          <div class="video-card">
            <img src="${element.thumb}" alt="${element.title}" class="video-thumb">
            <div class="video-info">
              <h3 class="video-title">${element.title}</h3>
              <p class="video-meta">${element.channel} - ${element.views}</p>
            </div>
          </div>
        `;
    });
}

window.onload = () => renderVideos(videos);