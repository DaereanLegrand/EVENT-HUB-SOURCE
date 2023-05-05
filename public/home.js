function userHome() {
  let mbox = document.getElementById("main-box");
  mbox.innerHTML = 
        `<div id="events" class="show-event">
        <div
          id="events-carousel"
          class="carousel slide events-shower"
          data-bs-ride="true"
        >
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                src="/images/congress.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/images/congress.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item">
              <img
                src="/images/congress.jpeg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
        <div id="events-title" class="events-shower">
            <h1 class="display-4" >En este instante:</h1>
            <h1 class="display-4" id="title">Congreso de Videojuegos 2023</h1>
        </div>
      </div>
      <div class="future-events">
        <div class="future-events-box">
          <div style="display: flex; align-items: center; justify-content: center; height: 10%">
            <p class="h2 font-weight-bold">
              Eventos futuros
            </p>
          </div>
          <div class="search-box">
            <div class="search-box-div">
              <input
                id="searchbox"
                type="text"
                class="text-box form-control"
                id="floatingInput"
                placeholder="Buscar"
                required maxlength="30" pattern="[a-zA-Z0-9].*"
              /> 
              <img
                src="/images/lupa.png"
                class="image-lupa"
                alt="..."
              />
            </div>
          </div>
          <div class="list-events-box">
            <div class="list-events2 h-100">
              <div class="mevento">
                <img
                  class="img-evento"
                  src="/images/fiesta.png"
                  alt="..."
                />
                <h4 class="name-evento">
                  Evento Interescuelas
                </h4>
              </div>

              <div class="mevento">
                <img
                  class="img-evento"
                  src="/images/fiesta.png"
                  alt="..."
                />
                <h4 class="name-evento">
                  Evento Interescuelas
                </h4>
              </div>
            
              <div class="mevento">
                <img
                  class="img-evento"
                  src="/images/fiesta.png"
                  alt="..."
                />
                <h4 class="name-evento">
                  Evento Interescuelas
                </h4>
              </div>

            </div>
          </div>
        </div>
      </div>
      </div>`;

}
