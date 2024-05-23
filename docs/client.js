var BceUtil = function () {
    var me = this;
    var ak = "5cf1d64d351f4b9e8a9b9b41091b8ef1";
    var sk = "95be2f578ffb4c708e551b3627f77a5d";
    var key = "xml_homework";
    var endPoint = "https://su.bcebos.com";
    var bk = "liqinyu01";
    var bkUrl = "https://liqinyu01.su.bcebos.com/"

    var jsonObj = {
        data: []
    };

    var config = {
        endpoint: endPoint,
        credentials: {
            ak: ak,
            sk: sk
        }
    };

    $.ajaxSetup({ cache: false });

    var client = new baidubce.sdk.BosClient(config);

    me.httpGet = function (url) {
        return new Promise((resolve, reject) => {
            $.get(url, function (data) {
                resolve(data);
            });
        })
    };

    me.putStr = function () {
        var str = $("#strId").val();
        if (str == "" || str == undefined || str == null) {
            alert("内容为空");
            return;
        }
        str = str.replace("\n", "</br>");
        jsonObj.data.push({ text: str });
        me.bcePutStr();
        $("#strId").val("");
    }


    me.bcePutStr = function () {
        var jsonStr = JSON.stringify(jsonObj);
        console.log("上传", jsonStr);

        client.putObjectFromString(bk, key, jsonStr)
            .then(response => alert("成功"))
            .catch(error => alert("error"));
    };

    me.clearStr = function () {
        if (confirm("清空数据？")) {
            jsonObj.data.forEach(element => {
                console.log(element);
                if (element.img) {
                    var k = element.img.substring(element.img.lastIndexOf("/") + 1)
                    me.deleteObject(k)
                }
            });
            jsonObj = {};
            jsonObj.data = [];
            me.bcePutStr(jsonObj);
        }

    };

    me.deleteObject = function (k) {
        client.deleteObject(bk, k);
    };

    me.uploadImg = function () {
        var fs = $("#fileId").prop("files")
        if (fs == null || fs == undefined || fs.length == 0) {
            alert("空文件")
            return;
        }

        var keyImg = Date.now() + ".jpg";
        console.log("file key", keyImg);
        client.putObjectFromBlob(bk, keyImg, fs[0]).then(res => {
            jsonObj.data.push({ img: bkUrl + keyImg });
            me.bcePutStr(jsonObj);
            $("#fileId").val("");
        }).catch(error => alert("error"));

    };

    me.fetchStr = function () {
        return new Promise((resolve, reject) => {
            me.httpGet(bkUrl + key)
                .then(data => {
                    if (data) {
                        jsonObj = JSON.parse(data);
                        if (!jsonObj.data) {
                            jsonObj.data = [];
                        }
                        resolve()
                    } else {
                        jsonObj = {};
                        jsonObj.data = [];
                    }
                });
        });

    };

    me.createDom = function () {
        me.fetchStr()
            .then(res => {
                createView();
            })
    }

    function createView() {
        var str = "";
        for (var i = 0; i < jsonObj.data.length; i++) {
            var a = jsonObj.data[i];
            if (a.text) {
                str += "<div class='big-font'>" + a.text + "</div> <hr>";
            }
            if (a.img) {
                str += "<div><img class='my-img' src='" + a.img + "'/></div> <hr>";
            }
        }
        console.log(str);
        $("#d001").html(str);
    }

}

