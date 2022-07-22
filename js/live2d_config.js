    L2Dwidget.init({
        model: {
            scale: 1,
            hHeadPos: 0.5,
            vHeadPos: 0.618,
            jsonPath: 'https://cdn.jsdelivr.net/gh/DomathID/live2d-model@main/Miku/miku.model.json',       // xxx.model.json 的路径,换人物修改这个
        },
        display: {
            superSample: 9,     // 超采样等级，相当于清晰度，数值越高越清晰
            width: 300,         // canvas的宽度
            height: 400,        // canvas的高度
            position: 'left',   // 显示位置：左或右
            hOffset: 0,         // canvas水平偏移，正方向为右
            vOffset: 0,         // canvas垂直偏移
        },
        mobile: {
            show: true,         // 是否在移动设备上显示
            scale: 1,           // 移动设备上的缩放
            motion: true,       // 移动设备是否开启重力感应
        },
        react: {
            opacityDefault: 1,  // 默认透明度
            opacityOnHover: 1,  // 鼠标移上透明度
        },
     });
