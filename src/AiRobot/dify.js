export default () => {
    window.difyChatbotConfig = {
        token: 'HAXrCOYqfcdjx13i',
        // ... 其他配置
        inputs: {
            name: 'apple',
        },
    }
    setTimeout(() => {
        let rootDiv = document.getElementById('root');
        // 插入一个iframe
        let iframe = document.createElement('iframe');
        iframe.src = '//adminxiyu.joyuai.com/chatbot/HAXrCOYqfcdjx13i';
        iframe.className = 'ai-iframe';
        iframe.style.display = 'none';
        rootDiv.appendChild(iframe);
        // 插入一个关闭按钮
        let closeButton = document.createElement('button');
        closeButton.innerHTML = '×';
        closeButton.className = 'ai-close-button';
        closeButton.style.display = 'none';
        closeButton.title = '最小化';
        closeButton.onclick = function() {
            iframe.style.display = 'none';
            closeButton.style.display = 'none';
            button.style.display = 'block';
        }
        rootDiv.appendChild(closeButton);
        
        // 插入一个按钮，点击以后显示iframe
        let button = document.createElement('button');
        button.innerHTML = '🤖';
        button.className = 'ai-button wobble-hor-bottom';
        button.title = 'AI客服';
        button.onclick = function() {
            iframe.style.display = 'block';
            closeButton.style.display = 'block';
            button.style.display = 'none';
            button.className = 'ai-button';
        }
        rootDiv.appendChild(button);

        // window.difyChatbotConfig = {
        //     token: 'HAXrCOYqfcdjx13i',
        //     baseUrl: 'http://10.200.2.183'
        // }
        // var script = document.createElement('script')
        // script.type = 'text/javascript'
        // script.src = 'http://10.200.2.183/embed.min.js'
        // script.id = 'HAXrCOYqfcdjx13i'
        // const node = document.getElementsByTagName('body')[0]
        // if (node) node.appendChild(script)
    }, 1000);
};

// 页面加载以后，添加一个iframe