// 使用函数式编程范式模拟继承.
function withTimestamp(originalFunction) {
    // 该函数的作用主要是为了操作originalFunction函数.
    return function (...args) {
        // 输出时间.
        console.log('Timestamp:', Date.now());
        return originalFunction(...args);
    }
}

function withLogging(originalFunction) {
    // 该函数的作用主要是为了操作originalFunction函数.
    return function (...args) {
        console.log('Arguments', ...args);
        const result = originalFunction(...args);
        console.log('Result:', result);
        return result;
    }
}


function processData(data) {
    return data.toUpperCase();
}

// 组合多个高阶函数，模拟继承功能.
const enhancedProcessData = withTimestamp(withLogging(processData));
// console.log(enhancedProcessData("hello"));

// 面向对象编程范式基础.

// 基类.
class Processor {
    process(data) {
        return data.toUpperCase();
    }
}

const processor = new Processor();

console.log(processor.process('hello'));

class LoginProcessor extends Processor {
    process(data) {
        console.log('Arguments', data);
        // 调用父类.
        const result = super.process(data);
        console.log('Result:', result);
        return result;
    }
}

class TimestampProcessor extends LoginProcessor {
    process(data) {
        console.log('Timestamp:', Date.now());
        return super.process(data);
    }
}

const timestampProcessor = new TimestampProcessor();
console.log(timestampProcessor.process('hello'));
