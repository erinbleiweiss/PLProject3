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
    }

    var F = function(){};
    f = new F();

    // public data
    f.run = function (e) {
        return data[e];
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

    return f;
}(person);
