/**
 * Created by Maxi on 6/11/2016.
 */
console.debug('loading agenda');

function getRow(person){
    var firstName= person.firstName;
    var lastName= person.lastName;
    var row= '<tr><td>'+ firstName +'</td><td>' + lastName +'</td><td>0752094424</td></tr>';
    return row;
}

var contacts= [
        {firstName: 'Nicolae',lastName:'Matei'},
        {firstName:'Pop',lastName:'Andrei'},
        {firstName:'Sebi',lastName:'X'},
        {firstName:'Oana',lastName:'Y'},
        {firstName:'Ramo',lastName:'A'},
        {firstName:'Ramo',lastName:'B'}
];

for (var i = 0; i<contacts.length; i++){
    var person= contacts[i];
    $('#agenda tbody').append(getRow(person));
}