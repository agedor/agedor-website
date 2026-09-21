const menu=document.querySelector('.menu');const nav=document.querySelector('.header nav');menu.addEventListener('click',()=>nav.classList.toggle('open'));document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
const year = document.getElementById("year");

if (year) {
  year.textContent = new Date().getFullYear();
}
const newsList = document.getElementById("news-list");

if (newsList && typeof newsItems !== "undefined") {
  newsItems.forEach((item) => {
    const newsItem = document.createElement("div");

    let pdfLink = "";

    if (item.pdf) {
      pdfLink = `
        <a href="${item.pdf}" target="_blank" rel="noopener">
          PDFを見る →
        </a>
      `;
    }

    newsItem.innerHTML = `
      <time>${item.date}</time>
      <span>${item.type}</span>
      <p>
        ${item.title}
        ${pdfLink}
      </p>
    `;

    newsList.appendChild(newsItem);
  });
}
