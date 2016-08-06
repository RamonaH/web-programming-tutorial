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
        '<td><button data-id="'+ person.id + '" class=" remove">remove</button>'+
        '<button data-id="'+ person.id + '" class="edit">edit</button></td>'+
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

    var newContact = '';

    function editareContact(id) {

        $.ajax({
            dataType: 'json',
            url: "servlets/edit-contact.php"
        }).done(function (contacts) {
            //newContact=id;
            var newPerson = contacts [id - 1];
            console.debug(newPerson);
            $("input[name='firstName']").val(newPerson.firstName);
            $("input[name='lastName']").val(newPerson.lastName);
            $("input[name='phone']").val(newPerson.phone);


        });

    }

    function showContacts(contacts) {
        $('#agenda tbody').html('');
        for (var i = 0; i < contacts.length; i++) {
            var person = contacts[i];
            $('#agenda tbody').append(getRow(person));
        }
    }

    $('#agenda ').on('click', 'button.remove', function () {
        var id = $(this).data('id');
        console.info('remove this contact', this, id);
        removeContact(id);
    });

    $('#agenda ').on('click', 'button.edit', function () {
        var id = $(this).data('id');
        console.info('edit this contact', this, id);
        editareContact(id);
    });

    //$('#agenda ').on('click', 'button.add', function () {
    //    var id = $(this).data('id');
    //    console.info('add this contact', this, id);
    //    addContact(id);
    //});

