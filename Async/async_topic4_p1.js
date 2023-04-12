/*Promise.resolve({
    then: (cd) => {
        cd()
    }
})*/

async function testB() {
    return {
        then(cd) {
            cd();
        }
    }
}

testB().then(() => {
    console.log('1')
})

Promise.resolve()
    .then(() => {
        console.log('2')
    })
    .then(() => {
        console.log('3')
    })

