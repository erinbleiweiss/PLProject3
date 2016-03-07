var person = function(){
    // private data
    var data = {
        firstName: 'First',
        $firstName: function(n){
            data.firstName = n;
        },
        lastName: 'Last',
        $lastName: function(n){
            data.lastName = n;
        },
        email: 'name@domain.com',
        $email: function(n){
            data.email = n;
        }
    };

    var F = function(){};
    f = new F();

    // public data
    f.run = function (e) {
        return data[e];
    };
    f.getDisplayText = function(){
        return "Name: " + f.run("firstName") + " " + this.run("lastName") + "<br>" +
               "Email: " + this.run("email");
    };

    return f;

}();


var customer = function(p){
    // private data
    var data = {
        customerNum: 0,
        $customerNum: function(n){
            data.customerNum = n;
        }
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };
    f.getDisplayText = function(){
        return F.prototype.getDisplayText() + "<br>" +
               "Customer number: " + this.run("customerNum");
    };

    return f;
}(person);


var employee = function(p){
    // private data
    var data = {
        ssn: 0,
        $ssn: function(n){
            data.ssn = n;
        }
    };

    var F = function(){};
    F.prototype = p;
    f = new F();

    // public data
    f.run = function (e) {
        var r = data[e];
        if(r === undefined) return F.prototype.run(e);
        else return r;
    };

    f.getDisplayText = function(){
        return F.prototype.getDisplayText() + "<br>" +
            "Social security number: " + this.run("ssn");
    };

    return f;
}(person);




$(document).ready(function( ){

    var customerForm = $('#customerForm');
    var employeeForm = $('#employeeForm');

    $("input:radio[name=formtype]").click(function() {
        var value = $(this).val();
        if (value == "customer"){
            customerForm.removeClass("hide");
            employeeForm.addClass("hide");
        } else {
            employeeForm.removeClass("hide");
            customerForm.addClass("hide");
        }

    });

    $("#customerForm").submit(function(e){
        e.preventDefault();
        var firstName = $('#c_firstName').val();
        var lastName = $('#c_lastName').val();
        var email = $('#c_email').val();
        var customerNum = $('#customerNum').val();

        var c1 = Object.create(customer);
        c1.run('$firstName')(firstName);
        c1.run('$lastName')(lastName);
        c1.run('$email')(email);
        c1.run('$customerNum')(customerNum);

        $("#result").removeClass("hide");
        $("#result").html("You entered:<br><br>");
        $("#result").append(c1.getDisplayText());
        disableForm();

    });

    $("#employeeForm").submit(function(e){
        e.preventDefault();
        var firstName = $('#e_firstName').val();
        var lastName = $('#e_lastName').val();
        var email = $('#e_email').val();
        var ssn = $('#ssn').val();

        var e1 = Object.create(employee);
        e1.run('$firstName')(firstName);
        e1.run('$lastName')(lastName);
        e1.run('$email')(email);
        e1.run('$ssn')(ssn);

        $("#result").removeClass("hide");
        $("#result").html("You entered:<br><br>");
        $("#result").append(e1.getDisplayText());
        disableForm();

    });

    $("#continue").click(function(){
        $("#result").addClass("hide");
        $("#continue").addClass("hide");
        $("#applicationInput").removeClass("hide");
        $("input:radio[name=formtype]").prop('checked', false);
        employeeForm.addClass("hide");
        customerForm.addClass("hide");
        $("input[type=text]").val("");

    });

});

function disableForm(){
    $("#applicationInput").addClass("hide");
    $("#continue").removeClass("hide");
}

