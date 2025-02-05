// ==UserScript==
// @name         微博热榜定时抓取与关键字提醒
// @namespace    your_namespace_here
// @version      1.0
// @description  定时抓取微博热榜，根据设置的关键字弹出提示信息
// @author       Your Name
// @match        https://weibo.com/hot/mine
// @grant        GM_addStyle
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_registerMenuCommand
// @grant        GM_xmlhttpRequest
// @grant        GM_notification
// ==/UserScript==

(function() {
    'use strict';

    // 创建存储设置的对象
    const settings = {
        interval: 60 * 1000, // 默认1分钟抓取一次，单位毫秒，可调整
        keywords: [] // 存储关键字的数组
    };

    // 从存储中获取之前保存的设置并更新settings对象
    const savedSettings = GM_getValue('weiboHotSearchSettings', {});
    if (savedSettings.interval) {
        settings.interval = savedSettings.interval;
    }
    if (savedSettings.keywords) {
        settings.keywords = savedSettings.keywords;
    }

    // 创建用于设置定时时间和关键字的UI
    function createSettingsUI() {
        const settingsDiv = document.createElement('div');
        settingsDiv.style.position = 'fixed';
        settingsDiv.style.top = '10px';
        settingsDiv.style.right = '10px';
        settingsDiv.style.backgroundColor = 'white';
        settingsDiv.style.padding = '10px';
        settingsDiv.style.border = '1px solid gray';
        settingsDiv.style.zIndex = '9999';

        const intervalInputLabel = document.createElement('label');
        intervalInputLabel.textContent = '定时时间（毫秒）：';
        const intervalInput = document.createElement('input');
        intervalInput.type = 'number';
        intervalInput.value = settings.interval;

        const keywordsInputLabel = document.createElement('label');
        keywordsInputLabel.textContent = '关键字（多个用逗号分割）：';
        const keywordsInput = document.createElement('input');
        keywordsInput.value = settings.keywords.join(',');

        const saveButton = document.createElement('button');
        saveButton.textContent = '保存设置';
        saveButton.addEventListener('click', function() {
            settings.interval = parseInt(intervalInput.value, 10);
            settings.keywords = keywordsInput.value.split(',').map(keyword => keyword.trim()).filter(keyword => keyword!== '');
            GM_setValue('weiboHotSearchSettings', settings);
            alert('设置已保存！');
        });

        settingsDiv.appendChild(intervalInputLabel);
        settingsDiv.appendChild(intervalInput);
        settingsDiv.appendChild(keywordsInputLabel);
        settingsDiv.appendChild(keywordsInput);
        settingsDiv.appendChild(saveButton);

        document.body.appendChild(settingsDiv);
    }

    createSettingsUI();

    // 开始定时任务
    function startMonitoring() {
        setInterval(() => {
            fetch("https://weibo.com/ajax/statuses/mineBand", {
                "headers": {
                    "accept": "application/json, text/plain, */*",
                    "accept-language": "zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6",
                    "client-version": "v2.0",
                    "priority": "u=1, i",
                    "sec-ch-ua": "\"Microsoft Edge\";v=\"131\", \"Chromium\";v=\"131\", \"Not_A Brand\";v=\"24\"",
                    "sec-ch-ua-mobile": "?0",
                    "sec-ch-ua-platform": "\"Windows\"",
                    "sec-fetch-dest": "empty",
                    "sec-fetch-mode": "cors",
                    "sec-fetch-site": "same-origin",
                    "server-version": "v2024.12.04.1",
                    "x-requested-with": "XMLHttpRequest",
                    "x-xsrf-token": "rtbjt__xDzb4Y0uOk1ZDMBgd"
                },
                "referrer": "https://weibo.com/hot/mine",
                "referrerPolicy": "strict-origin-when-cross-origin",
                "body": null,
                "method": "GET",
                "mode": "cors",
                "credentials": "include"
            })
           .then(response => response.json())
           .then(data => {
                const hotList = data.data.realtime || [];
                let matchedCount = 0;
                let titles = []
                const currentTime = new Date().toLocaleString();
                for (const item of hotList) {
                    const title = item.word_scheme || '';
                    for (const keyword of settings.keywords) {
                        if (title.includes(keyword)) {
                            matchedCount++;
                            titles.push(title + `符合关键字${keyword}\n`);
                            break;
                        }
                    }
                }
                  if (matchedCount > 0) {
                    const notificationTitle = `微博热榜关键字匹配`;
                    const notificationMessage = `符合关键字的热搜有 ${matchedCount} 条，时间：${currentTime}`;
                    const titlesString = titles.join('\n');
                    notificationMessage+=`\n${titlesString}`
                    console.log();
                    GM_notification({
                        title: notificationTitle,
                        text: notificationMessage
                    });
                }
            })
           .catch(error => {
                console.error('抓取微博热榜出现错误：', error);
            });
        }, settings.interval);
    }


 startMonitoring();

})();