/*
 * 数据输入和输出接口测试
 * 使用jasmine测试框架编写
 *
 * @usage:
 * 1. install jasmine:
 *      npm install jasmine-node
 * 2. cd to project folder, and run
 *      jasmine .
 */

describe("professor x", function() {

    var task = '10bec59';

    afterEach(function(){
        removeTask( task );
    });

    describe("数据输入", function(){

        it("原先没有的数据也可以正确设值", function(){
            beancon( task );
            expect( get( task, '*' ).count ).toEqual( 1 );
        });

        it("在原有的数据继续统计", function(){
            beancon( task );
            expect( get( task, '*' ).count ).toEqual( 1 );

            beancon( task, { name: 'qhwa' } );
            expect( get( task, '*' ).count ).toEqual( 2 );
            expect( get( task, 'name' ).count ).toEqual( 1 );
        });

    });


    function beacon( task, obj ){
        //TODO: implement it
    }

    function put( task, field, param ){
        //TODO: implement it
    }

    function get( task, field, time ){
        //TODO: implement it
        {
            count: 0,
            total: 0
        }
    }

    function removeTask( task ){
        //TODO: implement it
    }

});
