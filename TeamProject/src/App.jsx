import '../scss/MainPage.scss'

function App() {

  return (
    <div id="MainPage">

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

      <main>
        {/* 第一層 */}
        <div id='layer1'>
          <div><img className='stamp' src="./images/layer1/stamp-4.png" alt="" /></div>
          <div className='text'>
            <p className='text-TW'>郵你真好</p>
            <p className='text-EN'>Send a postcard to convey warmth.</p>
            {/* 裝飾郵戳 */}
            <div><img className="stampLeft" src="./images/layer1/postmark-1.png" alt="左郵戳" /></div>
            <div><img className="stampRight" src="./images/layer1/postmark-1.png" alt="右郵戳" /></div>
          </div>
          <div><img className='stamp' src="./images/layer1/stamp-3.png" alt="" /></div>

        </div>

        {/* 第二層 */}
        <div id='layer2'>
          <div><img className='layer2-1' src="./images/layer2/stamp-5.png" alt="" /></div>
          <div className='layer2-2'>
            <img src="./images/layer2/btn-1.jpg" alt="" />
            <div className='text'>
              <p id='text1'>希望能在忙碌的生活中</p>
              <p id='text2'>找到與你共頻的人</p>
              <p id='text3'>一起分享生活中的美好</p>
            </div>
          </div>
          <div><img className='layer2-3' src="./images/layer2/stamp-6.jpg" alt="" /></div>

        </div>

        {/* 第三層 */}
        <div id='layer3'>
          <div className='layer3-1'>
            <img className='layer3-1-img1' src="./images/layer3/p1-papers-2.jpg" alt="" />
            <img className='layer3-1-img2' src="./images/layer3/postmark-2.png" alt="" />
            <div className='text1'>
              <p id='text4'>已經迫不及待想與別人分享生活了嗎?<br />點選這裡就可以直接交流啦 !</p>
              <p id='text5'>開始<br />你的明信片旅程吧！</p>
            </div>
            <img className='layer3-1-img8' src="./images/layer3/tape-2.png" alt="" />
            <div className='layer3-2'>
              <img className='layer3-1-img3' src="./images/layer3/p4-papers-1.png" alt="" />
              <p id='text6'>想要獲得更完整的體驗<br />可以先到會員中心<br />進行登入/註冊喔!</p>
            </div>
            <img id='layer3-1-img4' src="./images/layer3/postmask-5.png" alt="" />
            <img id='layer3-1-img5' src="./images/layer3/stamp-7.png" alt="" />
            <img id='layer3-1-img6' src="./images/layer3/stamp-8.png" alt="" />
            <img id='layer3-1-img7' src="./images/layer3/stamp-9.png" alt="" />
          </div>

          <div className='layer3-3'>
            <div id='bar1'>
              <img id='bar1-1' src="./images/layer3/Rectangle_205.png" alt="" />
              <p id='text3-3-1'>即</p>
              <img id='bar1-2' src="./images/layer3/Rectangle_206.png" alt="" />
              <p id='text3-3-2'>時</p>
              <img id='bar1-3' src="./images/layer3/Rectangle_207.png" alt="" />
              <p id='text3-3-3'>動</p>
              <img id='bar1-4' src="./images/layer3/Rectangle_208.png" alt="" />
              <p id='text3-3-4'>態</p>
            </div>
            <div>
              <img id='layer3-3-img1' src="./images/layer3/Rectangle-191.png" alt="" />
              <img id='layer3-3-img2' src="./images/layer3/postmark-3.png" alt="" />
              <div id='dontai1'>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p>*********寄送明信片到</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" />
                </div>
                <div className='dontai-1'>
                  <img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p>*********收到了來自</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p>的明信片</p>
                </div>
              </div>
            </div>
          </div>

          <div className='layer3-4'>
            <div id="bar2">
              <img id='bar2-1' src="./images/layer3/Rectangle_209.png" alt="" />
              <p id='text3-4-1'>歡</p>
              <img id='bar2-2' src="./images/layer3/Rectangle_210.png" alt="" />
              <p id='text3-4-2'>迎</p>
              <img id='bar2-3' src="./images/layer3/Rectangle_211.png" alt="" />
              <p id='text3-4-3'>新</p>
              <img id='bar2-4' src="./images/layer3/Rectangle_212.png" alt="" />
              <p id='text3-4-4'>用</p>
              <img id='bar2-5' src="./images/layer3/Rectangle_213.png" alt="" />
              <p id='text3-4-5'>戶</p>
            </div>
            <div>
              <img id='layer3-4-img1' src="./images/layer3/Rectangle-191.png" alt="" />
              <img id='layer3-4-img2' src="./images/layer3/postmark-3.png" alt="" />
              <div id='dontai2'>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taoyuan.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-Taichung.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
                <div className='dontai-1'>
                  <p>歡迎</p><img className='logo' src="./images/layer3/logo-new_taipei.png" alt="" /><p> ********加入郵你真好!!!</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 第四層 */}
        <div id='layer4'>
          <div className='layer4-1'>
            <img id='layer4-1-img1' src="./images/layer4/p1-picture-1.jpg" alt="" />
            <img id='layer4-1-img2' src="./images/layer4/postmark-2.png" alt="" />
            <p id='layer4-1-text1'>這裡可以看到其他用戶分享的故事與心得哦！</p>
            <p id='layer4-1-text2'>點這裡閱讀用戶故事</p>
            <img id='layer4-1-img3' src="./images/layer4/Vector.png" alt="" />
            <img id='layer4-1-img4' src="./images/layer4/Vector.png" alt="" />
          </div>
          <div className='layer4-2'>
            <img id='layer4-2-img1' src="./images/layer4/p1-papers-3.jpg" alt="" />
            <img id='layer4-2-img2' src="./images/layer4/postcard-snowman.jpg" alt="" />
            <img id='layer4-2-img3' src="./images/layer4/postmask-6.png" alt="" />
            <img id='layer4-2-img4' src="./images/layer4/postmask-4.png" alt="" />
            <h3 id='layer4-2-text1'>主題活動</h3>
            <p id='layer4-2-text2'>節日快樂！</p>
            <p id='layer4-2-text3'>很高興與你交換這張明信片，願<br />它帶來一份溫暖的祝福，讓這個<br />節日充滿快樂與驚喜！祝你平安<br />喜樂！</p>
          </div>
        </div>
      </main>

      <div id='MainPage-footer'>
      <footer>
        <p>郵你真好 &copy; 2024 postcard.com</p>
      </footer>
      </div>
    </div>
  )
}

export default App