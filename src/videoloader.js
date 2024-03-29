import './styleloader.css';

function App() {
  return(
  <div>
  //header
  <header class="header">
    <div class="header_container">
      <div class="none"> </div>
      

      <div class="user">
        <div class="icon">
         <a href="videoloader.html" class="nav_link nav_logo ">
          <i class="fa-solid fa-video"></i>
         </a>
        </div>

        <div class="img">
          <img src="images/logo.png" alt=""/>
        </div>
      </div>

      <div class="toggle">
        <i class="fa-solid fa-bars" id="header-toggle"></i>
      </div>
    </div>
  </header>

  <section class="nav" id="navbar">
    <nav class="nav_container">
      <div>
        <a href="https://www.biysk-liceum.ru/" class="nav_link nav_logo ">
          <i class="fa-solid fa-bars nav_icon"></i>
          <span class="logo_name">
            <i class=""></i>
            Бийский Лицей
          </span>
        </a>

        <div class="nav_list">
         <div class="nav_items navtop">
           <a href="index.html" class="nav_link navtop active">
             <i class="fa fa-house nav_icon"></i>
             <span class="nav_name">Домашняя страница или главная</span>
           </a>
           <a href="#" class="nav_link navtop">
             <i class="fa-solid fa-clock-rotate-left nav_icon"></i>
             <span class="nav_name">История  Просмотров</span>
           </a>
           <a href="#" class="nav_link navtop">
             <i class="fa-solid fa-thumbs-up nav_icon"></i>
             <span class="nav_name">Понравившиеся</span>
           </a>

           <div class="nav_dropdown">
             <a href="#" class="nav_link">
               <i class="fa-solid fa-chevron-down nav_icon"></i>
               <span class="nav_name">Показать больше</span>
             </a>
              <div class="nav_dropdown-collapse">
                <div class="nav_dropdown-content">
                  <a href="#" class="nav_dropdown-item">Все предметы</a>
                  <a href="#" class="nav_dropdown-item">Математика</a>
                  <a href="#" class="nav_dropdown-item">Биология</a>
                  <a href="#" class="nav_dropdown-item">Математика</a>
                  <a href="#" class="nav_dropdown-item">Биология</a>
                  <a href="#" class="nav_dropdown-item">Математика</a>
                  <a href="#" class="nav_dropdown-item">Биология</a>
                </div>
              </div>
            </div>

            <a href="#" class="nav_link">
              <i class="fa-solid fa-comment nav_icon"></i>
              <span class="nav_name">Может быть типа почта</span>
            </a>
          </div>

          <div class="nav_items subscribe-container">
            <h3 class="nav_subititle">НАШИ УЧИТЕЛЯ</h3>

            <a href="#" class="nav_link">
              <img class="subscribe" src="images/logo.png" alt=""/>
              <span class="nav_name">предмет</span>
            </a>
            <a href="#" class="nav_link">
              <img class="subscribe" src="images/logo.png" />
              <span class="nav_name">предмет</span>
            </a>
            <a href="#" class="nav_link">
              <img class="subscribe" src="images/logo.png" />
              <span class="nav_name">Биология</span>
            </a>
            <a href="#" class="nav_link">
              <img class="subscribe" src="images/logo.png" />
              <span class="nav_name">математика</span>
            </a>


            <div class="nav_dropdown">
              <a href="#" class="nav_link">
                <i class="fa-solid fa-chevron-down nav_icon"></i>
                <span class="nav_name">Показать больше</span>
              </a>

              <div class="nav_dropdown-collapse nav_dropdown-second">
                <div class="nav_dropdown-content">
                  <a href="#" class="nav_dropdown-items">
                    <img class="subscribe" src="images/logo.png" />
                    <span class="nav_name">предмет</span>
                  </a>
                  <a href="#" class="nav_dropdown-items">
                    <img class="subscribe" src="images/logo.png" />
                    <span class="nav_name">предмет</span>
                  </a>
                  <a href="#" class="nav_dropdown-items">
                    <img class="subscribe" src="images/logo.png" />
                    <span class="nav_name">Предмет</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </section>
  <div id="uploadFile_Loader" class="upload-zone">
    <form class="form-upload" id="uploadForm" method="post" enctype="multipart/form-data">
      <div class="upload-zone_dragover">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" class="upload-loader__image">
          <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242M12 12v9"/>
          <path d="m16 16-4-4-4 4"/>
        </svg>
        <p>Перетащи файл сюда</p>
        <span class="form-upload__hint" id="hint">only video guys</span>
      </div>
      <label class="form-upload__label" for="uploadForm_file">
        <span class="form-upload__title">Или нажми кнопку</span>
        <input class="form-upload__input" id="uploadForm_File" type="file" name="file_name" accept="video/*" aria-describedby="hint"/>
      </label>
      <div class="form-upload__container">
        <span class="form-upload__hint" id="uploadForm_Hint"></span>
      </div>
    </form>
  </div>
  </div>
  )
}