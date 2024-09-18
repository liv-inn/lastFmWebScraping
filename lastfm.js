function criarCard() {

    if (document.querySelector('.card')) {
      alert('Resumo já criado!');
      return;
    }
  
    const card = document.createElement("div");
    const header = document.querySelector('header');
  
    card.className = "card";
    card.innerHTML = `
          <section class="card-infos">
  
              <header class="header-user">
  
              <img src="" alt="Ícone do usuário" class="user-image">
  
              </header>
  
                  <div class="infos-user">
                      <span class="nome-user"></span>
                      <p class="bio-user"></p>
                  </div>
  
                  <hr class="divider">
              
                  <section class="stats-container">
  
                      <div class="infos">
                          <span class="nScrobbles"></span>
                          <span>SCROBBLES</span>
                      </div>
              
                      <div class="infos">
                          <span class="nArtistas"></span>
                          <span>ARTISTAS</span>
                      </div>
              
                      <div class="infos">
                          <span class="nFavs"></span>
                          <span>FAVORITOS</span>
                      </div>
                      
                  </section>
              
  `;
  
    header.appendChild(card);
  
    const style = document.createElement("style");
    style.innerHTML = `
    .card {
     
      width: 320px;
      height: 360px;
  
      display: flex;
      flex-direction: column;
  
      position: absolute; 
      z-index: 1;
      margin: 20px 40px;
      padding: 0;
      
      background-color: #fff;
  
      border-radius: 20px;
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
  
  }
      .header-user {
      width: 320px;
      height: 90px;
  
      margin:0;
      
      display: flex;
      align-items: center;
      flex-direction: column;
  
      background-color: #B90000;
      border-radius: 18px 18px 0px 0px;
      
      
  }
  
  .user-image {
      width: 110px;
      height: 110px;
  
      border-radius: 100px;
      border: 4px solid #ffffff;
  
      position: absolute;
      top: 50px;
  
      margin: 0;
  }
  
  
  
  .infos-user {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      margin-top: 70px;
      gap: 5px;
  
  }
  
  .nome-user {
      font-size: 30px;
      color: #2c2c2c;
      
  }
  
  .bio-user{
      color: #747474;
      font-style: italic;
      font-weight: lighter;
  }
  
  
  .nome-user, .bio-user {
      margin: 0;
      padding: 0;
  }
  
  .divider {
      width: 280px;
      height: 0.5px;
      margin: 10px auto;
      border: none;
      background-color: #D9D9D9;
  }
  
  .stats-container {
      width: 100%;
  
      display: flex;
      justify-content: space-around;
      
      padding: 20px 0;
  
  }
  
  .infos {
      display: flex;
      flex-direction: column;
      font-family: Arial, sans-serif;
    
  }
  
  .nScrobbles, .nArtistas, .nFavs {
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      font-family: Arial, sans-serif;
      color: #1E1E1E;
      
      margin: 0;
  
  }
  .infos > span:last-child{
      color: #807C7C;
      font-size: 14px;
  }`; 
  
    document.head.appendChild(style);
  
    const imgPerfil = document.querySelector("span.avatar img");
    if (imgPerfil) {
      const img = card.querySelector(".user-image");
      if (img) {
        img.src = imgPerfil.src;
      }
    }
  
    const nameUserPage = document.querySelector("h1.header-title a");
    if (nameUserPage) {
      const username = card.querySelector(".nome-user");
      if (username) {
        username.textContent = nameUserPage.textContent;
      }
    }
  
    const bioUserPage = document.querySelector("section.about-me-sidebar p");
    if (bioUserPage) {
      const userBio = card.querySelector(".bio-user");
      if (userBio) {
        userBio.textContent = bioUserPage.textContent;
      }
    }
  
    const itensHeader = document.querySelectorAll(".header-metadata-display p a");
    const quantScrobbles = card.querySelector(".nScrobbles");
    const quantArtistas = card.querySelector(".nArtistas");
    const quantFavs = card.querySelector(".nFavs");
  
    const cardElements = [quantScrobbles, quantArtistas, quantFavs];
  
    if (itensHeader.length > 2) {
      for (let i = 0; i < cardElements.length; i++) {
        if (itensHeader[i]) {
          cardElements[i].textContent = itensHeader[i].textContent;
        }
      }
    }
  
  }
  

  
  function bttnCriarCard() {
    
    const ulExistente = document.querySelector(".header-metadata");
  
    const novaLi = document.createElement("li");
  
    const bttnCard = document.createElement("button");
    bttnCard.className = "botaoCard"; 
    bttnCard.textContent = "Resumo de Usuário";
    
    bttnCard.addEventListener("click", criarCard);
  
    novaLi.appendChild(bttnCard);
    ulExistente.appendChild(novaLi);
  
    const style2 = document.createElement("style");
    style2.textContent = `
    .botaoCard{
        color: #B90000;
        font-size: 16px;
        font-weight: 700;
        line-height: 18px;
        text-transform: uppercase;
        margin-left: 15px;
        text-align: center;
        margin-bottom: 20px;
    }`;
  
    document.head.appendChild(style2);
  }
  
  bttnCriarCard();