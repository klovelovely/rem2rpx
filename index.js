// 批量转换按钮
document.querySelector("#convertButton").addEventListener("click", function () {
    convertCode(document.querySelector("#source").value)
});

// 批量转换 handler
function convertCode(sourceString, options = {
    rem: 32,
    reg: new RegExp(/(\d+\.\d+|\.\d+|\d+)rem/g)
}) {
    let i = 0, result, start, end, matchedValue, rpxValue;

    // rem 单位的值转换为 rpx
    while ((result = options.reg.exec(sourceString)) !== null) {

        start = result.index;
        end = options.reg.lastIndex;
        /*console.log(JSON.stringify(result), start, end, sourceString.slice(start, end));*/

        // 用 end - 3 移除数字后面的 rem 单位
        matchedValue = Number(sourceString.slice(start, end - 3));
        rpxValue = matchedValue * options.rem;
        /*console.log('matchedValue 长度: ', matchedValue.toString().length, ' rpxValue 长度: ', rpxValue.toString().length);*/

        sourceString = sourceString.split("");
        sourceString.splice(start, end - start, rpxValue + "rpx");
        sourceString = sourceString.join("");

        options.reg.lastIndex += rpxValue.toString().length - matchedValue.toString().length;
        /*console.log('修正后的 options.reg.lastIndex 为: ', options.reg.lastIndex);
         console.warn(sourceString.slice(options.reg.lastIndex, options.reg.lastIndex + 20));
         console.log('------------------------------------------------------------')*/

        i++;
    }

    let target = document.querySelector("#target");
    if (target) {
        target.value = sourceString;
        target && target.select();
    }

    return sourceString;
}
