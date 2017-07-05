var source = document.querySelector("#source");
var strSource = source.value;
var target = document.querySelector("#target");
var reg = new RegExp(/(\d+\.\d+|\.\d+|\d+)rem/g);

function convertCode() {
    var i = 0, result, start, end, matchedValue, rpxValue;

    // rem 单位的值转换为 rpx
    while ((result = reg.exec(strSource)) !== null) {
        start = result.index;
        end = reg.lastIndex;
        console.log(result, start, end);
        // 用 - 3 移除 rem
        matchedValue = Number(strSource.slice(start, end - 3));
        // 多了一个 "* 2" 是由于除发现页之外, 之前所有页面使用的 rem 单位都是基于 750 设计图除以 2 得出的
        rpxValue = matchedValue * 16 * 2;
        strSource = strSource.split("");
        strSource.splice(start, end - start, rpxValue + "rpx");
        strSource = strSource.join("");
        i++;
    }

    target.value = strSource;
    target.select();
}

document.querySelector("#convertButton").addEventListener("click", convertCode);
