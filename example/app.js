/**
 * This is a small example to run the CINEMA 4D Render from a Node.js app.
 */


/**
 * Module dependencies.
 */
var c4d = require('c4d');

/**
 * Set the path to the CINEMA 4D application.
 */
//c4d.setApplicationPath('/path/to/cinema/4d');

/**
 * Get the application path.
 */
//console.log('CINEMA 4D app path: '+c4d.getApplicationPath());

/**
 * Render a c4d file and override some parameter.
 */
c4d.render({filepath: 'files/project.c4d', frame: '0', silent: true, report: 'files/'}, function(c) {
  console.log('Time:\n'+c.time+'\n');
  console.log('Command options:\n'+c.command_options+'\n');
  console.log('Cinema4D stdout:\n'+c.cinema4d_stdout+'\n');
  console.log('Cinema4D stderr:\n'+c.cinema4d_stderr+'\n');
  console.log('Code:\n'+c.code+'\n');
});

/**
 * Read a report.json. The report file must exist before you render...
 */
// c4d.report.read('./files/', function(data) {
//   console.log('time: ');
//   console.log(data.time);
//   console.log('command_options: ');
//   console.log(data.command_options);
//   console.log('cinema4d_stdout: ');
//   console.log(data.cinema4d_stdout);
//   console.log('cinema4d_stderr: ');
//   console.log(data.cinema4d_stderr);
//   console.log('code: ');
//   console.log(data.code);
// });
