fetch('config.json?v=' + Date.now())
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('videoContainer');

    data.videos.forEach(video => {
      const box = document.createElement('div');
      box.className = 'video-box';

      box.innerHTML = `
        <div style="position: relative;">
          <video
            src="${video.preview}"
            poster="${video.thumbnail}"
            muted
            preload="metadata"
            onmouseenter="this.play()"
            onmouseleave="this.pause(); this.currentTime = 0;"
            onclick="window.location.href='${video.link}'"
          ></video>
          <div class="duration">${video.duration}</div>
        </div>
        <div class="meta">
          <img src="${video.profile}" alt="Channel" />
          <div class="text">
            <h4>${video.title}</h4>
            <span>${video.channel}</span>
          </div>
        </div>
        <div class="info-bar">${video.views} • ${video.uploaded}</div>
      `;

      container.appendChild(box);
    });
  });
