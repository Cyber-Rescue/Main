// Simulating dynamic news loading
document.addEventListener('DOMContentLoaded', function() {
    const newsList = document.getElementById('newsList');
    
    const newsItems = [
        { title: "Latest Ransomware Attack Hits Major Company", link: "#" },
        { title: "New Phishing Techniques: How to Protect Yourself", link: "#" },
        { title: "Cybersecurity Tips for Remote Workers in 2024", link: "#" }
    ];

    newsItems.forEach(news => {
        const newsDiv = document.createElement('div');
        newsDiv.classList.add('news-item');
        newsDiv.innerHTML = `<h3>${news.title}</h3><a href="${news.link}">Read More</a>`;
        newsList.appendChild(newsDiv);
    });
});
