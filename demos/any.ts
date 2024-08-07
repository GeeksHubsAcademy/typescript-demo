const data = '"2"'


const result: unknown = JSON.parse(data);

if (typeof result === 'number') {

    console.log(result.toFixed(2), typeof result);

}
