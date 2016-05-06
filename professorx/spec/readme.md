professor X : X 教授

功能介绍: X教授是battleship中的数据保存、分析和呈现模块，负责提供仪表板显示和各种报表输出。

独立于界面之外，prefessorX以restful API的方式提供数据输入和输出的服务

数据输入
--------

客户端将要记录的数据封装成一个json字符串，经过base64编码后传给服务器。

### json 数据格式

必须包含tid字段：

    { 
        "tid": <任务id>,
        "key": value
    }

其他数据可以是单层，也可以多层包装，例如：

    {
        "tid"       : "10bec59",        //tid必须

        "browser"   : {                 //可以使用object
            "shell" : "Sogou",
            "core"  : {                 //可以多层
                name    : "trident",
                version : "5"
            }
        },

        "screen"    : {
            "w"     : 1920,
            "h"     : 1200
        },

        "flash"     : "11.0 DEBUG"      //单层
    }

也可以没有其他key，只传一个tid

    { "tid": "10bec59" }

### base64 编码

对json字符串以base64编码

### 发送到服务器

    GET /beacon?data=<base64编码后的字符串>

数据统计和查询
--------------

    GET /task/<任务id>/<查询类型>/<查询条件 base64>

### 查询类型

* info : 简要信息，包括count,last_seen信息

    {
        count: 数量,
        last_seen: 最后一次更新时间
    }

* count : 求数量
* summ  : 求总和
* average : 求平均值

### 查询条件
类css3选择器语法

* \*     : 默认条件，查询所有记录（此时可以省略查询条件）
* browser : 查询含有browser字段的记录
* browser.core.name=trident : 查询符合条件的记录
* browser.core.name=trident && browser.shell=360SE : 查询符合条件的记录
* flash.version > 10
