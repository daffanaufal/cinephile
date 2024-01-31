class AppBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }
  
    render() {
        this.innerHTML = `
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

                <h1 class="display-4 mb-5">Cinephile</h1>
                <div style="width: 100%; height: 37px; background: #D9D9D9; border-radius: 10px; border: 1px black solid; display: flex; align-items: center; padding: 0 20px; box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);">
               <a href="#/home" style="color: black; margin-right: 10px; text-decoration: none;">Home</a>
                <a href="#/aboutus" style="color: black; text-decoration: none;">About Us</a>
                </div>`;
    }
    
  }
  
  customElements.define("app-bar", AppBar);