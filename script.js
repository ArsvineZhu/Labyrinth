const LABYRINTH_CONTENT = `LXpGb1uLYSCQFAaNJcoXmMacmiV+JB9N3LGY4nhyD3dINR6/E82FbhDNu4967CxwN/sUU3RxPldd9GKJj7DWod7HDaQICPC7+wpH2C9RvMVCghcz7PSn9N1w4Ow7G0gKK+7h9TxnbIWv8hyCs6dO78kssmNx+PF5RFwaGoqE0Os7tVPxTWPUymkaHaIE4gJr4pvdr5CJ497OTO25orhMm1wKWp5w3Ik3hrAZ7florDe5SZRyB859xL+J3nnawDfAlqhgko/KkmQXn4Ivw3u06tDb07u26gnGylkfwAhP/xmAqhNEu8jMxqA05oeER8IhojJDI/P+/lLPrMMHCS/2NzVNb+TBI1f6ib5plp8azqueYaPtKd8c3YRhH/u5+YSGjXqRwqml5zXjpChWiTKdc5Pni8hJOywCJTOC3OX+jDlkDeandi618I83TBR1P4ehkgJFOFg9i2eXPjK5XiSpNvRzWbp2CDNA+AJcxC8kQJvLt3fFHjdiWUxBNx9Ep7JXo7doFQ2ipyUvFd+jgKhVOLXG8LWefTTIe4X1tXzG0Nhg5oW0Tseh4ocgz5kJnUUjfdHk1K66JOzowAaPSvREzd+avn7lS2QhCpM3JbwINUHEkSqYIfrDG2SxjvFMkAlg9fMyqMSv6vKDzOkD0HGVti+O7I6mzxftluJujidgVGOmAgxXvT/bAwey2eTv9jHHp0f73YaFjLLA2vq205d2JHwqmRAVzOmHA40cZJdpaBzEUSGJmHpSgzLyCwBXJeLdPd0v4kwYCaNDurSopcPq4q/IEHLRoqObI/gM3dCnVvhRWzf2iJmaQLWuCQZ44w++BHm1Sz20KxkVrIF99EGXDq+jx/fGWds10yPb11rmxbNywlSJxKpT/hiAYVIQUN6nx1j7P3OFCEbIXTtZVMAhfEFt1BviLR+of46HRiVzB28tg2uA7ToBhTcUOFMPbU43sFM6OzBhfz/WvD6fcy7dYHuC928Yq75ks45AseYNcH2/oh3dCm/nkgI8b49E5NDDi6hzDHLU9edrGxYxxlYXzwuPw3L+fimOm8XUVmO3KSchZmi1UnOHlY9IZp9p1jfzlwd+N5bh7rovShKGwpwOc2MgLaTUmHLMo8e0OED6R3JHpnd9V2Zg+CV/Pmt6PkoarEW6wy5F5/ujMkbLZY3zLQgdSd9fG4zCzXBc/3XrWyDXjh9PurmmycIOjxfAhBxoIPC2ac0XH4tyCaAxVYVQ1AAFzadPic+sJT5pxw494ofHLawNBNZPnv12pxvZsKzhqkavjgnfROgEbBhM/dZlW2g5ebHN2wkZ/poA/Tk/nkuNvAiyZFmsac4bNjgJ0k/LZ2HTemZ5ZbLI4VcK8Uq5BDRjrisuOVbKvEFvoiQLcLvzHHp173w2z7fH6TpUSuUClnpr4hSn8NbvvhIVfj7WxMmBb3CnwiMWO+BezRNPMp3N3J1P+TFBbRZJhnuuXpm5nfXgN4/4AwKOjLOA3LACFEbHTtibYm/7bN1ddTOrk7+AP6NE3FrOCtXGJLJKeUENn1wAHrFqKo5jidaFp8bY4kLgIO37ibReRAY8FaQX0Z3vqYWgLWO3D5DOLs96xquyrCUHTVAJs0BdETs0xVewZMOwSZjWTcxpOIvmpnKd7+1WGyj4sf9x/cwo2dqoSHNL6CcPRa9KLRq2lntrJmhfELiJlAt4v2XWvt40tQEKUyxNHcenKBpu47qk30QRNrf6ogOMOL8ZotcZyHwWrCnysX/1WVzwGdnTd+6PPSPQPxQ0wO1/HvF+ld8w7JjUeyxDi/rjiqyoccSWMZdRaokXxHrCBO4wgJekD8fWt3eRHoWwBiwpJClAV1l+VuVOejry/wc0aUishWzqUbgACq8OELwf5I4hztxOcK9m++kDAarH0Fz5b8W45J6J6dSbywbda4DDGZtWqtTTLMoADX8FMGW+8cquF8SfsHRrI9QrkdfGUc8wXWn9xq7EGLFCt2IDBCUbQ47fOmf8h5FI/Xc3Z0LMamTcpAGAM+5C9ws7dK8MgaLgBJR31++6U3kWQSlSAxUkSZwe1IGqS7YjhK5R38wALN0XDeCuMtgr1QW2LOVwJ90/si01/qkJMQTuUez0DpNz0ZfYCx8wVnzceOjnCCeOAKHGvgmMTbPFbQMymDZ61CbvyryICjuPz5iKgkv4EhNRz2MQz6V4YO9WeBijdXNcAaOkk22FCW3dhLfEoDgScPXSBF8STwEZodCzYKiJoJjAaRlkmGx1eVKbsCQMJ0OtqSqgD0LqT8eTYR1PLnFuBeQkYSM5WcCqZYvBMHI=`;


// 配置参数
const PBKDF2_ITERATIONS = 100000;
const AES_KEY_LENGTH = 256; // 位
const SALT_LENGTH = 16; // 字节
const IV_LENGTH = 12; // 字节，GCM推荐长度

// 生成随机字节
async function getRandomBytes(length) {
    const array = new Uint8Array(length);
    window.crypto.getRandomValues(array);
    return array;
}

// 将ArrayBuffer转换为Base64字符串
function arrayBufferToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    const binary = bytes.reduce((acc, byte) => acc + String.fromCharCode(byte), '');
    return btoa(binary);
}

// 将Base64字符串转换为ArrayBuffer
function base64ToArrayBuffer(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
}

// 从密码派生AES密钥
async function deriveKey(password, salt) {
    try {
        // 将密码转换为ArrayBuffer
        const encoder = new TextEncoder();
        const passwordData = encoder.encode(password);
        
        // 生成密钥材料
        const importedKey = await window.crypto.subtle.importKey(
            'raw',
            passwordData,
            { name: 'PBKDF2' },
            false,
            ['deriveBits', 'deriveKey']
        );
        
        // 派生AES密钥
        const derivedKey = await window.crypto.subtle.deriveKey(
            {
                name: 'PBKDF2',
                salt: salt,
                iterations: PBKDF2_ITERATIONS,
                hash: 'SHA-256'
            },
            importedKey,
            { name: 'AES-GCM', length: AES_KEY_LENGTH },
            true,
            ['encrypt', 'decrypt']
        );
        
        return derivedKey;
    } catch (error) {
        throw new Error(`密钥派生失败: ${error.message}`);
    }
}

// 加密函数
async function encrypt(text, password) {
    try {
        // 验证输入
        if (!password || password.length < 8) {
            throw new Error('密钥长度至少为8个字符');
        }
        
        if (!text.trim()) {
            throw new Error('请输入要加密的文本');
        }
        
        // 生成盐和IV
        const salt = await getRandomBytes(SALT_LENGTH);
        const iv = await getRandomBytes(IV_LENGTH);
        
        // 派生密钥
        const key = await deriveKey(password, salt);
        
        // 将文本转换为ArrayBuffer
        const encoder = new TextEncoder();
        const data = encoder.encode(text);
        
        // 加密数据
        const encryptedData = await window.crypto.subtle.encrypt(
            {
                name: 'AES-GCM',
                iv: iv
            },
            key,
            data
        );
        
        // 组合盐、IV和加密数据
        const combined = new Uint8Array(
            salt.length + iv.length + encryptedData.byteLength
        );
        combined.set(salt);
        combined.set(iv, salt.length);
        combined.set(new Uint8Array(encryptedData), salt.length + iv.length);
        
        // 转换为Base64字符串
        return arrayBufferToBase64(combined.buffer);
    } catch (error) {
        throw error;
    }
}

// 解密函数
async function decrypt(encryptedText, password) {
    try {
        // 验证输入
        if (!password || password.length < 8) {
            throw new Error('密钥长度至少为8个字符');
        }
        
        if (!encryptedText.trim()) {
            throw new Error('请输入要解密的文本');
        }
        
        // 将Base64字符串转换为ArrayBuffer
        const combinedData = base64ToArrayBuffer(encryptedText);
        
        // 提取盐、IV和加密数据
        const salt = new Uint8Array(combinedData.slice(0, SALT_LENGTH));
        const iv = new Uint8Array(combinedData.slice(SALT_LENGTH, SALT_LENGTH + IV_LENGTH));
        const encryptedData = combinedData.slice(SALT_LENGTH + IV_LENGTH);
        
        // 派生密钥
        const key = await deriveKey(password, salt);
        
        // 解密数据
        const decryptedData = await window.crypto.subtle.decrypt(
            {
                name: 'AES-GCM',
                iv: iv
            },
            key,
            encryptedData
        );
        
        // 将解密后的数据转换为文本
        const decoder = new TextDecoder();
        return decoder.decode(decryptedData);
    } catch (error) {
        // 更友好的错误消息
        if (error.message.includes('decrypt')) {
            return '解密失败：可能是密钥错误或加密数据已损坏';
        }
        throw error;
    }
}


// DOM元素
const passwordInput = document.getElementById('password');
const submitBtn = document.getElementById('submit-btn');
const errorMessage = document.getElementById('error-message');
const labyrinthContent = document.getElementById('labyrinth-content');
const container = document.querySelector('.container');

// 显示错误消息
function showError(message) {
    errorMessage.textContent = message;
    errorMessage.classList.add('show');
    passwordInput.classList.add('shake');
    
    // 移除动画类，以便下次可以再次触发
    setTimeout(() => {
        passwordInput.classList.remove('shake');
    }, 500);
}

// 隐藏错误消息
function hideError() {
    errorMessage.classList.remove('show');
}

// 显示labyrinth内容
function displayLabyrinthContent(content) {
    // 清空容器
    labyrinthContent.textContent = '';
    
    // 添加内容
    labyrinthContent.textContent = content;
    
    // 显示内容区域
    labyrinthContent.classList.add('show');
    
    // 触发翻页动画
    labyrinthContent.classList.add('page-turn');
    
    // 动画结束后移除动画类以便下次可以再次触发
    setTimeout(() => {
        labyrinthContent.classList.remove('page-turn');
    }, 1000);
    
    // 应用全屏内容模式
    container.classList.add('content-fullscreen');
    
    // 创建返回按钮
    const backBtn = document.createElement('button');
    backBtn.id = 'back-btn';
    backBtn.textContent = 'Back';
    
    // 添加返回登录功能
    backBtn.addEventListener('click', () => {
        // 隐藏内容区域
        labyrinthContent.classList.remove('show');
        
        // 移除全屏内容模式
        container.classList.remove('content-fullscreen');
        
        // 清空密码输入框
        passwordInput.value = '';
        
        // 隐藏返回按钮
        backBtn.remove();
    });
    
    // 添加返回按钮到DOM
    container.appendChild(backBtn);
    
    // 添加滚动监听，模拟翻页效果
    let lastScrollTop = 0;
    
    function handleScroll() {
        const scrollTop = labyrinthContent.scrollTop;
        const scrollHeight = labyrinthContent.scrollHeight;
        const clientHeight = labyrinthContent.clientHeight;
        
        // 检测是否滚动到底部
        if (scrollTop + clientHeight >= scrollHeight - 10 && scrollTop > lastScrollTop) {
            // 触发翻页动画
            labyrinthContent.classList.add('page-turn');
            setTimeout(() => {
                labyrinthContent.classList.remove('page-turn');
            }, 1000);
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // 避免负滚动值
    }
    
    // 添加滚动事件监听
    labyrinthContent.addEventListener('scroll', handleScroll);
    
    // 在返回时移除滚动监听
    backBtn.addEventListener('click', () => {
        labyrinthContent.removeEventListener('scroll', handleScroll);
    });
}

// 处理密码验证和文件读取
async function handlePasswordSubmit() {
    const enteredPassword = passwordInput.value.trim();
    
    if (!enteredPassword) {
        showError('Please enter a password.');
        return;
    }
    
    try {
        // 解密文本
        var decryptedContent = await decrypt(LABYRINTH_CONTENT, enteredPassword);

        // 密码正确，隐藏错误消息
        hideError();
        
        // 显示内容
        displayLabyrinthContent(decryptedContent);
    } catch (error) {
        console.error('Error:', error);
        showError('Password incorrect.');
    }
}

// 添加焦点事件处理
passwordInput.addEventListener('focus', hideError);

// 添加点击事件处理
submitBtn.addEventListener('click', handlePasswordSubmit);

// 添加回车键提交功能
passwordInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        handlePasswordSubmit();
    }
});

// 添加输入实时反馈
passwordInput.addEventListener('input', () => {
    if (errorMessage.classList.contains('show')) {
        hideError();
    }
});

// 添加简单的动画效果
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    /* 成功动画 */
    .success-animation {
        animation: successFade 0.5s ease;
        border-color: #2ecc71 !important;
    }
    
    @keyframes successFade {
        0% { border-color: #3498db; }
        100% { border-color: #2ecc71; }
    }
    
    /* 提交按钮加载状态 */
    .loading {
        position: relative;
        pointer-events: none;
    }
    
    .loading::after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        top: 0;
        left: 50%;
        margin-left: -8px;
        border: 2px solid #f3f3f3;
        border-top: 2px solid #3498db;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
`;

document.head.appendChild(styleSheet);