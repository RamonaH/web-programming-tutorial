/**
 * Created by Maxi on 6/11/2016.
 */
console.debug('1) loading agenda');

function getRow(person){
    var firstName= person.firstName;
    var lastName= person.lastName;
    var row= '<tr><td>'+ firstName +'</td><td>' + lastName +'</td><td>0752094424</td></tr>';
    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"
}).done(function(contacts) {
   console.debug (' 3) ajax done',contacts);
    showContacts(contacts);
});

console.debug(' 2) after ajax');

function showContacts (contacts){
    for (var i = 0; i<contacts.length; i++){
        var person= contacts[i];
        $('#agenda tbody').append(getRow(person));
    }
}