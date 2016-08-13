/**
 * Created by Maxi on 6/11/2016.
 */
console.debug('1) loading agenda');

function getRow(person){
    var firstName= person.firstName;
    var lastName= person.lastName;
    var phone= person.phone;
    var row= '<tr>' +
        '<td>' + firstName + '</td>' +
        '<td>' + lastName + '</td>' +
        '<td>' + phone + '</td>' +
        '<td>' +
            '<button class="remove" data-id="' + person.id + '">remove</button>' +
            '<button class="edit" data-id="' + person.id + '">edit</button>' +
        '</td>'+
    '</tr>';
    return row;
}

$.ajax({
    url: "servlets/load-contacts.php",
    dataType: 'json',
    cache:false
}).done(function(contacts) {
   console.debug (' 3) ajax done',contacts);
    showContacts(contacts);
});



function removeContact(id) {
    $.ajax({
        url: "servlets/remove-contact.php",
        dataType: 'json',
        //Delete
        type: 'POST',
        data: {
            id: id
        }
    }).done(function (contacts) {
        showContacts(contacts);
    });
}
    //function addContact(id) {
    //
    //
    //    $.ajax({
    //        url: "servlets/save-contact.php",
    //        dataType: 'json',
    //        //Delete
    //        type: 'POST',
    //        data: {
    //            id: id
    //        }
    //    }).done(function (contacts) {
    //        addContact(contacts);
    //    });



    console.debug(' 2) after ajax');

function editareContact(Person) {
    $("[name='id']").val(Person.id);
    $("[name='firstName']").val(Person.firstName);
    $("[name='lastName']").val(Person.lastName);
    $("[name='phone']").val(Person.phone);

}

var allContacts= [];
function showContacts(contacts) {
    allContacts= contacts;
    $('#agenda tbody').html('');
    for (var i = 0; i < contacts.length; i++) {
        var person = contacts[i];
        $('#agenda tbody').append(getRow(person));
    }
}

function findContactById (id) {

    for (var i = 0; i < allContacts.length; i++) {

        var Person = allContacts [i];

        if (id == Person.id) {
            return Person;
        }
    }
}

$('#agenda ').on('click', 'button.remove', function () {
    var id = $(this).data('id');
    console.info('remove this contact', this, id);
    removeContact(id);
});

$('#agenda ').on('click', 'button.edit', function () {
    var id = $(this).data('id');
    var Person= findContactById(id);
    console.info('edit this contact', this, id, Person);
    editareContact(Person);
});


