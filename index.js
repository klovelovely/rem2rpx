// 配置 rem, 即移动端页面中 html 的 font-size
var rem = 32;

// 初始化必要信息
var source = document.querySelector("#source");
var sourceString = source.value;
var target = document.querySelector("#target");
var reg = new RegExp(/(\d+\.\d+|\.\d+|\d+)rem/g);

function convertCode() {
    var i = 0, result, start, end, matchedValue, rpxValue;

    // rem 单位的值转换为 rpx
    while ((result = reg.exec(sourceString)) !== null) {

        start = result.index;
        end = reg.lastIndex;
        console.log(JSON.stringify(result), start, end, sourceString.slice(start, end));

        // 用 - 3 移除 rem 单位
        matchedValue = Number(sourceString.slice(start, end - 3));
        // 多了一个 "* 2" 是由于除发现页之外, 之前所有页面使用的 rem 单位都是基于 750 设计图除以 2 得出的
        rpxValue = matchedValue * rem;
        console.log('matchedValue 长度: ', matchedValue.toString().length, ' rpxValue 长度: ', rpxValue.toString().length);

        sourceString = sourceString.split("");
        sourceString.splice(start, end - start, rpxValue + "rpx");
        sourceString = sourceString.join("");

        reg.lastIndex += rpxValue.toString().length - matchedValue.toString().length;
        console.log('修正后的 reg.lastIndex 为: ', reg.lastIndex);
        console.warn(sourceString.slice(reg.lastIndex, reg.lastIndex + 20));
        console.log('------------------------------------------------------------')

        i++;
    }

    target.value = sourceString;
    target.select();
}

document.querySelector("#convertButton").addEventListener("click", convertCode);
