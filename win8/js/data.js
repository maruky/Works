var dataPop = {
    pop1:[
        {tag: 'div',classes: ['pop'],id:['pop1'],child:[{tag: 'div',classes:['header'],child:[
            {tag: 'div',classes:['h-left', 'fl'],child:[
                {tag: 'span', classes: ['hl', 'hl-1']},
                {tag: 'div', classes: ['h-left-2', 'fl'],child:[
                            {tag: 'span', classes: ['hl', 'hl-2']},
                            {tag: 'span', classes: ['hl', 'hl-3']},
                            {tag: 'span', classes: ['hl', 'hl-4']}
                        ]}  

                            ]},{
                            tag: 'span',classes:['h-name'],innerHTML:'这台电脑'
                        },{
                            tag: 'div', classes: ['h-right', 'fr'],child: [
                                {tag: 'span', classes: ['min', 'active', 'fl'],child:[
                                    {tag:'em'}
                                ]},
                                {tag: 'span', classes: ['max', 'active', 'fl'],child:[
                                    {tag:'em'}
                                ]},
                                {tag: 'span', classes: ['close', 'active', 'fl'],child:[
                                    {tag:'em', innerHTML: 'x', classes:['close']}
                                ]}

                            ]
                        }
                    ]
                },
                {tag: 'div', classes:['menu'], child: [{tag:'ul', classes: ['menuList', 'fl'],child:[{tag: 'li', innerHTML:'文件'},{tag: 'li', innerHTML:'计算机'},{tag: 'li', innerHTML:'查看'}]}, {tag:'div', classes:['menu-r', 'fr'], child:[{tag:'span', classes:['pull']}, {tag:'span', classes:['qus']}]}]},
                {tag:'div', classes: ['searchBox'], child:[{tag:'em'}, {tag:'div', classes:['search', 'fl'], child:[{tag: 'input'}]}, {tag:'div', classes:['search', 'fl'], child:[{tag: 'input'}]}] },
                {tag:'div', classes:['cont'],child:[{tag:'div', classes: ['cont-l', 'fl'], child:[
                    {tag:'div', classes:['col'],child:[
                        {tag: 'h3', child:[{tag:'span'},{tag:'i', innerHTML:'收藏夹'}] }
                    ]},{tag:'div', classes:['com'],child:[
                        {tag: 'h3', child:[{tag:'span'},{tag:'i', innerHTML:'这台电脑'}]}
                    ]},{tag:'div', classes:['net'],child:[
                        {tag: 'h3', child:[{tag:'span'},{tag:'i', innerHTML:'网络'}]}
                    ]}
                ]}, {tag:'div', classes:['cont-r', 'fl'], child: [{tag:'div', classes:['cDisk', 'fl']}]}]}
            ]
        }
    ],
    pop2:[
        {tag:'div', id:['pop2'],child:[{tag:'div', classes:['popCont'], child:[{tag:'div', classes:['head'], child:[{tag:'h3', classes:['fl'], innerHTML:'开始'},{
            tag:'ul', classes:['h-list', 'fr'],child:[
            {tag:'li', innerHTML:'marukyFish'}, {tag:'li',classes:['userPhoto']}]
        }]}, {tag:'div', classes:['cont'], child:[{
            tag:'div', classes:['desk'],child:[{
                tag:'span', innerHTML:'桌面'
            }]
        }]}]}]}
    ]
}
 
 var dataIcon = [
    {
        softName: '我的电脑',
        softSrc: 'images/MyComputer.png',
        popId: 'pop1'
    },
    {
        softName: '新建文件夹',
        softSrc: 'images/folder.ico',
        popId: 'pop1'
    },
    {
        softName: '回收站',
        softSrc: 'images/empty.png'
    },
    {
        softName: 'qq',
        softSrc: 'images/qq.jpg',
        popId: 'pop2'
    }
    ];

    var dataMenu = {
        deskTop:[{'查看':['大图标', '中等图标', '小图标']}, '刷新', {'新建': ['文件夹']}, '个性化'],
        soft: ['打开', '固定到开始屏幕', '固定到任务栏', '剪切', '复制']
    }