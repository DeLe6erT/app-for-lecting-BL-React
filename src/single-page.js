import './single-page.css';

function App() {
  return(
    <div>
    <header class="header">
      <div class="header_container">
        <div class="none"> </div>
        
  
        <div class="user">
          <div class="icon">
            <i class="fa-solid fa-video"></i>
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
                  <span class="nav_name">Домашняя старинца или </span>
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
  
  
    <main class="single_pages">
      <section class="video_items flex">
        <div class="left">
          <div class="left_content">
            <video controls>
              <source src="video/Лицейский вестник - 3_2023.mp4" type="video/mp4" poster="images/video_images/back1.jpg"/>
            </video>
  
            <div class="tag">
              <label class="tags">теги типа математика</label>
            </div>
            
  
                <div class="heading">
                  <h4>название<span></span> </h4>
                  <p></p>
                  <div class="comment-like flex">
                    <div class="">
                      <i class=""></i>
                      <label></label>
                    </div>
                    <div class="">
                      <i class=""></i>
                      <label></label>
                    </div>
                    <div class="">
                      <label></label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
           
        <div class="right">
          <div class="right_content">
            
  
  
            <div class="video_items vide_sidebar flex">
              <a href="#">
                <img src="images/logo.png" alt=""/>
              </a>
              <div class="details">
                <p> text </p>
              </div>
            </div>
            <div class="video_items vide_sidebar flex">
              <a href="#">
                <img src="images/logo.png" alt=""/>
              </a>
              <div class="details">
                <p>text</p>
              </div>
            </div>
            <div class="video_items vide_sidebar flex">
              <a href="#">
                <img src="images/logo.png" alt=""/>
              </a>
              <div class="details">
                <p>text</p>
                <span><i class="fa fa-cricle-check"> </i> </span>
                <span></span>
              </div>
            </div>
            <div class="video_items vide_sidebar flex">
              <a href="#">
                <img src="images/logo.png" alt=""/>
              </a>
              <div class="details">
                <p>text</p>
                <span>ИМя преподователя<i class="fa fa-cricle-check"> </i> </span>
                <span></span>
              </div>
            </div>
            <div class="video_items vide_sidebar flex">
              <a href="#">
                <img src="images/logo.png" alt=""/>
              </a>
              <div class="details">
                <p>text</p>
                <span> им препод<i class="fa fa-cricle-check"> </i> </span>
                <span>date</span>
              </div>
            </div>
            <div class="video_items vide_sidebar flex">
              <a href="#">
                <img src="images/logo.png" alt=""/>
              </a>
              <div class="details">
                <p>текст</p>
                <span> им препод</span><i class="fa fa-cricle-check"><span/> </i>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}