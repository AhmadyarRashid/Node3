const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs');

//yargs.version('1.1.0');
yargs.command({
    command : 'add',
    describe : 'Add a new Note',
    handler : function(){
        console.log('Add New Note !')
    }
})

yargs.command({
    command: 'remove',
    describe : 'Remove a Note',
    handler : function(){
        console.log('Remove a Note')
    }
})

yargs.command({
    command: 'list',
    describe : 'show list of notes',
    handler : function(){
        console.log('display a list of notes')
    }
})

yargs.command({
    command : 'read',
    describe : 'Read a note',
    handler : function(){
        console.log('Read a Note')
    }
})

console.log(yargs.argv);

