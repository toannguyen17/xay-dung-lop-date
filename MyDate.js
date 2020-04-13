
// MyDate

let MyDate = function(day, month, year) {
	this.day   = day;
	this.month = month;
	this.year  = year;
}

// get
MyDate.prototype.getDay = function() {
    return this.day;
}
MyDate.prototype.getMonth = function() {
    return this.month;
}
MyDate.prototype.getYear = function() {
    return this.year;
}

// set
MyDate.prototype.setDay = function(day) {
    this.day = day;
    return this.day;
}
MyDate.prototype.setMonth = function(month) {
    this.month = month;
    return this.month;
}
MyDate.prototype.setYear = function(year) {
    this.year = year;
    return this.year;
}
MyDate.prototype.setDate = function(day, month, year) {
	this.day   = day;
	this.month = month;
	this.year  = year;
	return this.toString();
}

//
MyDate.prototype.toString = function() {
    return this.getDay() + '/' + this.getMonth() + '/' + this.getYear();
}
