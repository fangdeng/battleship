professor X : X 教授

功能介绍: X教授是battleship中的数据保存、分析和呈现模块，负责提供仪表板显示和各种报表输出。

独立于界面之外，prefessorX以restful API的方式提供数据输入和输出的服务

## 数据输入

    # 相对地改变字段的值
    post /<任务id>/<字段名称>

    # 设置字段为新的数值
    update /<任务id>/<字段名称>

    # 删除字段
    delete /<任务id>/<字段名称>

    # 删除任务
    delete /<任务id>


例如,如果有任务browser-stat, 字段ie6, 下列请求后ie6字段的值分别为:

`{ value: x }` 代表form中的数值

    post    /browser-stat/ie6       # => 0
    post    /browser-stat/ie6
            { value : 5 }           # => 5
    post    /browser-stat/ie6
            { value : 10 }          # => 15
    post    /browser-stat/ie6
            { value : -4 }          # => 11
    update  /browser-stat/ie6
            { value : 200 }         # => 200
    delete  /browser-stat/ie6       # => null
    post    /browser-stat/ie6
            { value : 15.4 }        # => 15.4

### 输入以前的数据
以上都是输入当前的数据，存储的时候会以Time.now()来存储时间。我们也可以指定记录的时间:

    post    /browser-stat/ie6
            { value: 5, at: "2011-04-01 18:34:53" }

    update  /browser-stat/ie6
            { value: 430, at: "2012-04-01 18:34:53" }

## 数据输出

    # 返回任务所有字段的当前值
    get /<任务id>

    # 返回任务在指定时刻所有字段的值
    get /<任务id>/at/<时刻>

    # 返回当前值
    get /<任务id>/<字段名称>

    # 返回字段在指定时刻的值
    get /<任务id>/<字段名称>/at/<时刻>

## 任务管理

    # 新增任务
    post    /tasks

    # 修改任务
    update  /tasks

    # 删除任务
    delete  /tasks
    
