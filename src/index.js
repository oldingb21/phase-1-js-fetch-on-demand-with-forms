const fetchMovie = (input) => {
    fetch(`http://localhost:3000/movies/${input}`)
        .then((res) => res.json())
        .then((movie) => {
            const title = document.querySelector("#movieDetails h4")
            const summary = document.querySelector("#movieDetails p")
            title.textContent = movie.title;
            summary.textContent = movie.summary;
        })
}

const init = () => {
    const inputForm = document.querySelector('form')  
    inputForm.addEventListener("submit", (e) => {
        e.preventDefault();
        fetchMovie(e.target.children[1].value)
  })
}

document.addEventListener('DOMContentLoaded', init);