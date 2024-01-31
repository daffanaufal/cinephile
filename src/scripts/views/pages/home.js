import DataSource from '../../data/data-source';

const home = {
  async render() {
    const html = `
    <style>
    movie-list {
      width: 100%;
      display: flex;
      justify-content: space-around; /* Adjust as needed */
      flex-wrap: wrap;
  }
  </style>
    <header>
    <div class="jumbotron text-center">
    <div class="container">
    <app-bar></app-bar>
    <search-bar></search-bar>
    </div>
    </div>
  </header>
  <!-- Modal -->
  <div class="modal fade" id="movieDetails" tabindex="-1" role="dialog" aria-labelledby="movieDetailsLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="movieDetailsLabel">Movie Details</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body" id="movieDetailsContent">
          <!-- Isi Modal Body - API -->
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
      <movie-list class="row"></movie-list>
          `;
    return html;
  },
  async afterRender() {
    const button = document.getElementById('searchButtonElement');
    const element = document.getElementById('searchFilm');
    const movieList = document.querySelector('movie-list');
    button.addEventListener('click', async() =>{
      console.log(element.value);
      try {
        const result = await DataSource.searchMovie(element.value);
        // renderResult(result);
        movieList.movies = result;
        console.log(result);
      } catch (message) {
        console.log(message);
        // fallbackResult(message);
      }

    })
    // const itemContainer = document.querySelector('#body-content');
    // itemContainer.innerHTML = ourStoryTemplate();
  },
};
export default home;



/*
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Cinephile</title>
  <!-- Tambahkan link CSS Bootstrap -->
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<body style="margin: 0; padding: 0;">
  <header>
    <style>
      body {
          margin: 0;
          padding: 0;
      }

      .jumbotron {
          background: rgb(48, 71, 94);
          color: white;
      }
      .jumbotron h1 span{
          font-weight: 500;
      }
      
      .jumbotron .input-group{
          display: flex;
          box-shadow: 0px 3px 6px black;
          width: 75%;
          z-index: 0;
      }
      
      .jumbotron .btn{
          color: white;
      }

      @media screen and (max-width: 767px) {
          .jumbotron h1{
              font-size: 24pt;
          }
          .jumbotron .input-group{
              width: 100%;
          }
      }
  </style>
  <div class="jumbotron text-center">
      <div class="container">
          <h1 class="display-4 mb-5">Cinephile</h1>
          <div style="width: 100%; height: 37px; background: #D9D9D9; border-radius: 10px; border: 1px black solid; display: flex; align-items: center; padding: 0 20px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
         <a href="#/home" style="color: black; margin-right: 10px; text-decoration: none;">Home</a>
          <a href="#/aboutus" style="color: black; text-decoration: none;">About Us</a>
          </div>
      </div>
  </div>
  </header>
  <main>
    <section class="pb-5">
        <article style="position: relative; margin: 0; padding: 0;"> <!-- Tambahkan padding: 0; di sini -->
            <!-- Background dengan gradient -->
            <div style="width: 100%; height: 100vh; background: linear-gradient(180deg, #1D667D 0%, rgba(189.96, 123.10, 22.80, 0) 100%); position: absolute; top: 0; left: 0; z-index: -1;"></div>

            <!-- Konten teks -->
            <div style="color: black; font-size: 32px; font-family: 'Inter', sans-serif; font-weight: 400; word-wrap: break-word; padding: 20px;">
                E-movie finder merupakan aplikasi pencarian film yang
                <br />
                diciptakan untuk membantu pengguna mencari informasi tentang film
                <br />
                seperti sinopsis, rating, dan film yang sedang populer.
            </div>

            <!-- Teks 'by' -->
            <div style="text-align: center; color: black; font-size: 32px; font-family: 'Inter', sans-serif; font-weight: 400; word-wrap: break-word;">
                by
            </div>

            <!-- Nama penulis -->
            <div style="text-align: center; color: black; font-size: 32px; font-family: 'Inter', sans-serif; font-weight: 400; word-wrap: break-word;">
                Daffa Naufal Santoso
            </div>
        </article>
    </section>
</main>


  <footer class="page-footer font-small fixed-bottom">
    <p>
      &copy; 2023,
      <span>Daffa Naufal Santoso</span>
    </p>
  </footer>

  <!-- Memuat skrip app-bar.js -->
  <script src="../styles/main.css"></script>

</body>
</html>*/
