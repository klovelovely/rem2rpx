# rem 转 rpx

rem 单位批量转换为微信小程序专用的 rpx 单位

# todo

- [x] 1rem 在 while 循环中无法识别的问题, 原因在于:

    1.  当前正则表达式通过全局匹配标识符 //g 进行匹配时, 此正则表达式对象自身的 lastIndex 属性值会默认保存上次匹配时的 index, 然后每次的匹配都会从 lastIndex 开始.
    
        当然, 如果没有全局匹配标识符, 则每次匹配时的 lastIndex 总是为 0.
        
    2.  splice 替换导致要匹配的 sourceString 整体长度发生了变化