const dayjs = require('dayjs');
import "../styles/main.css"


const ourStoryTemplate = () => `
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
  <main>
    <section class="pb-5">
        <article style="position: relative; margin: 0; padding: 0;"> <!-- Tambahkan padding: 0; di sini -->
            <!-- Background dengan gradient -->
            <div style="width: 100%; height: 100vh; background: linear-gradient(180deg, #1D667D 0%, rgba(189.96, 123.10, 22.80, 0) 100%); position: absolute; top: 0; left: 0; z-index: -1;"></div>

            <div class="kontenabout">
            <!-- Konten teks -->
            <div style="color: black; font-size: 32px; font-family: 'Inter', sans-serif; font-weight: 400; word-wrap: break-word; padding: 20px;">
                Cinephile merupakan aplikasi pencarian film yang
                diciptakan untuk membantu pengguna mencari informasi tentang film.
                Dengan database film yang terus diperbarui, pengguna dapat mengetahui film-film terbaru dan populer dengan cepat.
                seperti sinopsis, rating, dan film yang sedang populer.
                Dibantu dengan Dengan antarmuka yang intuitif, pengguna dapat dengan mudah menemukan film yang sesuai dengan selera mereka.
               

            </div>
            
            </div>
        </article>
    </section>
</main>
`;
export {
    ourStoryTemplate,
};
