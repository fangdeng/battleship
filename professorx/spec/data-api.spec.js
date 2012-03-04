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

    var task = 'action';

    afterEach(function(){
        removeTask( task );
    });

    it("收到请求时可以创建数据", function(){
        post( task, 'click' );
        expect( get( task, 'click') ).toEqual(0);

        post( task, 'doubleclick' );
        expect( get( task, 'doubleclick') ).toEqual(0);
    });

    it("可以通过请求增加或减少数据", function(){

        describe("原先没有的数据也可以正确设值", function(){
            post( task, 'click', { value: 5 } );
            expect( get( task, 'click' ) ).toEqual( 5 );
        });

        post( task, 'click', { value: 10 } );
        expect( get( task, 'click' ) ).toEqual( 15 );

        post( task, 'click', { value: -10 } );
        expect( get( task, 'click' ) ).toEqual( 5 );

        post( task, 'click', { value: 1.5 } );
        expect( get( task, 'click' ) ).toEqual( 6.5 );
    });

    it("可以通过请求更新原有的值", function(){

        describe("原先没有的数据也可以正确设值", function(){
            update( task, 'click', { value : 100 } );
            expect( get( task, 'click' ) ).toEqual( 100 );
        });

        update( task, 'click', { value : 150 } );
        expect( get( task, 'click' ) ).toEqual( 150 );
    });


    function post( task, field, param ){
        //TODO: implement it
    }

    function update( task, field, param ){
        //TODO: implement it
    }

    function get( task, field, time ){
        //TODO: implement it
    }

    function removeTask( task ){
        //TODO: implement it
    }

});
