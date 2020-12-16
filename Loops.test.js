const { TestScheduler } = require('jest');
const Loops = require('./Loops');

test("test for one to ten",()=>{
    //Given
    let loops = new Loops();
    let expected = "1\n2\n3\n4\n5\n6\n7\n8\n9\n10\n";
    //When
    let actual = loops.oneToTen();
    //Then
    expect(actual).toEqual(expected)
})


test("test for squared numbers", ()=>{
        // Given
        let loops = new Loops();
        let expected =  "1\n4\n9\n16\n25\n36\n49\n64\n81\n100\n";
        // When
        let actual = loops.loopsSquared();
        // Then
        expect(actual).toEqual(expected);
})


test("test for even under", () => {
        // Given
        let loops = new Loops();
        let expected = "2\n4\n6\n8\n10\n12\n14\n16\n18\n";
        // When
        let actual = loops.evenUnder(20);
        // Then
        expect(actual).toEqual(expected);
})

test("test for sumTo", () => {
    //Given
    let loops = new Loops();
    let expected = 35;
    //when
    let actual = loops.sumTo(5,10);
    //Then
    expect(actual).toEqual(expected);
})

test("test for triangle", () => {
    //Given
    let loops = new Loops();
    let expected = "*\n**\n***\n****\n*****\n";
    //When
    let actual = loops.triangle(5);
    //Then
    expect(actual).toEqual(expected);
})

test("test for 4x4 table", () => {
    //Given
    let loops = new Loops();
    let expected = "| 1 | 2 | 3 | 4 |\n| 2 | 4 | 6 | 8 |\n| 3 | 6 | 9 | 12 |\n| 4 | 8 | 12 | 16 |\n";
    //When
    let actual = loops.multiplyTable();
    //Then
    expect(actual).toEqual(expected);

})

test("test for 6x6 table", () => {
    //Given
    let loops = new Loops();
    let expected = "| 1 | 2 | 3 | 4 | 5 | 6 |\n| 2 | 4 | 6 | 8 | 10 | 12 |\n| 3 | 6 | 9 | 12 | 15 | 18 |\n| 4 | 8 | 12 | 16 | 20 | 24 |\n";
    //When
    let actual = loops.multiplicationTable();
    //Then
    expect(actual).toEqual(expected);

})

