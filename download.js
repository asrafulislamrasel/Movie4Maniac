function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-title">${movie.title}</div>
            <a href="download-pages/download${movie.id}.html" class="download-button">
                Download
            </a>
        </div>
    `;
}