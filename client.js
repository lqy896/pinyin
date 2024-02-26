var ak = "5cf1d64d351f4b9e8a9b9b41091b8ef1";
var sk = "95be2f578ffb4c708e551b3627f77a5d";
var key = "xml_homework";
var endPoint = "https://su.bcebos.com";
var bk = "liqinyu01";

var config = {
    endpoint: endPoint,
    credentials: {
        ak: ak,
        sk: sk
    }
};
var client = new baidubce.sdk.BosClient(config);