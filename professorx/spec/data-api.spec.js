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

        describe("可以设置数据变化的时刻", function(){

            describe("过去的变化会影响现在", function(){
                post( task, 'click', { value: 3, at: Date.now() - 5 * 3600 * 1000 } );
                expect( get( task, 'click' ) ).toEqual( 9.5 );
            });

            describe("可以获取过去的数据", function(){
                var time = Date.now() - 4 * 3600 * 1000;
                expect( get( task, 'click', time ) ).toEqual( 3 );

                describe("超过了创建的时间,应该返回null", function(){
                    time -= 2 * 3600 * 1000;
                    expect( get( task, 'click', time ) ).toBeNull();
                });
            });
        });
    });

    it("可以通过请求更新原有的值", function(){

        describe("原先没有的数据也可以正确设值", function(){
            update( task, 'click', { value : 100 } );
            expect( get( task, 'click' ) ).toEqual( 100 );
        });

        update( task, 'click', { value : 150 } );
        expect( get( task, 'click' ) ).toEqual( 150 );

        describe("可以设置数据更新的时刻", function(){
            var time = Date.now() - 4 * 3600 * 1000;
            update( task, 'click', { value: 500, at: time } );

            describe("可以正确获取过去更新的数据",function(){
                expect( get( task, 'click', time + 1000 ) ).toEqual( 500 );
            });

            describe("过去设置的数据对现在的update没有影响", function(){
                expect( get( task, 'click' ) ).toEqual( 150 );
            });
        });
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
