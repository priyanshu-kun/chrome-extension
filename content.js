const blocked_application = document.body;

const styling = `
    <style>
        .wrapper {
            padding: 20px; 
            background: #000; 
            border-radius: 10px; 
            margin: 50px auto 0 auto; 
            display: flex; 
            flex-direction: column;
            justify-content: center; 
            align-items: center;
            width: 60%;
            height: 30vh;
            font-family: sans-serif;
        }
        .content {
            text-align: center; 
            color: rgba(255,255,255,0.6); 
            font-size: 6rem;
        }
        .warning {
            color: red;
            margin-top: -20px;
        }
    </style>
`

switch (window.location.hostname) {
    case "www.youtube.com":
    case "www.facebook.com":
    case "twitter.com":
    case "www.whatsapp.com":
    case "developers.facebook.com":
    case "www.wechat.com":
    case "www.instagram.com":
    case "www.imqq.com":
    case "www.tumblr.com":
    case "www.tiktok.com":
    case "www.weibo.com":
    case "www.reddit.com":
    case "tieba.baidu.com":
    case "www.linkedin.com":
    case "www.viber.com":
    case "www.snapchat.com":
    case "in.pinterest.com":
    case "line.me":
    case "telegram.org":
        document.head.innerHTML = styling
        blocked_application.innerHTML = `<div class="wrapper">
            <h1 class="content">404 Page not found</h1>
                <p class="warning">Go back to work</p>
        </div>`
        break;
    default:
        break;
}

