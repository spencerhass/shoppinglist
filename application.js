(function () {
	"use strict";
	
function ShoppingList() {
	this.restore();
	}
	
ShoppingList.prototype= {
addItem: function addItem(item) {
var id="item_" + (this.id)++;
this.items[id] = {name:item, completed:false};
this.updateStorage();
return id;
},

getItem: function getItem (id) {
return this.items[id];
},

removeItem:function removeItem(id) {
delete this.items[id];
this.updateStorage();
},

updateItem:function updateItem(id, name) {
	this.items[id].name=name;
	this.updateStorage();
	},

toggleItem:function toggleItem(id) {
	this.items[id].completed=!this.items[id].completed;
	this.updateStorage();
	},

updateStorage: function updateStorage() {
	localStorage.shoppingListItems=JSON.stringify(this.items);
	localstorage.shoppingListID = this.id;
	},

restore: function restore () {
	if (localStorage.shoppingListItems) {
		this.items = JSON.parse(localStorage.shoppingListItems);
		this.id = parse.Int (localStorage.shoppingListID, 10);
	} else {
		this.items={};
		this.id=0;
		}
	},
getIDs: function getIds() {
	return Object.keys(this.items);
	},
count:function count () {
	return Object.keys(this.items).length;
	}}
	});
	
	

     