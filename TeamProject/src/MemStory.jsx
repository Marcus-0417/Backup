import '../scss/MemStory.scss'

function App() {

  return (
    <div id="MemStory">
      {/* 頁首區 */}
      <header className="topbar">
        {/* Logo */}
        <div className="logo">
          <img className="img-logo" src="./images/logo.png" alt="" />
          <h1>郵你真好</h1>
        </div>
        <nav>
          <ul className="menu">
            <li><a href="">首頁</a></li>
            <li><a href="">配對明信片</a></li>
            <li><a href="">商店</a></li>
            <li><a href="">會員專區</a></li>
            <li><a href="">關於</a></li>
          </ul>
        </nav>
      </header>

      {/* 內容區 */}
      <main id="MemStory-main">
        <div id='section1'>
          <img id='section1-img1' src="./images/memStory/stamp-7.png" alt="" />
          <img id='section1-img2' src="./images/memStory/stamp-8.png" alt="" />
          <img id='bar1-1' src="./images/layer3/Rectangle_205.png" alt="" />
          <p id='text1-1'>用</p>
          <img id='bar1-2' src="./images/layer3/Rectangle_206.png" alt="" />
          <p id='text1-2'>戶</p>
          <img id='bar1-3' src="./images/layer3/Rectangle_207.png" alt="" />
          <p id='text1-3'>故</p>
          <img id='bar1-4' src="./images/layer3/Rectangle_208.png" alt="" />
          <p id='text1-4'>事</p>
        </div>

        <div id="section2">
          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame1"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame2"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame3"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <div className='box'>
            <img className='boxImg1' src="./images/memStory/p1-papers-7.png" alt="" />
            <img className='boxImg2' src="./images/memStory/stamp-2.png" alt="" />
            <div id="frame4"></div>

            <p className='text1'>東部 @noname_ya</p>
            <p className='text2'>在這個科技發達的時代，<br />好久沒拿起筆寫下當下的<br />感受，透過郵你真好這個<br />平台讓我......</p>
            <p className='text3'>閱讀更多</p>
          </div>

          <img id='section2-img1' src="./images/memStory/flowers-2.png" alt="" />
          <img id='section2-img2' src="./images/memStory/small_paper-3.png" alt="" />
          <img id='section2-img3' src="./images/memStory/stamp-9.png" alt="" />
          <img id='section2-img4' src="./images/memStory/arrow.png" alt="" />
          <img id='section2-img5' src="./images/memStory/arrow.png" alt="" />
        </div>
      </main>

      <footer id='MemStory-footer'>
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </footer>
    </div>
  )
}

export default App