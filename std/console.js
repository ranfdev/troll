// -*- mode: js; js-indent-level: 4; indent-tabs-mode: nil -*-

/* exported console */

/*
 * https://console.spec.whatwg.org/
 */

function printable(arg) {
    if (typeof arg === 'object')
        return JSON.stringify(arg);
    else
        return arg.toString();
}

var console = {
    log(...args) {
        print(args.map(printable).join(' '));

    },
    error(...args) {
        printerr(args.map(printable).join(' '));
    },
    debug(...args) {
        this.log(...args);

    },
};