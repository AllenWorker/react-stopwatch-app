

// Add zero padding
function zeroPad(number, size = 2) {
    let s = String(number);
    while (s.length < size) { s = '0' + s;}
    return s;
}

// Convert time from milliseconds int to hh:mm:ss.SS string
export default function TimeFormat(milliseconds) {

    let remaining = milliseconds / 1000;

    const hh = parseInt( remaining / 3600, 10);

    remaining %= 3600;

    const mm = parseInt( remaining / 60, 10);
    const ss = parseInt( remaining % 60, 10);
    const SS = parseInt( (milliseconds % 1000) / 10, 10);

    return `${ zeroPad( hh ) }:${ zeroPad( mm ) }:${zeroPad( ss ) }.${zeroPad( SS ) }`;

}