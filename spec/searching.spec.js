describe('Search', function () {
    describe('linearSearch', () => {
        it('takes an array and an element to find, returns the index of the found element', function () {
            let data = [10,7,4,2,1,5,8,3,9,6];
            let searchItem = 7;
            let output = Search.linearSearch(data,searchItem)
            expect(output.result).toEqual(1);
        });
        it('given an array of 10 elements, finding the last element should take 10 computations', function () {
            let data = [10,7,4,2,1,5,8,3,9,6];
            let searchItem = 6;
            let output = Search.linearSearch(data,searchItem)
            expect(output.computations).toEqual(10);
        });
        it('returns -1 when item not found, computations should equal array size', function () {
            let data = [10,7,4,2,1,5,8,3,9,6];
            let searchItem = 11;
            let output = Search.linearSearch(data,searchItem);
            expect(output.result).toEqual(-1);
            expect(output.computations).toEqual(data.length);
        });
    });
});

describe('BST', function () {
    var bst;
    beforeEach(function () {
        bst = new BinarySearchTree();
    });
    describe('insert', () => {
        xit('should insert element with key 8 correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'number',
            },
        });
        expect(bst.find(8).result).toBeTruthy();
        });
        xit('should insert elements with key 8, 10, 3 correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 10,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 3,
            data: {
            name: 'number',
            },
        });
        expect(bst.find(8).result).toBeTruthy();
        expect(bst.find(10).result).toBeTruthy();
        expect(bst.find(3).result).toBeTruthy();
        });
        xit('should insert elements with key 8, 10, 3, 1, 6, 14 correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 10,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 3,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 1,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 6,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 14,
            data: {
            name: 'number',
            },
        });
        bst.insert({
            key: 13,
            data: {
            name: 'number',
            },
        });
        expect(bst.find(8).result).toBeTruthy();
        expect(bst.find(10).result).toBeTruthy();
        expect(bst.find(3).result).toBeTruthy();
        expect(bst.find(1).result).toBeTruthy();
        expect(bst.find(6).result).toBeTruthy();
        expect(bst.find(14).result).toBeTruthy();
        expect(bst.find(13).result).toBeTruthy();
        });
    });
    describe('find', () => {
        it('given an array of 10 elements finding last item should take 5 or less computations', function () {

            bst.insert({key:10,data:{name:'ten'}});
            bst.insert({key:7,data:{name:'seven'}});
            bst.insert({key:4,data:{name:'four'}});
            bst.insert({key:2,data:{name:'two'}});
            bst.insert({key:1,data:{name:'one'}});
            bst.insert({key:5,data:{name:'five'}});
            bst.insert({key:8,data:{name:'eight'}});
            bst.insert({key:3,data:{name:'three'}});
            bst.insert({key:9,data:{name:'nine'}});
            bst.insert({key:6,data:{name:'six'}});
            let output = bst.find(6);
            expect(output.computations <= 5).toBeTruthy();
        });
        xit('should find element with key 8 correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'eight',
            },
        });
        expect(bst.find(8).result).toBeTruthy();
        });
        xit('should find elements with key 8, 10, 3 correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'eight',
            },
        });
        bst.insert({
            key: 10,
            data: {
            name: 'ten',
            },
        });
        bst.insert({
            key: 3,
            data: {
            name: 'three',
            },
        });
        expect(bst.find(8).result).toBeTruthy();
        expect(bst.find(10).result).toBeTruthy();
        expect(bst.find(3).result).toBeTruthy();
        });
        xit('should find elements with key 8, 10, 3, 1, 6, 14 correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'eight',
            },
        });
        bst.insert({
            key: 10,
            data: {
            name: 'ten',
            },
        });
        bst.insert({
            key: 3,
            data: {
            name: 'three',
            },
        });
        bst.insert({
            key: 1,
            data: {
            name: 'one',
            },
        });
        bst.insert({
            key: 6,
            data: {
            name: 'six',
            },
        });
        bst.insert({
            key: 14,
            data: {
            name: 'fourteen',
            },
        });
        bst.insert({
            key: 13,
            data: {
            name: 'thirteen',
            },
        });
        expect(bst.find(8).result).toBeTruthy();
        expect(bst.find(10).result).toBeTruthy();
        expect(bst.find(3).result).toBeTruthy();
        expect(bst.find(1).result).toBeTruthy();
        expect(bst.find(6).result).toBeTruthy();
        expect(bst.find(14).result).toBeTruthy();
        expect(bst.find(13).result).toBeTruthy();
        });
    });
    describe('toArray', () => {
        xit('should return and array with data three, eight, and ten correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'eight',
            },
        });
        bst.insert({
            key: 10,
            data: {
            name: 'ten',
            },
        });
        bst.insert({
            key: 3,
            data: {
            name: 'three',
            },
        });
        const array = bst.toArray();
        expect(array[0].data.name).toBe('three');
        expect(array[1].data.name).toBe('eight');
        expect(array[2].data.name).toBe('ten');
        });
        xit('should return and array with data one, three, six, eight, ten, thirteen, fourteen correctly', function () {
        bst.insert({
            key: 8,
            data: {
            name: 'eight',
            },
        });
        bst.insert({
            key: 10,
            data: {
            name: 'ten',
            },
        });
        bst.insert({
            key: 3,
            data: {
            name: 'three',
            },
        });
        bst.insert({
            key: 1,
            data: {
            name: 'one',
            },
        });
        bst.insert({
            key: 6,
            data: {
            name: 'six',
            },
        });
        bst.insert({
            key: 14,
            data: {
            name: 'fourteen',
            },
        });
        bst.insert({
            key: 13,
            data: {
            name: 'thirteen',
            },
        });
        const array = bst.toArray();
        expect(array[0].data.name).toBe('one');
        expect(array[1].data.name).toBe('three');
        expect(array[2].data.name).toBe('six');
        expect(array[3].data.name).toBe('eight');
        expect(array[4].data.name).toBe('ten');
        expect(array[5].data.name).toBe('thirteen');
        expect(array[6].data.name).toBe('fourteen');
        });
    });
});
