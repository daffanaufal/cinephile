class SearchBar extends HTMLElement {

    connectedCallback() {
        this.render();
    }
  
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.shadowDOM.querySelector('#searchFilm').value;
    }
  
    render() {
        this.innerHTML = `
                <p>Cari film disini!</p>
                <div class="input-group mb-3 ml-auto mr-auto">
                    <input type="search" class="form-control" id="searchFilm" placeholder="Ketik judul film disini!" aria-label="Ketik judul film disini!" aria-describedby="button-addon2">
                    <div class="input-group-append">
                        <button class="btn btn-primary" type="submit" id="searchButtonElement">Search</button>
                    </div>
                </div>`;
        this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }
    
  }
  
  customElements.define("search-bar", SearchBar);