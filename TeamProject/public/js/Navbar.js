// 建立頁首區的 HTML 結構與樣式
function createHeader() {
    // 建立樣式
    const style = document.createElement('style');
    style.textContent = `
        /* 頁首區 */
        .topbar {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 20px 50px;
        }
        .topbar .logo {
            display: flex;
            position: relative;
        }
        .topbar .logo .img-logo {
            width: 150px;
            position: absolute;
            left: -60px;
            top: -70px;
        }
        .topbar .logo h1 {
            position: absolute;
            width: 100px;
            font-size: 20px;
            top: 30px;
            left: 70px;
            letter-spacing: 2px;
            color: #464646;
        }
        .topbar nav {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        .topbar nav .menu {
            display: flex;
            padding: 0 10px;
            margin-top: 10px;
            margin-bottom: 20px;
        }
        .topbar nav .menu a {
            margin: 15px;
            padding: 7px 0 5px;
            border-bottom: 2px solid transparent;
            transition: 0.4s;
            text-shadow: 0 0 2px rgba(255, 255, 255, 0.3);
            color: #464646;
            text-decoration: none;
        }
        .topbar nav .menu a:hover {
            color: #ffcc00;
            border-bottom: 2px solid transparent;
        }
    `;
    document.head.appendChild(style);

    // 建立 header 元素
    const header = document.createElement('header');
    header.className = 'topbar';

    // 建立 logo 區域
    const logoDiv = document.createElement('div');
    logoDiv.className = 'logo';

    const logoImg = document.createElement('img');
    logoImg.className = 'img-logo';
    logoImg.src = './images/logo.png';
    logoImg.alt = '';

    const logoTitle = document.createElement('h1');
    logoTitle.textContent = '郵你真好';

    logoDiv.appendChild(logoImg);
    logoDiv.appendChild(logoTitle);

    // 建立導覽列
    const nav = document.createElement('nav');
    const menuList = document.createElement('ul');
    menuList.className = 'menu';

    // 建立選單項目
    const menuItems = [
        { text: '首頁', href: './' },
        { text: '配對明信片', href: './PC-index.html' },
        // { text: '商店', href: '' }, // 已註解掉
        { text: '會員專區', href: './Member-Index.html' },
        { text: '關於', href: './about.html' },
    ];

    menuItems.forEach(item => {
        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.textContent = item.text;
        link.href = item.href;
        listItem.appendChild(link);
        menuList.appendChild(listItem);
    });

    nav.appendChild(menuList);

    // 將 logo 和 nav 加入 header
    header.appendChild(logoDiv);
    header.appendChild(nav);

    // 將 header 加入頁面
    document.body.prepend(header);
}

// 呼叫函式以建立頁首
createHeader();
