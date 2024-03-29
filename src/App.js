import './App.css';
import './single-page';
import './videoloader';


function App() {
  return ( 
     <div>
      <header class="header">
        <div class="header_container">
          <div class="none"> </div>
          
 
          <div class="user">
            <div class="icon">
             <a href="videoloader.js" class="nav_link nav_logo ">
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
 
      <main>
        <section class="video_content grid">
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" alt=""/>
             </div>
             <div class="heading">
               <p>Название</p>
 
               <span>Преподователь <i class=" "></i> </span>
               <span></span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>Название</p>
               <span>Преподователь<i class=" "></i> </span>
               <span></span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" alt=""/>
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" alt=""/>
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" alt=""/>
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
         <div class="video_items">
           <a href="single-page.js">
             <img src="images/logo.png" alt=""/>
           </a>
           <div class="details flex">
             <div class="img">
               <img src="images/logo.png" />
             </div>
             <div class="heading">
               <p>text</p>
               <span>Преподователь<i class=" "></i> </span>
               <span> </span>
             </div>
           </div>
         </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" alt=""/>
              </div>
              <div class="heading">
                <p>Название</p>
                <span>Преподователь <i class=" "></i> </span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>Название</p>
                <span>Преподователь<i class=" "></i> </span>
                <span></span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" alt=""/>
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" alt=""/>
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" alt=""/>
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
          <div class="video_items">
            <a href="single-page.js">
              <img src="images/logo.png" alt=""/>
            </a>
            <div class="details flex">
              <div class="img">
                <img src="images/logo.png" />
              </div>
              <div class="heading">
                <p>text</p>
                <span>Преподователь<i class=" "></i> </span>
                <span> </span>
              </div>
            </div>
          </div>
        </section>         <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" alt=""/>
           </div>
           <div class="heading">
             <p>Название</p>
             <span>Преподователь <i class=" "></i> </span>
             <span></span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>Название</p>
             <span>Преподователь<i class=" "></i> </span>
             <span></span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" alt=""/>
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" alt=""/>
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" alt=""/>
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" alt=""/>
           </div>
           <div class="heading">
             <p>Название</p>
             <span>Преподователь <i class=" "></i> </span>
             <span></span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>Название</p>
             <span>Преподователь<i class=" "></i> </span>
             <span></span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" alt=""/>
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
       <div class="video_items">
         <a href="single-page.js">
           <img src="images/logo.png" alt=""/>
         </a>
         <div class="details flex">
           <div class="img">
             <img src="images/logo.png" />
           </div>
           <div class="heading">
             <p>text</p>
             <span>Преподователь<i class=" "></i> </span>
             <span> </span>
           </div>
         </div>
       </div>
      </main>
     </div>
  );
}

export default App;
