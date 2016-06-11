/**
 * Created by Maxi on 6/11/2016.
 */
console.debug('1) loading agenda');

function getRow(person){
    var firstName= person.firstName;
    var lastName= person.lastName;
    var phone= person.phone;
    var row= '<tr>' +
        '<td>'+ firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>'+ phone+'</td>'+
        '<td><button data-id="'+ person.id + '">remove</button></td>'+
        '</tr>';
    return row;
}

$.ajax({
    url: "js/mocks/load-contacts.json"
}).done(function(contacts) {
   console.debug (' 3) ajax done',contacts);
    showContacts(contacts);
});

function removeContact(id){


    $.ajax({
        url: "js/mocks/remove-contact.json",
        type: 'POST',
        data: {
            id: id
        }
    }).done(function (contacts) {
        showContacts(contacts);
    });
}

console.debug(' 2) after ajax');

function showContacts (contacts){
    $('#agenda tbody').html('');
    for (var i = 0; i<contacts.length; i++){
        var person= contacts[i];
        $('#agenda tbody').append(getRow(person));
    }
}

$('#agenda ').on('click','button',function(){
    var id = $(this).data('id');
    console.info ('remove this contact',this, id);
    removeContact(id);
});